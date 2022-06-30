import { expect } from "chai";
import { isAnagram } from './anagrams';

describe('anagrams - basic functionality', () => {
  it('returns true with anagram inputs', () => {
    const expected = true;
    const actual = isAnagram('anagram', 'anagram');
    expect(actual).to.equal(expected);
  });

  it('returns false when anagrams are not passed', () => {
    const expected = false;
    const actual = isAnagram('lemon', 'tiger');
    expect(actual).to.equal(expected);
  });

  it('returns true when anagrams with different casing are passed', () => {
    const expected = true;
    const actual = isAnagram('Iron', 'iron');
    expect(actual).to.equal(expected);
  });

  it('returns false when strings have same letters but different qty', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns true when words are anagrams but with extra spacing', () => {
    const expected = true;
    const actual = isAnagram('tiger s', 'tigers');
    expect(actual).to.equal(expected);
  })
});

