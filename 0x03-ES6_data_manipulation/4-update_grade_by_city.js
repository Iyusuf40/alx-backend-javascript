export default function updateStudentGradeByCity(studentList, city, gradesList) {
  const studentsOfCity = studentList.filter((itm) => itm.location === city);
  const studentsWithGrades = studentsOfCity.map((student) => {
    const gradeObj = gradesList.find((gradesObj) => gradesObj.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });
  return studentsWithGrades;
}
