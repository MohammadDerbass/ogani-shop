import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import {
  FaHeart,
  FaShoppingCart,
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaFlagUsa,
  FaBars,
  FaCaretDown,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP
} from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', fontSize: '13px', padding: '6px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="d-flex align-items-center justify-content-start ps-0">
              <FaEnvelope className="me-2" />
              hello@colorlib.com
              <span className="ms-3">Free Shipping for all Order of $99</span>
            </Col>
            <Col md={4}></Col>
            <Col md={4} className="d-flex justify-content-end align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaPinterestP />
              </div>
              <div className="d-flex align-items-center border-start ps-3">
                <img src="/images/flag.png" alt="Flag" style={{ width: '20px', height: '14px', marginRight: '6px' }} />
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="p-0 text-dark d-flex align-items-center" style={{ fontSize: '14px', textDecoration: 'none', boxShadow: 'none' }}>
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Arabic</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center border-start ps-3">
                <FaUser className="me-1" />
                <NavLink to="/login" className="text-dark text-decoration-none">
                  Login
                </NavLink>
                <span className="mx-2">|</span>
                <NavLink to="/register" className="text-dark text-decoration-none">
                  Register
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="bg-white border-bottom shadow-sm">
        <Container>
          <Row className="align-items-center py-3">
            <Col md={3} className="d-flex align-items-center justify-content-start" style={{ paddingLeft: '20px', height: '80px', overflow: 'hidden' }}>
              <img src="/images/logo.png" alt="OGANI Logo" style={{ maxHeight: '150px', height: 'auto', objectFit: 'contain' }} />
            </Col>
            <Col md={6}>
              <Nav className="justify-content-center gap-4">
                <a href="https://preview.colorlib.com/theme/ogani/index.html" target="_blank" rel="noopener noreferrer" className="fw-bold text-uppercase nav-link-custom text-success border-bottom border-success pb-1">
                  HOME
                </a>
                <a href="https://preview.colorlib.com/theme/ogani/shop-grid.html" target="_blank" rel="noopener noreferrer" className="fw-bold text-uppercase nav-link-custom">SHOP</a>
                <div
                  className="position-relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span className="fw-bold text-uppercase nav-link-custom" style={{ cursor: 'pointer' }}>
                    PAGES
                  </span>
                  {showDropdown && (
                    <div
                      className="position-absolute"
                      style={{ top: '100%', left: 0, backgroundColor: '#000', color: '#fff', padding: '10px', borderRadius: '8px', zIndex: 1000 }}
                    >
<a
  href="https://preview.colorlib.com/theme/ogani/shop-details.html"
  target="_blank"
  rel="noopener noreferrer"
  className="d-block text-white mb-2 text-decoration-none"
  style={{ fontSize: '13px' }}
>
  Shop Details
</a>
<a
  href="https://preview.colorlib.com/theme/ogani/shopping-cart.html"
  target="_blank"
  rel="noopener noreferrer"
  className="d-block text-white mb-2 text-decoration-none"
  style={{ fontSize: '13px' }}
>
  Shopping Cart
</a>
<a
  href="https://preview.colorlib.com/theme/ogani/checkout.html"
  target="_blank"
  rel="noopener noreferrer"
  className="d-block text-white mb-2 text-decoration-none"
  style={{ fontSize: '13px' }}
>
  Check Out
</a>
<a
  href="https://preview.colorlib.com/theme/ogani/blog-details.html"
  target="_blank"
  rel="noopener noreferrer"
  className="d-block text-white text-decoration-none"
  style={{ fontSize: '13px' }}
>
  Blog Details
</a>
                    </div>
                  )}
                </div>
                <a href="https://preview.colorlib.com/theme/ogani/blog.html" target="_blank" rel="noopener noreferrer" className="fw-bold text-uppercase nav-link-custom">BLOG</a>
                <a href="https://preview.colorlib.com/theme/ogani/contact.html" target="_blank" rel="noopener noreferrer" className="fw-bold text-uppercase nav-link-custom">CONTACT</a>
              </Nav>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-end">
              <div className="d-flex align-items-center mb-3 gap-3">
                <FaHeart style={{ fontSize: '20px', color: '#000' }} />
                <FaShoppingCart style={{ fontSize: '20px', color: '#000' }} />
                <span className="small" style={{ fontSize: '15px', color: '#555' }}>
                  item: <strong style={{ color: '#000' }}>$150.00</strong>
                </span>
              </div>
            </Col>
          </Row>

          <Row className="pb-3">
            <Col md={8} className="d-flex">
              <Button onClick={toggleSidebar} style={{ backgroundColor: '#7fad39', color: '#fff', fontWeight: '700', fontSize: '16px', padding: '0 30px', height: '50px', borderRadius: '0', border: 'none', display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}>
                <FaBars />
                All departments
                <FaCaretDown style={{ fontSize: '12px' }} />
              </Button>
              <Dropdown style={{ border: '1px solid #ebebeb', borderLeft: 'none' }}>
                <Dropdown.Toggle variant="light" className="text-start d-flex align-items-center justify-content-between" style={{ backgroundColor: '#fff', color: '#000', fontWeight: '900', fontSize: '14px', padding: '0 20px', height: '50px', border: 'none', borderRadius: '0', whiteSpace: 'nowrap', minWidth: '180px' }}>
                  All Categories
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ borderRadius: '0', boxShadow: 'none', width: '100%' }}>
                  <Dropdown.Item className="py-2 px-3">Fresh Meat</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control placeholder="What do you need?" style={{ height: '50px', width: '100%', maxWidth: '600px', borderRadius: '0', fontSize: '14px', border: '1px solid #ebebeb' }} />
            </Col>
            <Col md={4} className="d-flex justify-content-between align-items-center">
              <Button style={{ backgroundColor: '#7fad39', border: 'none', borderRadius: '0', padding: '0 25px', fontWeight: 'bold', fontSize: '14px', height: '50px', whiteSpace: 'nowrap' }}>
                SEARCH
              </Button>
              <div className="d-flex align-items-center ms-3">
                <div className="me-2 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f6fa' }}>
                  <FaPhoneAlt style={{ color: '#7fad39' }} />
                </div>
                <div className="text-end">
                  <div className="fw-bold" style={{ fontSize: '16px' }}>+65 11.188.888</div>
                  <div style={{ fontSize: '14px', color: '#777' }}>support 24/7 time</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;