const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("❌Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("✅Assertion Failed: " + actual + " !== " + expected);

  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hi", "hi");
assertEqual("hi", "hello");
assertEqual(2, 5);


