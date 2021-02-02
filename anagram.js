
// Given an array of strings, return all groups of strings that are anagrams. Represent a group by a 
// list of integers representing the index in the original list. Look at the sample case for clarification.

// Anagram : a word, phrase, or name formed by rearranging the letters of another, such as 'spar', formed from 'rasp' 
 
// Note: All inputs will be in lower-case. 
// Example :
// Input : cat dog god tca
// Output : [[1, 4], [2, 3]]
// cat and tca are anagrams that correspond to index 1 and 4.
// dog and god are another set of anagrams that correspond to index 2 and 3.

// The indices are 1 based ( the first element has index 1 instead of index 0).

// Ordering of the result : You should not change the relative ordering of the words 
// / phrases within the group. Within a group containing A[i] and A[j], A[i] comes before A[j] if i < j.


function getAnagramIndexs(A) {
  const anagrams = {}
  for(let i = 0; i < A.length; i++) {
    const word = A[i]
    const worldId = sortString(word)
    if (anagrams[worldId] && anagrams[worldId] !== null) {
      anagrams[worldId].push(i+1)
    } else {
      anagrams[worldId] = [i+1]
    }
  }
  return Object.values(anagrams) 
}

function sortString(string) {
  string = string.split('')
  for(let i = 0; i < string.length - 1; i ++) {
    for(let j = 0; j < string.length - i - 1; j++) {
      if(string[j] > string[j + 1]) {
        let temp = string[j + 1]
        string[j + 1] = string[j]
        string[j] = temp 
      }
    }
  }

  return string.join('')
}

console.log(getAnagramIndexs(['cat', 'dog', 'god', 'tca', 'cta', 'odg', 'full'])) 
// [[1, 4, 5], [2, 3, 6], [7]]
