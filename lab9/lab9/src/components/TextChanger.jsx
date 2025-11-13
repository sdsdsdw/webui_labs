import { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TextChanger() {
  const [color, setColor] = useState("red");

  return (
    <div className="container mt-4 text-center">

      <h5 style={{ color }}>I am a {color} Product!</h5>

      <Form.Select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-auto mx-auto mt-3"
      >
        <option value="black">Чорний</option>
        <option value="red">Червоний</option>
        <option value="blue">Синій</option>
        <option value="green">Зелений</option>
        <option value="purple">Фіолетовий</option>
        <option value="orange">Помаранчевий</option>
      </Form.Select>
    </div>
  );
}
