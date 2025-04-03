import React from 'react';
import Slider from 'react-slick';
import '../App.css';

const Categories = () => {
  const categoriesData = [
    { title: 'Fresh Fruit', img: '/images/fresh fruit.jpg' },
    { title: 'Dried Fruit', img: '/images/dried fruit.jpg' },
    { title: 'Vegetables', img: '/images/vegetables.jpg' },
    { title: 'Drink Fruits', img: '/images/drink fruits.jpg' },
    { title: 'Frozen', img: '/images/Frozen.jpg' },
    { title: 'Bakery', img: '/images/bakery.avif' },
    { title: 'Snacks', img: '/images/snacks.jpg' },
    { title: 'Dairy Products', img: '/images/Dairy Products.jpg' },
    { title: 'Seafood', img: '/images/seafood.avif' },
    { title: 'Fresh Meat', img: '/images/fresh meat.jpg' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,           
    autoplaySpeed: 2500,      
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="mt-4">
      <Slider {...settings}>
        {categoriesData.map((cat, idx) => (
          <div key={idx} className="p-2">
            <div
              className="category-card card-hover text-center shadow-sm"
              style={{
                background: '#fff',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px'
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + cat.img}
                  alt={cat.title}
                  style={{
                    height: '160px',
                    width: '160px',
                    objectFit: 'contain'
                  }}
                  className="img-fluid"
                />
              </div>
              <div
                style={{
                  padding: '12px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  borderTop: '1px solid #eee',
                  letterSpacing: '1px'
                }}
              >
                {cat.title.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
