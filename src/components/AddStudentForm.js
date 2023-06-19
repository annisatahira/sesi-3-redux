import { useDispatch } from "react-redux";
import { addStudent } from "../redux/slices/StudentSlice";
import { useState } from "react";

const AddStudentForm = () => {
  const dispatch = useDispatch();

  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSiswa = {
      namalengkap: nama,
      jurusan: jurusan,
    };
    dispatch(addStudent(newSiswa));

    setNama("");
    setJurusan("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <label htmlFor="nama">Nama:</label>
        <input
          type="text"
          value={nama}
          placeholder="Nama"
          name="nama"
          onChange={(event) => setNama(event.target.value)}
          required
        />
        <label htmlFor="jurusan">Jurusan:</label>
        <input
          type="text"
          value={jurusan}
          placeholder="Jurusan"
          name="jurusan"
          onChange={(event) => setJurusan(event.target.value)}
          required
        />
        <input type="submit" value="Tambah Siswa" />
      </form>
    </div>
  );
};

export default AddStudentForm;
