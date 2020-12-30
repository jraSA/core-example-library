const assert = require('assert');
const { myHelloWorldFunction } = require('./lib');

assert.deepStrictEqual(typeof myHelloWorldFunction, 'function');
