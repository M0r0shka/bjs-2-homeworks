function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    result = arr1.every(compareEach);
    function compareEach(item, idx) {
      return item === arr2[idx];
    }
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => (item > 0))
                     .filter((item) => (item % 3 === 0))
                     .map((item) => (item * 10));
  return resultArr; // array
}
