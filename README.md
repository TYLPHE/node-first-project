# node-first-project
A basic informational site using node.js

## Update
This repo was [updated to express as assigned here](https://www.theodinproject.com/lessons/nodejs-introduction-to-express). [The previous assignment](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) used the following javascript (I placed the old node file in /public/javascripts/):

This file is renamed from a `.js` file to a `.mjs` file to give it the ability to `import` node instead of `require` it. 

```javascript
import * as http from 'node:http';
import * as fs from 'node:fs';

const hostName = 'localhost';
const port = 8080;

http.createServer((req, res) => {
  const myURL = new URL(req.url, `http://${hostName}:${port}/`);  
  let fileName = '';
  (myURL.pathname === '/') ? fileName = `index` : fileName = myURL.pathname;

  fs.readFile(`./${fileName}.html`, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(
        fs.readFileSync('./404.html', (err, data) => {
          if (err) throw (err);
          return data;
        })
      );
      return res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
}).listen(port);

```

With Express, I was able to update the js file into this, which is quite a bit simpler looking!:
```javascript
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});
router.get('/index', function(req, res) {
  res.render('index');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/contact-me', (req, res) => {
  res.render('contact-me');
});
router.get('*', (req, res) => {
  res.render('404');
});

module.exports = router;

```