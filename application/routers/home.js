const router = require('koa-router');

var home = router();
home
  .get('/', function *(next) {
    this.render('home', {site: 'gifty', title: 'gifty'});
  })
  .get('/go', function *(next) {
    this.scriptRender('preload', {preload: 'home', entry: 'home', title: 'gifty-go'});
  });

module.exports = home;