const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {}

  for (let letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1
      }
    }
  }
  return result

  };
console.log(countLetters("lighthouse in the house"));

const result1 = countLetters("lighthouse in the house")

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);