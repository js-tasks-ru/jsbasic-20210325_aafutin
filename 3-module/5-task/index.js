function getMinMax(str) {
  const minMax = {};
  str.split(' ').forEach(elem1 => {
    elem1.split(',').forEach(elem2 => {
      const number = parseFloat(elem2);
      if (!number) {
        return;
      }
      if (!minMax.min || minMax.min > number) {
        minMax.min = number;
      }
      if (!minMax.max || minMax.max < number) {
        minMax.max = number;
      }
    });
  });
  return minMax;
}
