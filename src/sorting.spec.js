const sorting = require('./sorting');

test('quicksort', () => {
  expect(sorting.quicksort([6, 5, 3, 1, 8, 7, 2, 22, 4]))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 22]);
});

test('mergesort', () => {
  expect(sorting.mergesort([6, 5, 3, 1, 8, 7, 2, 22, 4]))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 22]);
});

test('bubblesort', () => {
  expect(sorting.bubblesort([6, 5, 3, 1, 8, 7, 2, 22, 4]))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 22]);
});