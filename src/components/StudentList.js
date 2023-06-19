import { useSelector } from "react-redux";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const studentData = useSelector((state) => state.student.students);
  return (
    <div>
      <h1>List Siswa</h1>
      <h2>Total siswa adalah {studentData.length}</h2>
      {studentData.map((item) => {
        return <StudentItem nama={item.nama} jurusan={item.jurusan} />;
      })}
    </div>
  );
};

export default StudentList;
