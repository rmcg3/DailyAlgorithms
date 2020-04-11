function squareDigits(num){
  //convert to array of digits
  num = (""+num).split("");
  num = num+'';
  numN = num.split(',').map(Number);

  //square every digit
  for (var i = 0; i < numN.length; i++) {
    numN[i] = Math.pow(numN[i],2);
  }
  //convert every sqaured int to String
  strN = numN.map(String);
  strN = strN.join('');
  let intN = parseInt(strN);
  return intN;
}

console.log(squareDigits(9119));
