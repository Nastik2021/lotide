const takeUntil = function(array, callback) {
  // loop through the array until we hit the value specified in callback

  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item)
    } else {
      break;
    }
  }
  return results;

}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); //calling function
console.log(results2);

