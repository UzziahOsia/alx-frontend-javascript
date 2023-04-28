export default function getStudentsIdsSum(studentsID){
    return studentsID.reduce((sum, { id }) => sum + id, 0);
}
