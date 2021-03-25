# Node.js and GraphQl Template

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
