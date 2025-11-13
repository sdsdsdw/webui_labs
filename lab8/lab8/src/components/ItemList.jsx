function ItemList() {
  const items = ["React", "JavaScript", "HTML", "CSS"];

  function handleChange(event) {
    const index = event.target.value;
    const output = document.getElementById("result");
    if (index === "") {
      output.innerHTML = "";
    } else {
      output.innerHTML = `Вибрано: <strong>${items[index]}</strong> (індекс: ${index})`;
    }
  }

  return (
    <div
      style={{
        border: "2px solid #ff9800",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#fff6e5",
      }}
    >
      <h2 style={{ color: "#e68900" }}>Список технологій</h2>

      <select
        defaultValue=""
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ffb84d",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {items.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>

      <p
        id="result"
        style={{
          marginTop: "15px",
          color: "#e68900",
          fontSize: "16px",
        }}
      ></p>
    </div>
  );
}

export default ItemList;
