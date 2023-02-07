const chunk = require('../../src/arrays/chunck');

test('array ["a", "b", "c", "d"] split into groups the length of 2.', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
});

test('test empty array', () => {
    expect(chunk([], 5)).toStrictEqual([]);
});

test('test with size=0', () => {
    expect(chunk([1, 2, 3, 4, 5], 0)).toStrictEqual([]);
});

test('test with default value', () => {
    expect(chunk([1, 2, 3, 4, 5])).toStrictEqual([[1], [2], [3], [4], [5]]);
});