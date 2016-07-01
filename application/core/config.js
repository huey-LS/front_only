class Config {
  get config_path() {
    return '../config';
  }
  get conf_set() {
    var config;
    try {
      config = require(this.config_path + '/conf_set');
    } catch(e) {
      config = [];
    }
    return config;
  }
  get config_list() {
    var configs;
    try{
      configs = require(this.config_path + '/config_list');
    } catch(e) {
      configs = {};
    }
    return configs;
  }
  constructor() {
    this._configs = {};
    for(let key in this.config_list) {
      let config = require(this.config_path + '/' + this.config_list[key]);
      let [...conf_set] = ['default', ...this.conf_set];
      let [...configs] = [{}, ...conf_set.map(val => config[val])];
      this._configs[key] = Object.assign.apply(Object, configs);

      this.__defineGetter__(key, () => this._configs[key]);
    }
  }
  get(name) {
    return this._configs[name];
  }
}

module.exports = new Config();