import { useEffect, useRef } from "react";

export default function StudentsTable({
  students,
  subjects,
  edit,
  startEdit,
  stopEdit,
  updateName,
  updateGrade
}) {
  const tableRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (tableRef.current && !tableRef.current.contains(e.target)) {
        stopEdit();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [stopEdit]);

  function avgStudent(grades) {
    const values = Object.values(grades);
    return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
  }

  function avgGroup() {
    const all = students.flatMap(s => Object.values(s.grades));
    return (all.reduce((a, b) => a + b, 0) / all.length).toFixed(2);
  }

  return (
    <>
      <h2>Таблиця студентів</h2>

      <table ref={tableRef} className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Фото</th>
            <th>Імʼя</th>
            {subjects.map(s => (
              <th key={s}>{s}</th>
            ))}
            <th>Середнє</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>
                {s.photo && (
                  <img
                    src={s.photo}
                    width="200px"
                    height="200px"
                    className="rounded"
                    alt=""
                  />
                )}
              </td>

              <td
                onClick={() => startEdit(s.id, "name")}
                style={{ cursor: "pointer", whiteSpace: "nowrap"}}
              >
                {edit.id === s.id && edit.field === "name" ? (
                  <input
                    autoFocus
                    className="form-control"
                    value={s.name}
                    onChange={e => updateName(s.id, e.target.value)}
                    onBlur={stopEdit}
                  />
                ) : (
                  s.name
                )}
              </td>

              {subjects.map(subj => (
                <td
                  key={subj}
                  onClick={() => startEdit(s.id, subj)}
                  style={{ cursor: "pointer" }}
                >
                  {edit.id === s.id && edit.field === subj ? (
                    <input
                      type="number"
                      autoFocus
                      className="form-control"
                      value={s.grades[subj]}
                      onChange={e =>
                        updateGrade(s.id, subj, e.target.value)
                      }
                      onBlur={stopEdit}
                    />
                  ) : (
                    s.grades[subj]
                  )}
                </td>
              ))}

              <td>{avgStudent(s.grades)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <b>Середній бал групи:</b> {avgGroup()}
      </p>
    </>
  );
}
