import { getLetterCount } from './letter-count'
import { isEqual } from 'lodash'
// * Check for Test 1
// export const isAnagram = (string1, string2) => {
//   const string1Letters = string1.split('')
//   const string2Letters = string2.split('')
//   // check if for each letter in string1, string2 also has that letter.
//   return string1Letters.every(letter => 
//     string2Letters.includes(letter))
// }

// * Check for Test 1 & 2
// export const isAnagram = (string1, string2) => {
//   const string1Letters = string1.split('')
//   const string2Letters = string2.split('')
//   // check if for each letter in string1, string2 also has that letter.
//   return string1Letters.every(letter => 
//     string2Letters.includes(letter))
//     && string2Letters.every(letter => 
//       string1Letters.includes(letter))
// }

// * Adding in Format function for Tests 3 & 4 (case agnostic and no spaces)
export const formatString = string =>
  string.toLowerCase().replace(/\s+/g, '')

// * Check for Test 1 & 2 & 3
export const isAnagram = (string1, string2) => {
  const string1LetterCount = getLetterCount(formatString(string1))
  const string2LetterCount = getLetterCount(formatString(string2))

  return isEqual(string1LetterCount, string2LetterCount)

}


