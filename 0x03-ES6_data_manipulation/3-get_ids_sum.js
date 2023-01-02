export default function getStudentIdsSum(list) {
  return list.reduce((sum, itm) => sum + itm.id, 0);
}
