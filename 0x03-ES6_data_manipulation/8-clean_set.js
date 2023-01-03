export default function cleanSet(set, subStr) {
  const strList = [];

  if (!(set instanceof Set) || !subStr || typeof subStr !== 'string') {
    return '';
  }

  set.forEach((val) => {
    if (val && val.startsWith(subStr)) {
      strList.push(val.slice(subStr.length));
    }
  });
  return strList.join('-');
}
