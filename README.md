# Building a blog with Realm Node.js and Express

## Create a directory named realm-blog:
`mkdir realm-blog`

## Go to the project folder: 
`cd realm-blog`

## Initialize the Node.js project:
`npm init`

Example of init: 
```
name: (realm-blog)
version: 1.0.0
description: Realm Blog
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

### Use Express to handle web requests, Realm or the database, Embeded JavaSxript(EJS) to process its templates, body-parser o parse the queries which are passed from the form.
```
npm install --save express
npm install --save realm
npm install --save ejs
npm install --save body-parser
```

## Install nodemon
The server will restart whenever you modify the code.
`npm install -g nodemon`

##### Make changes in package.json folder:
```
{
  "main": "index.js",
  "scripts": {
    "serve": "nodemon index.js"
  },
  ...
}
```

## Run the test server:
`npm run serve`

### Source
[Tutorial](https://academy.realm.io/posts/realm-node-js-express-blog-tutorial/)

[Github](https://github.com/dalinaum/realm-blog/blob/a2b86d07c3075f10607fc5c6a80e855391ed3bed/tutorial/blog-en.md)