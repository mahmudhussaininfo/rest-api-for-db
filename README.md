# Rest api with express server

This is my first api for react js.

## First clone this repo and install package

```console

$ npm install

```

## Server Structure

```js

const express = require('express');
const colors = require('colors');
const { urlencoded } = require('express');
const env = require('dotenv').config();


//port init
const PORT = process.env.PORT || 5050

//express init
const app = express();

//express middileware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//listen port
app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`.bgYellow.black);
});

```




