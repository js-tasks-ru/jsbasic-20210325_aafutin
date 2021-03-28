function checkSpam(str) {
  return !!str && typeof str === 'string' && /(1xbet|xxx)/i.test(str);
}
