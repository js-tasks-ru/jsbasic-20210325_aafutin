function ucFirst(str) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }
  str = str.trim();
  const firstLetter = str[0] && str[0].toUpperCase() || '';
  const remainingLetters = str.slice(1);
  return firstLetter.toUpperCase() + remainingLetters;
}
