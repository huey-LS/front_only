const path = require('path');
const koa = require('koa');
const router = require('koa-router');
const send = require('koa-send');
const react = require('koa-react-view');
const register = require('babel-core/register');

const config = require('./application/core/config.js');

const fs = require('fs');

var getRouters = function(router){
  router = router.replace(/^routers\//, __dirname + '/application/routers/');
  return router;
};

var app = koa();


var viewPath = path.join(__dirname, 'dist/views');
var jsxPath = path.join(__dirname, 'src/jsx');
var assetsPath = path.join(__dirname, 'dist');
var assetUrl = '/assets/';


register({
  only: [
    jsxPath
  ],
  presets: ['react']
});


// views
react(app, {
  views: jsxPath
});


var scriptRender = function(file, data){
  var data = data || {};
  if(data.preload){
    var preloadFile = path.join(viewPath, data.preload + '.entry.js');
    try {
      var preloadScript = fs.readFileSync(preloadFile);
      data.preloadScript = preloadScript.toString();
      this.render(file, data);
    } catch(e){
      this.status = 404;
      this.body = `${preloadFile} not found html`;
      console.log(e);
    }
  }
};
app.use(function *(next){
  this.scriptRender = scriptRender;
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


app.listen(config.get('config').port);
console.log('server start listen at ' + config.get('config').port);