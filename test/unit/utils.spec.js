import {
  listCompare
} from '../../src/utils';

describe('listCompare test', () => {
  it('throw error when parentList is empty', () => {
    expect(() => {
      listCompare([]);
    }).toThrow();;
  });

  it('throw error when childList is empty', () => {
    expect(() => {
      listCompare([1,2,3])([], 2);
    }).toThrow();
  });

  it('throw error when target is not in parentList', () => {
    expect(() => {
      listCompare([1,2,3])([1,2], 4);
    }).toThrow();
  });

  it('return right result in childList length is 1', () => {
    const expected = listCompare([2,3,4,5,6])([3], 6);
    expect(expected).toEqual([3,4,5,6]);
  })

  it('return right result in childList length is more than 1', () => {
    const expected = listCompare([2,3,4,5,6])([2,3], 6);
    expect(expected).toEqual([2,3,4,5,6]);
  })
})
