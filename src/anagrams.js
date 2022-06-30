// accept two strings and tell whether they are anagrams of each other
// ignore spaces & casing
export const isAnagram = (word1, word2) => {
  let results = [];
  [word1, word2].forEach((word, i) => {
    results[i] = word.split('').sort().join(' ').toLowerCase().trim();
  });
  return results[0] === results[1] ? true : false;
}
