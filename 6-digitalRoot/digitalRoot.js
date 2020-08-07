function digital_root(n) {

     n = (""+n).split("");
     n = n+'';
     numN = n.split(',').map(Number);

     let sum = numN.reduce(function(a, b) { return a + b; }, 0);
     sum = sum.toString();
  
     if(sum.length == 1){
        sum = parseInt(sum)
        return sum;
     } else{
       sum = parseInt(sum)
       return digital_root(sum);
     }
}
var num = 493193;
console.log(digital_root(num))
