import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainBanner from './components/MainBanner';
import { Container, Row, Col } from 'react-bootstrap';
import Categories from './components/Categories';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeFeatured from './components/HomeFeatured'; 
import Footer from './components/Footer';
function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />

        <Container className="mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Row>
                    {showSidebar && (
                      <Col md={3}>
                        <Sidebar />
                      </Col>
                    )}
                    <Col md={showSidebar ? 9 : 12}>
                      <MainBanner />
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col md={12}>
                      <Categories />
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col md={12}>
                      <HomeFeatured />
                    </Col>
                  </Row>
                </>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
