import { useState } from "react";
import StudentsTable from "./components/StudentsTable";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const [students, setStudents] = useState([]);

  const subjects = ["math", "physics", "history"];

  const [edit, setEdit] = useState({ id: null, field: null });

  function startEdit(id, field) {
    if (edit.id === id && edit.field === field) {
      setEdit({ id: null, field: null });
    } else {
      setEdit({ id, field });
    }
  }

  function stopEdit() {
    setEdit({ id: null, field: null });
  }

  function updateName(id, value) {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, name: value } : s
      )
    );
  }

  function updateGrade(id, gradeKey, value) {
    setStudents(
      students.map((s) =>
        s.id === id
          ? { ...s, grades: { ...s.grades, [gradeKey]: Number(value) } }
          : s
      )
    );
  }

  function deleteStudent(id) {
    setStudents(students.filter((s) => s.id !== id));
  }
 
  const [newStudent, setNewStudent] = useState({
    name: "",
    math: "",
    physics: "",
    history: "",
    photo: null,
  });

  function addStudent(e) {
    e.preventDefault();
    if (!newStudent.name.trim()) return alert("Введіть імʼя!");

    const newItem = {
      id: Date.now(),
      name: newStudent.name,
      photo: newStudent.photo ? URL.createObjectURL(newStudent.photo) : "",
      grades: {
        math: Number(newStudent.math),
        physics: Number(newStudent.physics),
        history: Number(newStudent.history),
      },
    };

    setStudents([...students, newItem]);

    setNewStudent({
      name: "",
      math: "",
      physics: "",
      history: "",
      photo: null,
    });
  }

  return (
    <div className="container py-4">
      <StudentForm
        subjects={subjects}
        newStudent={newStudent}
        setNewStudent={setNewStudent}
        addStudent={addStudent}
      />

      <StudentsTable
        students={students}
        subjects={subjects}
        edit={edit}
        startEdit={startEdit}
        stopEdit={stopEdit}
        updateName={updateName}
        updateGrade={updateGrade}
      />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}
