function likes(names) {

  /*switch case based on number of likes; if more than 3 likes, default
  case will statisfy*/
  switch (names.length) {
    case 0:
      return `no one likes this`
      break
    case 1:
      return `${names[0]} likes this`
      break
    case 2:
      return `${names[0]} and ${names[1]} like this`
      break
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }

}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
