function digPow(n, p){
  //convert n to array of single digits
  var tempN = n;
  
  n = (""+n).split("");
  n = n+'';
  numN = n.split(',').map(Number);
  
  //calc sum
  var sum = 0;
  for (var i = 0; i < numN.length; i++) {
    sum += Math.pow(numN[i], p)
    p++
  }
  
  //need to find k in sum = n * k
  var k =-1
  if(sum%tempN==0){
    k = sum/tempN
    return k;
  }else{
    return k;
  }
}

console.log(digPow(46288,3))
