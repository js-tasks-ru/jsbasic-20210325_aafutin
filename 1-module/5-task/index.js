function truncate(str, maxlength) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }
  else if (typeof maxlength !== 'number') {
    throw new Error('maxlength must be a number');
  }
  else if (str.length <= maxlength) {
    return str;
  }
  else {
    return str.slice(0, --maxlength) + '…';
  }
}
