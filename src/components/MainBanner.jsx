import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MainBanner = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <div style={{
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '40px 30px',
        minHeight: '430px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Card className="border-0 w-100 rounded-0" style={{ backgroundColor: 'transparent' }}>
          <div className="d-flex align-items-center justify-content-between" style={{ flexWrap: 'nowrap' }}>

            <div style={{ maxWidth: '50%' }}>
              <small
                style={{ color: "#7fad39", fontWeight: "600", letterSpacing: "1px" }}
              >
                FRUIT FRESH
              </small>
              <h1 className="fw-bold display-5 mt-2" style={{ color: "#252525" }}>
                Vegetable 100% Organic
              </h1>
              <p className="text-muted fs-5">
                Free Pickup and Delivery Available
              </p>
              <Button
                style={{
                  backgroundColor: "#7fad39",
                  border: "none",
                  padding: "10px 24px",
                  fontWeight: "bold",
                  borderRadius: "3px",
                }}
              >
                SHOP NOW
              </Button>
            </div>

            <img
              src="/images/banner.png"
              alt="Organic Vegetables"
              className="img-fluid"
              style={{ maxWidth: "320px", height: 'auto', marginLeft: "30px" }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MainBanner;
