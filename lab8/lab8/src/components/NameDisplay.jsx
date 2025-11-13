function NameDisplay(props) {
  return (
    <div
      style={{
        border: "2px solid #4a90e2",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#e8f1fc",
        textAlign: "center",
      }}
    >
      <h2>Моє ім’я</h2>
      <p style={{ fontSize: "22px", fontWeight: "bold", color: "#2a5dad" }}>{props.name}</p>
    </div>
  );
}

export default NameDisplay;
