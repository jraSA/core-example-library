const assert = require('assert');
const { UsersClient, TodosClient} = require('./lib');

assert.deepStrictEqual(typeof UsersClient, 'object');
assert.deepStrictEqual(typeof TodosClient, 'object');

TodosClient.get().then( result => console.log(result));