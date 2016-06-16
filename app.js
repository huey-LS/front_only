import path from 'path';
import koa from 'koa';
import router from 'koa-router';
import send from 'koa-send';
import react from 'koa-react-view';

import config from './application/core/config.js';
import Token from './application/core/token.js';

var getRouters = function(router){
  router = router.replace(/^routers\//, __dirname + '/application/routers/');
  return router;
};

var app = koa();

var viewPath = path.join(__dirname, 'src/views');
var assetsPath = path.join(__dirname, 'dist');
var assetUrl = '/assets/';

// views
react(app, {
  views: viewPath
});


// token
app.keys = config.base.cookie_keys;
app.use(function *(next){
  // ignore favicon
  if (this.path === '/favicon.ico' || this.path.indexOf(assetUrl) === 0){
    yield next;
    return;
  }

  var token = this.cookies.get('token');
  if(!Token.valid(token)){
    this.token_expired = true;
    var new_token = new Token();
    this.cookies.set('token', new_token.value, {
      signed: true,
      expires: new Date(new_token.expired_time)
    });
  }
  yield next;
});


// assets
var assets_router = router();
assets_router.prefix(assetUrl).get('*', function *(next){
  var path = this.path.substr(assetUrl.length);
  if(path){
    yield send(this, path, { root: assetsPath });
  } else {
    yield next;
  }
});
app.use(assets_router.routes());


var home_routers = require(getRouters('routers/home'));
app.use(home_routers.routes());

var api_routers = require(getRouters('routers/api'));
app.use(api_routers.routes());


app.listen(config.base.port);
console.log('server start listen at ' + config.base.port);
