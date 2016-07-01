import router from 'koa-router';

import Api from '../lib/api.js';

var api_rounter = router();
api_rounter
  .prefix('/api')
  .get('/:api_name', function *() {
    var api_name = this.params.api_name;
    var _self = this;
    yield function(next){
      try {
        var api_action = new Api(api_name);
        api_action.send({}).then(function(res) {
          _self.body = res.toString();
          next();
        }).catch(function(e) {
          console.log(e);
          next();
        });
      } catch(e) {
        console.log(e);
        next();
      }
    };
  });

module.exports = api_rounter;
