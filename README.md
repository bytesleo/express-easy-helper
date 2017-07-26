# express-easy-helper

> Simple helper module for Express, return promises and simple response's

## Installation

NPM

```bash
npm install express-easy-helper --save
```
Git

```bash
git clone https://github.com/kevoj/express-easy-helper
cd express-easy-helper
npm i
```
## Examples

**ES6 (promises)**

```javascript
import express from 'express';
import {result, notFound, error} from 'express-easy-helper';
const app = express();
import Hello from 'models/hello.model';

app.get('/', (req, res) => {
	Hello.find().exec()
		.then(notFound(res)) // Return status 404
		.then(result(res)) // Return status 200 and Hello's object
		.catch(error(res));// Return status 500 with error
 });
```

**ES5**

```javascript
var express = require('express');
var api = require('express-easy-helper');
var app = express();

// Return status 200 with text 'Hello world'
app.get('/', function(req, res) {
	return api.result(res, 'Hello world');
});
// Return status 201 with text 'Hello world'
app.get('/', function(req, res) {
	return api.result(res, 201 ,'Hello world!');
});
// Return status 200 with Object
app.get('/', function(req, res) {
	return api.result(res, {message: 'Hello world!'});
});
// Return status 201 with Object
app.get('/', function(req, res) {
	return api.result(res, 201 ,{message: 'Hello world!'});
});

```

## Method's

```javascript

// 200
result(res)

// 400
badRequest(res)

// 401
unauthorized(res)

// 403
forbidden(res)

// 404
notFound(res)

//405
unsupportedAction(res)

//422
invalid(res)

// 500
error(res)

```

## License

MIT © [Leonardo Rico](https://github.com/kevoj/express-easy-helper/blob/master/LICENSE)
