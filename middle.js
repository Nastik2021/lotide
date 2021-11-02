  //take an array and return the middle-most element(s) of the array

  const middle = function(array) {
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 === 0) {  //if array's length is even
      return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
    } else {
      return [array[Math.floor(array.length / 2)]];  // if array's length is odd
    }
  };

//console.log(middle([1, 2 3, 4]));

module.exports = middle
