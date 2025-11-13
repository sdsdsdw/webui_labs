import { useState } from "react";
import { Carousel, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DynamicCarousel() {
  const images = [
    { src: "https://picsum.photos/id/1018/800/400", alt: "Image 1" },
    { src: "https://picsum.photos/id/1015/800/400", alt: "Image 2" },
    { src: "https://picsum.photos/id/1019/800/400", alt: "Image 3" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="container mt-4 text-center">
      <Carousel
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
        controls={false}
        indicators={false}
        interval={2000}
        wrap
      >
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              src={img.src}
              alt={img.alt}
              className="d-block w-100 rounded shadow"
              style={{ transition: "opacity 1s ease-in-out" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <ButtonGroup className="mt-3">
        {images.map((_, i) => (
          <Button
            key={i}
            variant={i === index ? "primary" : "outline-primary"}
            onClick={() => setIndex(i)}
            className="mx-1"
          >
            {i + 1}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
