let word = "kayak"
function palindrome (string) {
  let chkStr = string.split("").reverse().join("")
  return chkStr === string
}
console.log(palindrome(word))
