import React from 'react';
import { ListGroup } from 'react-bootstrap';


const Sidebar = () => {
  const categories = [
    'Fresh Meat',
    'Vegetables',
    'Fruit & Nut Gifts',
    'Fresh Berries',
    'Ocean Foods',
    'Butter & Eggs',
    'Fastfood',
    'Fresh Onion',
    'Papayaya & Crisps',
    'Oatmeal',
    'Fresh Bananas'
  ];

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ebebeb",
        borderTop: "none"
      }}
    >
      <ListGroup variant="flush">
        {categories.map((category, idx) => (
          <ListGroup.Item
            key={idx}
            className="px-3 py-2 category-item"
            style={{
              fontSize: "15px",
              cursor: "pointer",
              color: "#1c1c1c",
              transition: "all 0.2s ease-in-out",
              backgroundColor: "transparent"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f5f5f5")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {category}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
