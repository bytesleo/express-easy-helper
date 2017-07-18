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
## Example

ES6 with promises

```javascript

import api from 'express-easy-helper';
import Hello from '../models/hello';

export function list(req, res) {

  Hello.find().exec()
     .then(api.ok(res))
     .catch(api.error(res));

}

export function read(req, res) {

  Hello.findById(req.params.id).exec()
     .then(api.notFound(res))
     .then(api.ok(res))
     .catch(api.error(res));

}

```
Options

```javascript

//Promises  
api.ok(res)
api.ok(res,201)

//Simple (Not promises)
api.ok(res, 'success!')
api.ok(res, 200 ,'success!')
api.ok(res, {message: 'success'})
api.ok(res, 200 ,{message: 'success'})

```

## Method's

* ok()
* error()
* notFound()
* unauthorized()
* forbidden()
* badRequest()
* unsupportedAction()
* invalid()

## License

MIT © [Leonardo Rico](https://github.com/kevoj/express-easy-helper/blob/master/LICENSE)
