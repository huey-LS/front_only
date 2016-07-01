const router = require('koa-router');

var home = router();
home
  .get('/', function *(next) {
    this.render('home', {site: 'gifty', title: 'gifty'});
  })
  .get('/go', function *(next) {
    this.render('preload', {entry: 'go', title: 'gifty-go'});
  });

module.exports = home;