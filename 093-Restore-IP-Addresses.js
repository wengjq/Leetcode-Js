/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var res = [];
    
  dfs(s, 4, "", res);
    
  return res;  
};

function dfs(s, k, out, res) {
  if (k == 0) {
    if (!s.length) res.push(out);
  } else {
    for (var i = 1; i <= 3; ++i) {
      if (s.length >= i && isValid(s.substr(0, i))) {
        if (k == 1) dfs(s.substr(i), k - 1, out + s.substr(0, i), res);
        else dfs(s.substr(i), k - 1, out + s.substr(0, i) + ".", res);
      }
    }
  }
}

function isValid(s) {
  if (!s.length || s.length > 3 || (s.length > 1 && s[0] == '0')) return false;
    
  var res = parseInt(s);
    
  return res <= 255 && res >= 0;
}
