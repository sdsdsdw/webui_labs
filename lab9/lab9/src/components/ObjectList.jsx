import { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductList() {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (inputValue.trim() === "") return;
    setProducts([...products, inputValue]);
    setInputValue("");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>

      <div className="d-flex gap-2 mb-3">
        <Form.Control
          type="text"
          placeholder="Product Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="primary" onClick={addProduct}>
          Додати
        </Button>
      </div>

      <ListGroup>
        {products.length === 0 ? (
          <ListGroup.Item className="text-center text-muted">
            Список порожній
          </ListGroup.Item>
        ) : (
          products.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))
        )}
      </ListGroup>
    </div>
  );
}
