export default function getStudentsByLocation(list, city) {
  return list.filter((itm) => itm.location === city);
}
