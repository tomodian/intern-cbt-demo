const registerSuite = require('intern!object');
const assert = require('intern/chai!assert');

registerSuite({
  'passing test': function () {
    const result = 2 + 3;
    assert.equal(result, 5, 'Addition operator should add numbers together');
  },

  'failing test': function () {
    const result = 2 * 3;
    assert.equal(result, 6, 'Addition operator should add numbers together');
  },

  'module loading': function() {
    const Auth = require('./models/auth').Auth;
    const a = new Auth;
    assert.equal(a.hello(), 'hello!');
  },

  'window object': function() {
    window.hello = 100;
    assert.equal(window.hello, 100);
  },

  'commonjs module': function() {
    const is = require('is_js');
    assert.equal(is.array([]), true, `is.array should be true`);
  }
});
