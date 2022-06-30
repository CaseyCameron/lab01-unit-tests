import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    // need deep equal to test an object
    expect(actual).to.deep.equal(expected);
  });

  it('return the correct letter count for a word with only one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });

  it('should return the correct letter count for words with more than 1 of certain letters', () => {
    const expected = { m:1, i:4, s:4, p:2 };
    const actual = getLetterCount('mississippi');
    expect(actual).to.deep.equal(expected);
  });
});