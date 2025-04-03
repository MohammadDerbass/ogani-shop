import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const featuredProducts = [
  {
    src: "/images/meat.png",
    title: "Meat",
    category: "Fresh Meat",
    price: "$18.00",
  },
  {
    src: "/images/banana.png",
    title: "Banana",
    category: "Fruits",
    price: "$4.00",
  },
  {
    src: "/images/shawarma.png",
    title: "Shawarma",
    category: "Fastfood",
    price: "$2.00",
  },
  {
    src: "/images/eggplant.png",
    title: "Eggplant",
    category: "Vegetables",
    price: "$2.00",
  },
  {
    src: "/images/chicken.png",
    title: "Chicken",
    category: "Fresh Meat",
    price: "$9.00",
  },
  {
    src: "/images/kiwi.png",
    title: "Kiwi",
    category: "Fruits",
    price: "$5.00",
  },
  {
    src: "/images/burger.png",
    title: "Burger",
    category: "Fastfood",
    price: "$10.00",
  },
  {
    src: "/images/tomato.png",
    title: "Tomato",
    category: "Vegetables",
    price: "$3.00",
  },
];

const filters = ["All", "Fruits", "Fresh Meat", "Vegetables", "Fastfood"];

const HomePageFeatured = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeFilter);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Featured Product</h2>

        <div className="d-flex justify-content-center gap-4 mb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`border-0 bg-transparent fw-semibold position-relative ${
                activeFilter === filter ? "text-success" : "text-dark"
              }`}
              onClick={() => setActiveFilter(filter)}
              style={{ fontSize: "16px" }}
            >
              {filter}
              {activeFilter === filter && (
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "#7fad39",
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    right: 0,
                  }}
                ></div>
              )}
            </button>
          ))}
        </div>

        <Row className="justify-content-center">
          {filteredProducts.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="text-center mb-4">
              <div
                className="p-3"
                style={{ backgroundColor: "#f5f5f5", borderRadius: "6px" }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="img-fluid mb-3"
                  style={{ height: "160px", objectFit: "contain" }}
                />
              </div>
              <p className="mb-1 mt-2 text-dark fw-medium" style={{ fontSize: "15px" }}>
                {item.title}
              </p>
              <p className="fw-bold text-dark" style={{ fontSize: "16px" }}>
                {item.price}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomePageFeatured;
