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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // false
   
