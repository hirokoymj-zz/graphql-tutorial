import React from "react";
import { useMutation, useQuery, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const SAY_HELLO = gql`
  query sayHello($name: String!) {
    sayHello(name: $name)
  }
`;

const HELLO = gql`
  query hello {
    hello
  }
`;

export default function UploadForm() {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
  });

  const { data, loading, error } = useQuery(HELLO);
  console.log(loading);

  if (!loading) console.log(data);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    uploadFile({ variables: { file } });
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
