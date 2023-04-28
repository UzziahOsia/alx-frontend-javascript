export default function getListStudentIds(studentsID) {
  if (Array.isArray(studentsID)) {
    return studentsID.map((item) => item.id);
  }
  return [];
}
