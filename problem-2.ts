const removeDuplicates = (arr: number[]): number[] => {
  return arr
    .filter((item, index) => arr.indexOf(item) === index)
    .sort((a, b) => a - b);
};
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10]));
