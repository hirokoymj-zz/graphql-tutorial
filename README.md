# Node.js and GraphQL Template

## Set up nodemon

1. Install and set up nodemon in scripts.

```js
  "scripts": {
    "serve": "nodemon index.js --exec babel-node index.js"
  },
```

2. Run script

```js
npm run serve
```

**References:**

- https://www.npmjs.com/package/nodemon
- https://stackoverflow.com/questions/52674608/babel-transpiler-failing-to-run-with-nodemon/52702670#52702670

## Installed packages

[03/25/2021]

- [graphql-tools](https://github.com/ardatan/graphql-tools)
- [graphql-scalars](https://www.npmjs.com/package/graphql-scalars)
- [graphql-upload](https://github.com/jaydenseric/graphql-upload#type-fileupload)

## Setup packages

[03/24/2021]

```js
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
```

### After installing Babel, create a file with the name

```js
{
  "presets": [
    [
      "@babel/env",
      { "targets": { "node": "current" } }
    ]
  ]
}
```

```js
npm install --save express apollo-server-express graphql graphql-tools graphql-tag
```

### Add `script` section in `package.json`.

```js
{
  "scripts": {
    "serve": "babel-node index.js"
  },
}
```

### References;

https://www.toptal.com/graphql/creating-your-first-graphql-api
https://www.graphql-tools.com/docs/generate-schema/
