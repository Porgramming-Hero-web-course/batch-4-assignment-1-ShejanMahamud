const removeDuplicates = (arr: number[]): number[] => {
  const removeDup = arr.filter((item, index) => arr.indexOf(item) === index);
  const sorted = removeDup.sort((a, b) => a - b);
  return sorted;
};
// console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10]));
