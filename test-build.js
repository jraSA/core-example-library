const assert = require('assert');
const { myHelloWorldFunction, getAllFriends } = require('./lib');

assert.deepStrictEqual(typeof myHelloWorldFunction, 'function');
assert.deepStrictEqual(typeof getAllFriends, 'function');
