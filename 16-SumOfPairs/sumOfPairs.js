//does not parse correctly from the left like the kata wanted but this is my attempt
var sum_pairs = function(ints, s) {
  var sum = [];
  for (var i = 0; i < ints.length; i++) {
    for (var j = i; j < ints.length; j++) {
      if (j + 1 != length) {
        if (ints[i] + ints[j + 1] == s) {
          sum.push(ints[i])
          sum.push(ints[j + 1])
          return sum
        }
      }
    }
  }
}

console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10))
