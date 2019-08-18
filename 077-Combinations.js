/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = [];
  var tmp = [];

  combineDfs(res, tmp, n, k, 1);
  
  return res;   
};

function combineDfs(res, tmp, n, k, start) {
    if (tmp.length == k) {
       res.push(tmp.slice());
       return;
    }
    
    for (var i = start; i <= n; i++) {
       tmp.push(i);
       combineDfs(res, tmp, n, k, i + 1);
       tmp.splice(tmp.length - 1, 1);
    }
}
