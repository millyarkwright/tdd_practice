import { expect } from 'chai'
import { isAnagram } from './anagrams'

describe('isAnagram - basic functionality', () => {
  it('returns true when two known anagrams are passing in', () => {
    const expected = true
    const actual = isAnagram('listen', 'silent')
    expect(actual).to.deep.equal(expected)
  })

  // 'elbows' 'below' NOT anagrams
  it('return false when either of the strings has extra letters', () => {
    const expected = false
    const actual = isAnagram('elbows', 'below')
    expect(actual).to.deep.equal(expected)

    const actual2 = isAnagram('below', 'elbows')
    expect(actual2).to.deep.equal(expected)

  })

  // 'listens' 'silent' NOT anagrams
  it('return false when the string have the same letters in different quantites', () => {
    const expected = false
    const actual = isAnagram('listens', 'silent')
    expect(actual).to.deep.equal(expected)
  })

  // 'conversation' 'voices rant on' ARE anagrams
  it('ignores spaces in the input strings', () => {
    const expected = true
    const actual = isAnagram('conversation', 'voices rant on')
    expect(actual).to.equal(expected)
  })

  // 'STATE' 'taste' ARE anagrams
  it('ignores case in the input strings', () => {
    const expected = true
    const actual = isAnagram('STATE', 'taste')
    expect(actual).to.equal(expected)
  })
} )