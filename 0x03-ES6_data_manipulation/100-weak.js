const weakMap = new WeakMap();
function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  } else {
    weakMap.set(endPoint, 1);
  }

  if (weakMap.get(endPoint) >= 5) {
    throw Error('Endpoint load is high');
  }
}

export { weakMap };
export { queryAPI };
