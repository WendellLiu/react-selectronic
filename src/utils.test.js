import {
  listCompare,
} from './utils';

test('correct range selection in regular scenario', () => {
  const parent = [1, 2, 3, 4, 5, 6, 7];
  const selectedList = [3, 4];
  const selectingTarget = 6;

  const compareFunc = listCompare(parent);
  expect(
    compareFunc(selectedList, selectingTarget).sort(),
  ).toEqual([3, 4, 5, 6].sort());
});
