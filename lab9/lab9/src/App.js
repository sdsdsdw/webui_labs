import TextChanger from "./components/TextChanger";
import MyCounter from "./components/MyCounter";
import MyCounterList from "./components/MyCounterList";
import ObjectList from "./components/ObjectList";
import DynamicCarousel from "./components/DynamicCarousel";


export default function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Завдання</h2>
      <TextChanger />
      <MyCounter />
      <MyCounterList />
      <ObjectList />
      <DynamicCarousel />
    </div>
  );
}
