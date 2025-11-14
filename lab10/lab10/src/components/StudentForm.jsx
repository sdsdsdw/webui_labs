import { useRef } from "react";

export default function StudentForm({
  subjects,
  newStudent,
  setNewStudent,
  addStudent,
}) {
  const fileRef = useRef(null);

  const handleAdd = (e) => {
    addStudent(e);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="mb-5 pt-3">
      <h2 className="mb-3">Додати студента</h2>

      <form onSubmit={handleAdd} className="mb-4 p-3 border rounded bg-light">

        <input
          className="form-control mb-3"
          placeholder="Імʼя"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
        />

        {subjects.map((s) => (
          <input
            key={s}
            type="text"
            className="form-control mb-3"
            placeholder={s}
            value={newStudent[s] || ""}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D+/g, "");
            }}
            onChange={(e) =>
              setNewStudent({ ...newStudent, [s]: Number(e.target.value) })
            }
          />
        ))}

        <input
          type="file"
          accept="image/*"
          className="form-control mb-3"
          ref={fileRef}
          onChange={(e) =>
            setNewStudent({ ...newStudent, photo: e.target.files[0] })
          }
        />

        <button className="btn btn-success w-100">
          Додати
        </button>
      </form>
    </div>
  );
}
