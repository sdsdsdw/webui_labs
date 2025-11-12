

function App() {
  return (
    <div style={{ padding: "60px"}}>
      <h1>Улюблені фільми</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>№</th>
            <th>Назва фільму</th>
            <th>Режисер</th>
            <th>Рік випуску</th>
            <th>Кіностудія</th>
            <th>Постер</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Інтерстеллар</td>
            <td>Крістофер Нолан</td>
            <td>2014</td>
            <td>Syncopy / Warner Bros.</td>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
                alt="Інтерстеллар"
                width="100"
              />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Матриця</td>
            <td>Лана та Ліллі Вачовські</td>
            <td>1999</td>
            <td>Warner Bros.</td>
            <td>
              <img
                src="https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
                alt="Матриця"
                width="100"
              />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Володар перснів: Братство персня</td>
            <td>Пітер Джексон</td>
            <td>2001</td>
            <td>New Line Cinema</td>
            <td>
              <img
                src="https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg"
                alt="Володар перснів"
                width="100"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
