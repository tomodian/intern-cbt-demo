'use strict';

const is = require('is_js');

class Auth {

  constructor() {
    console.log('hello');
    window.you = 'tube';
  }

  hello() {
    if(is.not.empty([])) {
      return 'is.not.empty here!';
    }
    return 'hello!';
  }
}

module.exports = {
  Auth: Auth
}
