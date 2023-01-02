/**
 * function updateUniqueItems symultaneously updates the map object passed
 * to it as well a creates a new 1
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }

  const arrRep = Array.from(map.entries());
  const updated = arrRep.map((itm) => {
    if (itm[1] === 1) {
      map.set(itm[0], 100); // updating occurs here
      return [itm[0], 100];
    }
    return itm;
  });
  return new Map(updated);
}
