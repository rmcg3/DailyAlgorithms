function spinWords(word){
  let array  = word.split(" ");
    for (var i = 0; i < array.length; i++) {
      if(array[i].length >4){
        array[i] = array[i].split("").reverse().join("");
      }
    }
    return array.join(" ")
}
