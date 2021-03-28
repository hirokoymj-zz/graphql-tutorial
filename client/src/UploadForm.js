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
  mutation SayHello {
    sayHello(name: $name)
  }
`;

export default function UploadForm() {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
  });
  const [sayHello] = useMutation(SAY_HELLO);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    uploadFile({ variables: { file } });
  };

  const handleClick = (e) => {
    console.log("handleClick");
    e.preventDefault();
    sayHello({ variables: { name: "DAISUKE" } });
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleClick}>say hello</button>
    </div>
  );
}
