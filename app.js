const path = require('path');
const koa = require('koa');
const router = require('koa-router');
const send = require('koa-send');

const fs = require('fs');

var getRouters = function(router){
  router = router.replace(/^routers\//, __dirname + '/application/routers/');
  return router;
};

var app = koa();


var viewPath = path.join(__dirname, 'dist/views');
var assetsPath = path.join(__dirname, 'dist');
var assetUrl = '/assets/';

var HTMLRender = function(file, data){
  var data = data || {};
  if(data.entry){
    var entryFile = path.join(viewPath, data.entry);
    try {
      var entryScript = fs.readFileSync(entryFile);
      var html = `
        <html>
          <head>
            <title>${data.title ? data.title : ''}</title>
          </head>
          <body>
            ${entryScript ? '<script>' + entryScript + '</script>' : ''}
          </body>
        </html>
      `;
      this.body = html;
    } catch(e){
      this.body = `${entryFile} not found html`;
    }
  }
};
app.use(function *(next){
  this.render = HTMLRender;
  yield next;
});

// assets
var assets = router();
assets.prefix(assetUrl).get('*', function *(next){
  var path = this.path.substr(assetUrl.length);
  if(path){
    yield send(this, path, { root: assetsPath });
  } else {
    yield next;
  }
});
app.use(assets.routes());


var home = require(getRouters('routers/home'));
app.use(home.routes());


app.listen(80);
console.log('server start listen at 80');