const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// copied from eqArrays.js exercise
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  };

  // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 

  // copied from assertArraysEqual.js exercise
  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅ ${array1} === ${array2}`)
    } else {
      console.log(`🛑 ${array1} !== ${array2}`)
    }
  };
  
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

const without = function(source, itemsToRemove) {
  var results = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      results.push(item);
    }
  }
  return results;
}

without([1, 2, 3], [1]);

const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(result, ["hello", "world",]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);