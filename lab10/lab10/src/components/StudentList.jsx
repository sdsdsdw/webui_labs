export default function StudentList({ students = [], deleteStudent }) {
  return (
    <div className="container py-4">

      <ul
        className="list-group mb-4"
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: students.length === 0 ? "center" : "flex-start",
        }}
      >
        {students.length === 0 ? (
          <li
            className="list-group-item text-center text-muted"
            style={{
              border: "1px dashed #ccc",
              fontStyle: "italic",
              background: "#fafafa",
            }}
          >
            Немає студентів
          </li>
        ) : (
          students.map((s) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={s.id}
            >
              <span>{s.name}</span>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteStudent(s.id)}
              >
                Видалити
              </button>
            </li>
          ))
        )}
      </ul>

    </div>
  );
}
