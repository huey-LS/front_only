import crypto from 'crypto';

const key = 'hahaha';
const token_expired = 60000;

// 放内存中测试用
const token_list = [];

class Token {
  constructor() {
    var token, {value, expired_time} = this.createToken();
    this.value = value;
    this.expired_time = expired_time;
  }

  createToken() {
    var expired_time = (new Date()).getTime() + token_expired;
    var value = crypto.createHash('md5').update(expired_time + key).digest('hex');
    var token = {value, expired_time};
    token_list.push(token);
    return token;
  }

  static valid(token) {
    var current_token = token_list.find(_token => _token.value === token);
    if(!current_token || current_token.expired_time < new Date()){
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Token;