function PersonalPage(props) {
  return (
    <div
      style={{
        border: "2px solid #2ecc71",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#eafff1",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#208c4b" }}>Персональна сторінка</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img
          src={props.photo}
          alt="avatar"
          width="150"
          style={{ borderRadius: "50%", border: "2px solid #2ecc71" }}
        />
        <div>
          <p><strong>ПІБ:</strong> {props.name}</p>
          <p><strong>Телефон:</strong> {props.phone}</p>
          <p><strong>Email:</strong> {props.email}</p>
          <p><strong>Місто:</strong> {props.city}</p>
          <p><strong>Досвід роботи:</strong> {props.experience}</p>
          <p><strong>Навички:</strong> {props.skills.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalPage;
