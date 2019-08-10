/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var parts = path.split('/');
  var simplified = [];

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];

    if (part == '.' || part == '') continue;

    if (part == '..') {
      simplified && simplified.pop();
    } else {
      simplified.push(part);
    }
  }

  return '/' + simplified.join('/');
};
