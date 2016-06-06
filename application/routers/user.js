const router = require('koa-router');

var users = {
  "1": {
    name: 'aaa',
    job: 'lol'
  },
  "2": {
    name: 'gogogo',
    job: 'dota'
  }
}

var user = router();
user
  .prefix('/api/user/:id')
  .param('id', function *(id, next){
    this.user = users[id];
    if(!this.user) return this.status = 404;
    yield next;
  })
  .get('/getname', function *(next) {
    this.body = 'name :' + this.user.name;
  })
  .get('/getjob', function *(next) {
    this.body = 'job :' + this.user.job;
  });

module.exports = user;