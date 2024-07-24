
const Academics = () => {
  return (
    <div className="academics">
      <h2 className="section-title">Academics</h2>
      <div className="academics-content">
        <div className="academics-section">
          <h3 className="section-heading">Curriculum</h3>
          <div className="curriculum-box">
            <h4>Primary (Grades 1-5)</h4>
            <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          </div>
          <div className="curriculum-box">
            <h4>Secondary (Grades 6-10)</h4>
            <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          </div>
          <div className="curriculum-box">
            <h4>Senior Secondary (Grades 11-12)</h4>
            <ul>
              <li><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
              <li><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</li>
            </ul>
          </div>
        </div>
        <div className="academics-section">
          <h3 className="section-heading">Teaching Methodologies</h3>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </div>
        <div className="academics-section">
          <h3 className="section-heading">Educational Resources</h3>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
