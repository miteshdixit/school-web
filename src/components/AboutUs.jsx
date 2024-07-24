

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="section-title">About Us</h2>
      <p className="intro">
        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
      </p>
      <div className="about-sections">
        <div className="about-row">
          <div className="about-box vision">
            <h3>Vision</h3>
            <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          </div>
          <div className="about-box mission">
            <h3>Mission</h3>
            <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
          </div>
        </div>
        <div className="about-box principal-message">
          <h3>Principal's Message</h3>
          <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        </div>
        <div className="about-box infrastructure">
          <h3>Infrastructure and Facilities</h3>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
