const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual.js')


assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);