function ucFirst(str) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }
  str = str.trim();
  const firstLetter = str[0];
  const remainingPart = str.slice(1);
  return firstLetter.toUpperCase() + remainingPart;
}
