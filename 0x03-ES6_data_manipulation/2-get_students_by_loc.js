export default function getStudentsByLocation(students_id, city){
    return students_id.filter((item) => item.location == city);
}
