import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer bg-light text-center py-4 border-top mt-5">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact-info">
            <h5>Contact Us</h5>
            <p>Email: info@springdale.edu</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 School Lane, Noida, UP, India</p>
          </div>
          <div className="footer-section ">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/academics">Academics</a></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/faculty">Faculty</a></li>
              <li><a href="/students">Students</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Springdale Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
