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

## Example

```javascript
import { success, forbidden } from "express-easy-helper";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  success(res, "hello");
});

app.get("/about", (req, res) => {
  success(res, {"hello" : "world"});
});

app.get("/protected", (req, res) => {
  forbidden(res);
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

// Object
success(res, { result: "ok" });

// Code status and Object
success(res, 201, { object });
```

## License

MIT © [Leonardo Rico](https://github.com/kevoj/express-easy-helper/blob/master/LICENSE)
