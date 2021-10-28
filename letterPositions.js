const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ${array1} === ${array2}`)
  } else {
    console.log(`🛑 ${array1} !== ${array2}`)
  }
};
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

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

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


//
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (i !== " ") { //skip over empty spaces
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
        } else {
          results[sentence[i]] = [i];
        }
      }
    }
  return results;
};

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);


