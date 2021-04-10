function camelize(str) {
  const words = str.split('-');
  const firstWord = words[0];
  const remainingWords = words.slice(1);
  const remainingWordsInUpperCase = remainingWords.map(word => word[0].toUpperCase() + word.slice(1));
  return firstWord + remainingWordsInUpperCase.join('');
}
