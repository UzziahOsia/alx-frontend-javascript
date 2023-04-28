export default function getStudentsByLocation(studentsid, city){
    return studentsid.filter((item) => item.location == city);
}
