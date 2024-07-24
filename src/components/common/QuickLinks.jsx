import { Link } from 'react-router-dom';
import { FaInfoCircle, FaBook, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaImages, FaEnvelope } from 'react-icons/fa';


const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li><Link to="/about" className="quick-link"><FaInfoCircle className="icon" /> About Us</Link></li>
        <li><Link to="/academics" className="quick-link"><FaBook className="icon" /> Academics</Link></li>
        <li><Link to="/admissions" className="quick-link"><FaUserGraduate className="icon" /> Admissions</Link></li>
        <li><Link to="/faculty" className="quick-link"><FaChalkboardTeacher className="icon" /> Faculty</Link></li>
        <li><Link to="/students" className="quick-link"><FaUsers className="icon" /> Students</Link></li>
        <li><Link to="/gallery" className="quick-link"><FaImages className="icon" /> Gallery</Link></li>
        <li><Link to="/contact" className="quick-link"><FaEnvelope className="icon" /> Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
