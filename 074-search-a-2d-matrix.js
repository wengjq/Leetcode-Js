/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var arr = flatten(matrix);
  var len = arr.length;
  var left = 0;
  var right = len;

  while (left < right) {
    var mid = Math.floor((left + right) / 2);

    if (target < arr[mid]) {
      right = mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      return true
    }
  }

  return false;    
};

function flatten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}
