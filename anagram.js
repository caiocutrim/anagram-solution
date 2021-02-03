
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


function getAnagramIndexes(anagramList) {
  let anagramsObject  = {}
  let count = 1

  anagramsObject = update(anagramList, anagramsObject,  count)

  return Object.values(anagramsObject)
}

function update(anagramList, anagramsObject, count) {

  const updateObj = (key) => 
    isValidAnagramKey(key, anagramsObject) ? 
      anagramsObject[key].push(count++) : 
      anagramsObject[key] = [count++]

  for(let a of anagramList ) {
    const key = sortAnagram(a)
    updateObj(key)
  }


  return anagramsObject
}

function isValidAnagramKey(key, anagramsObject) {
 return anagramsObject[key] && anagramsObject[key] !== null
}

function sortAnagram(a) {
 return a.split('').sort().join('')
}



console.log(getAnagramIndexes(['cat', 'tca', 'act', 'dog', 'god', 'rat'])) 
// [ [ 1, 2, 3 ], [ 4, 5 ], [ 6 ] ]
