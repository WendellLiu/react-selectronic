import {
  listCompare,
} from './utils';

describe('listCompare functional testing', () => {
  test('correct range selection in regular scenario', () => {
    const parent = [1, 2, 3, 4, 5, 6, 7];
    const selectedList = [3, 4];
    const selectingTarget = 6;

    const compareFunc = listCompare(parent);
    expect(
      compareFunc(selectedList, selectingTarget).sort(),
    ).toEqual([3, 4, 5, 6].sort());
  });

  test('return right result in childList length is 1 (forward)', () => {
    const expected = listCompare([2, 3, 4, 5, 6])([3], 6);
    expect(expected).toEqual([3, 4, 5, 6]);
  });

  test('return right result in childList length is more than 1 (forward)', () => {
    const expected = listCompare([2, 3, 4, 5, 6])([2, 3], 6);
    expect(expected).toEqual([2, 3, 4, 5, 6]);
  });

  test('return right result in childList length is 1 (reverse)', () => {
    const expected = listCompare([2, 3, 4, 5, 6])([5], 2);
    expect(expected).toEqual([2, 3, 4, 5]);
  });

  test('return right result in childList length is more than 1 (reverse)', () => {
    const expected = listCompare([2, 3, 4, 5, 6])([5, 6], 3);
    expect(expected).toEqual([3, 4, 5, 6]);
  });
});

describe('listCompare error handling', () => {
  test('throw error when parentList is empty', () => {
    expect(() => {
      listCompare([]);
    }).toThrow();
  });

  test('throw error when childList is empty', () => {
    expect(() => {
      listCompare([1, 2, 3])([], 2);
    }).toThrow();
  });

  test('throw error when target is not in parentList', () => {
    expect(() => {
      listCompare([1, 2, 3])([1, 2], 4);
    }).toThrow();
  });
});
