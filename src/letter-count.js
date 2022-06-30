export const getLetterCount = string => {
  return string.split('').reduce((count, letter) => {
    count[letter] = count.hasOwnProperty(letter) ? count[letter] + 1 : 1;
    return count;
  }, {});
};
