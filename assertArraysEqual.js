const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 

  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅ ${array1} === ${array2}`)
    } else {
      console.log(`🛑 ${array1} !== ${array2}`)
    }
  };
  
assertArraysEqual([1, 2, 3], [1, 2, 3]);