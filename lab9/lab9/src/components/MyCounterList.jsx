import MyCounter from "./MyCounter";

export default function MyCounterList() {
  const countersData = [
    { id: 1, initial: 2, min: 0, max: 5 },
    { id: 2, initial: 5, min: 0, max: 10 },
    { id: 3, initial: 1, min: -2, max: 2 },
  ];

  return (
    <div style={{ display: "flex" }}>
      {countersData.map((item) => (
        <MyCounter key={item.id} {...item} />
      ))}
    </div>
  );
}
