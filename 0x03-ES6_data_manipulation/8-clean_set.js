export default function cleanSet(set, subStr) {
  const strList = [];
  set.forEach((val) => {
    if (subStr && typeof val === 'string' && val.startsWith(subStr)) {
      strList.push(val.slice(subStr.length));
    }
  });
  return strList.join('-');
}
