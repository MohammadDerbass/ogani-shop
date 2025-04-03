import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F3F6FA' }} className="text-dark pt-5 pb-3 border-top">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-3 col-md-6 mb-4">
            <img src="/images/logo.png" alt="Logo" style={{ width: '140px' }} className="mb-3" />
            <ul className="list-unstyled">
              <li>Address: 60-49 Road 11378 New York</li>
              <li>Phone: +65 11.188.888</li>
              <li>Email: hello@colorlib.com</li>
            </ul>
          </div>


          <div className="col-lg-6 col-md-6 mb-4">
            <div className="row">
              <div className="col-6">
                <h6 className="fw-bold mb-3">Useful Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">About Our Shop</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Secure Shopping</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Delivery Information</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Our Sitemap</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled mt-lg-4">
                  <li><a href="#" className="text-dark text-decoration-none">Who We Are</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Our Services</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Projects</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Innovation</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Testimonials</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12">
            <h6 className="fw-bold mb-3">Join Our Newsletter Now</h6>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter your mail" />
              <button className="btn btn-success">SUBSCRIBE</button>
            </div>
            <div className="d-flex gap-3 fs-5">
              <a href="#"><FaFacebookF className="text-dark" /></a>
              <a href="#"><FaInstagram className="text-dark" /></a>
              <a href="#"><FaTwitter className="text-dark" /></a>
              <a href="#"><FaPinterestP className="text-dark" /></a>
            </div>
          </div>
        </div>


        <div className="text-center mb-2">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/payment-item.png"
            alt="Payment Methods"
            className="img-fluid"
            style={{ maxWidth: '300px' }}
          />
        </div>


        <div className="text-center text-muted small mt-3">
          © 2025 | Built by 
          <a 
            href="https://www.linkedin.com/in/mohammad-derbass-324b94223"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success fw-bold text-decoration-none"
          >
            {' '}Mohammad Derbass
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
