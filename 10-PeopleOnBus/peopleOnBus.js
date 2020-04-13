var number = function(busStops){
  var pplIn = 0;
  var pplOff = 0;

  for (var i = 0; i < busStops.length; i++) {
    pplIn+=busStops[i][0]
  }

  for (var i = 0; i < busStops.length; i++) {
    pplOff+=busStops[i][1]
  }
  var total = pplIn-pplOff
  if(total<0){
    return 0
  }
  return total
}

console.log(number([[10,0],[3,5],[5,8]]));
