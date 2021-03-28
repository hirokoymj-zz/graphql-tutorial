# useQuery/useMutation in React

- useQuery hooks uses {}
- useMutation hook uses []

**useQuery/useMutation**

```js
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

cosnt Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  onSubmit = (e) => {
    e.preventDefault();
    updateTodo({ variables: { type: input.value } });
  };
}
```

**Q1:**

- Defines `useQuery` with `GET_TODOS` query.

**Q1-Answer:**

```js
const { loading, error, data } = useQuery(GET_TODOS);
```

<hr />

**Q2:**

- Defines `useMutation` with `UPDATE_TODO` mutation.

**Q2-Answer:**

```js
const [updateTodo] = useMutation(UPDATE_TODO);

onSubmit = () => {
  updateTodo({ variables: { type: input.value } });
};
```

<hr />

<!--
**Q1:**

```js

```

**Q1-Answer:**

```js

```

<hr />
 -->

https://www.apollographql.com/docs/react/v2/data/queries/
