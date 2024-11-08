const countWordOccurrences = (text: string, word: string): number => {
  return text.split(" ").filter((w) => w === word).length;
};
