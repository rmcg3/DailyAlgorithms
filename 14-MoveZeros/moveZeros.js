var moveZeros = function (arr) {
  var count = 0;
  for(var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === 0) {
          arr.splice(i, 1);
          count++
      }

  }
  for (var i = 0; i < count; i++) {
    arr.push(0)
  }
return arr
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
