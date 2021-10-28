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


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);  //stores keys of object1 in variable keys1
  const keys2 = Object.keys(object2);  //stores keys of object1 in variable keys2

if (keys1.length !== keys2.length) {
  return false;
} 
for (const item of keys1) {
  if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
    return eqArrays(object1[item], object2[item]);
  } else {
    if (object1[item] !== object2[item]) {
      return false
    }
  }
}
return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //add this line as per instructions
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba); // => should PASS
assertObjectsEqual(ab, abc); // => should FAIL
assertObjectsEqual(cd, dc); // => should PASS
assertObjectsEqual(cd, cd2); // => should FAIL

