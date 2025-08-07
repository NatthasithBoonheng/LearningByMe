function longestWord(sentence) {
  let word = ''
  if(typeof(sentence) != "string" || sentence === ""){
    return word
  }
  let arr = sentence.split(" ");
  arr.forEach((i)=> (i.length > word.length || word === '') ? word = i: word = word)
  return word
}
module.exports = longestWord

// console.log(longestWord("The quick brown fox jumped over the lazy dog"));
// console.log(longestWord("JavaScript is super fun and powerful"));
// console.log(longestWord("Hi"));
// console.log(longestWord("Well, this test-case is tricky!"));
// console.log(longestWord(""));
// console.log(longestWord(undefined));
// console.log(longestWord(null));
// console.log(longestWord(12345));
// console.log(longestWord(["not", "a", "string"]));