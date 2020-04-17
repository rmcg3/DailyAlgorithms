function anagrams(word, words) {
  var arr = [];
  word = word.split("").sort().join("")
  for (var i = 0; i < words.length; i++) {
    var temp = words[i]
    if(words[i].split("").sort().join("") == word){
      arr.push(temp)
      temp = ''
    }

  }
  return arr
}
 console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
