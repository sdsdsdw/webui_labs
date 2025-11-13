import FavoriteMovies from "./components/FavoriteMovies";
import PersonalPage from "./components/PersonalPage";
import NameDisplay from "./components/NameDisplay";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial", backgroundColor: "#f4f7fa" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Завдання</h1>

      <div style={{ marginBottom: "40px" }}>
        <NameDisplay name="asdasdd" />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <FavoriteMovies />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <PersonalPage
          name="asdasd qweqwewq"
          phone="+380971234567"
          email="asdasd@asdasd.com"
          city="Харькiв"
          experience="99 роки у веб-розробці"
          skills={["HTML", "CSS", "JavaScript", "React"]}
          photo="https://i.pravatar.cc/150?img=12"
        />
      </div>

      <div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
