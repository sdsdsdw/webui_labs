import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyCounter() {
  const [count, setCount] = useState(10);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="d-flex align-items-center gap-3 p-3">
      <h5 className="mb-0">Поточний рахунок: {count}</h5>
      <ButtonGroup>
        <Button variant="outline-primary" onClick={increment}>
          +
        </Button>
        <Button variant="outline-primary" onClick={decrement}>
          –
        </Button>
        <Button variant="outline-primary" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
}
