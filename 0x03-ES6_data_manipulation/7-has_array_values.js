export default function hasValuesFromArray(set, arr) {
  if (arr.find((itm) => !(set.has(itm)))) {
    return false;
  }
  return true;
}
