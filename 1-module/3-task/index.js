function ucFirst(str) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }
  const firstLetter = str[0] && str[0].trim() || '';
  const remainingPart = str.slice(1);
  return firstLetter.toUpperCase() + remainingPart;
}
