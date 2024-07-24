

const Admissions = () => {
  return (
    <div className="admissions">
      <h2 className="section-title">Admissions</h2>
      <div className="admissions-content">
        <div className="admissions-section">
          <h3 className="subheading">Process</h3>
          <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        </div>
        <div className="admissions-section">
          <h3 className="subheading">Criteria</h3>
          <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        </div>
        <div className="admissions-section">
          <h3 className="subheading">Important Dates</h3>
          <ul>
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
        <div className="admissions-section contact">
          <h3 className="subheading">Contact for Admissions</h3>
          <p>Email: <a href="mailto:admissions@springdale.edu">admissions@springdale.edu</a> | Phone: <a href="tel:+1234567890">123-456-7890</a></p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
