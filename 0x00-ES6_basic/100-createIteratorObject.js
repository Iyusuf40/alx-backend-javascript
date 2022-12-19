export default function createIteratorObject(report) {
  let list = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees[department]) {
      list = [...list, ...report.allEmployees[department]];
    }
  }
  return list;
}
