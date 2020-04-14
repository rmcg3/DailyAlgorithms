function list(names){
  let myArray = [];
  for (var i = 0; i < names.length; i++) {
    myArray.push(names[i].name)
  }
  return myArray.join(", ").replace(/,(?!.*,)/gmi, " &");
}


console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
