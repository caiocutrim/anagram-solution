function sortString(string) {
  // strings are immutable
  string = string.split('')
  for(let i = 0; i < string.length - 1; i ++) {
    for(let j = 0; j < string.length - i - 1; j++) {
      if(string[j] > string[j + 1]) {
        let temp = string[j + 1]
        console.log(temp)
        string[j + 1] = string[j]
        console.log(string[j + 1])
        string[j] = temp 
        console.log(string[j])
      }
    }
  }
  string = string.join('')
  return string
}
// i
// j
// cat
console.log(sortString('cat'))
console.log(sortString('dog'))