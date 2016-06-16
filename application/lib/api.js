import config from '../core/config';
import http from 'http';
import url from 'url';

class api {
  constructor(name) {

    this.config = config.api[name];
    if(!this.config){
      throw new Error(`${name} not set`);
    }
  }

  send(
    {
      host = this.config.host,
      port = this.config.port,
      path = this.config.path,
      method = 'GET',
      headers
    },
    data
  ) {
    var resolve, reject;
    var p = new Promise((rev, rej) => {
      resolve = rev;
      reject = rej;
    });

    headers = Object.assign({
      'Content-Type': 'application/text'
    }, headers);

    data = Object.assign({}, this.config.data, data);

    path.replace(/\{(\w+)\}/, (r, key) => {
      if(data && data[key]){
        return data[key];
      } else if(this.config[key]){
        return this.config[key];
      } else {
        return r;
      }
    });

    if(method === 'GET'){
      let _path = url.parse(path);
      _path.query = data;
      path = url.format(path);
    }
    var options = {host, path, port, method, headers};

    var req = http.request(options, function(res){
      res.setEncoding('utf8');
      var resBody;
      res.on('data', (chunk) => {
        resBody = chunk;
      });
      res.on('end', () => {
        resolve(resBody);
      });
    });
    req.on('error', (e) => {
      reject(e);
    });

    if(method === 'POST'){
      req.write(data);
    }
    req.end();

    return p;
  }
}


module.exports = api;