# express-easy-helper

> Simple helper module for express

## Installation

npm

```bash
npm install express-easy-helper --save
```

yarn

```bash
yarn add express-easy-helper
```

## Usage

```javascript
import { success, unauthorized, forbidden, error } from "express-easy-helper";
import express from "express";
const app = express();

// success
app.get("/", (req, res) => {
  success(res, { hello: "world" });
});

// unauthorized
app.get("/protected", (req, res) => {
  unauthorized(res);
});

// forbidden
app.get("/protected", (req, res) => {
  forbidden(res);
});

// error
app.get("/error", (req, res) => {
  error(res);
});
```

## Method's

```javascript
// 200
success(res);

// 400
badRequest(res);

// 401
unauthorized(res);

// 403
forbidden(res);

// 404
notFound(res);

//405
unsupportedAction(res);

//422
invalid(res);

// 500
error(res);
```

## Options

```javascript
// Basic
success(res);

// Code status
success(res, 201);

// Data
success(res, { hello: "world" });

// Code status and data
success(res, 201, { hello: "world" });
```

## License

MIT © [Leonardo Rico](https://github.com/kevoj/express-easy-helper/blob/master/LICENSE)
