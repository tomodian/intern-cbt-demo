const registerSuite = require('intern!object');
const assert = require('intern/chai!assert');

const aclass = require('./auth');

registerSuite({
  'class init': function () {
    const auth = new aclass.Auth;
    assert.equal(auth.hello(), 'hello!');
  },
});
