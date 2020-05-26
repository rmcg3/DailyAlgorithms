function likes(names) {

  //cover special/obvious cases
  if (names.length == 0)
    return "no one likes this"
  if (names.length == 1)
    return `${names[0]} likes this`
  if (names.length == 2)
    return `${names[0]} and ${names[1]} like this`
  if (names.length == 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`

  //any case where there's more than 3 likes
  if (names.length > 3) {
    let additionalLikes = names.length - 2
    return `${names[0]}, ${names[1]} and ${additionalLikes} others like this`
  }

}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
