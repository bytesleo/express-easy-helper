# express-easy-helper

> Simple helper module for Express, return promises and simple response's

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
import express from "express";
import { success, forbidden } from "express-easy-helper";
const app = express();

app.get("/", (req, res) => {
  success(res, "hello");
});

app.get("/protected", (req, res) => {
  forbidden(res);
});

```

## Method's

```javascript
// 200
result(res);

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

## License

MIT © [Leonardo Rico](https://github.com/kevoj/express-easy-helper/blob/master/LICENSE)
