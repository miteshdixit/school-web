import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuickLinks from './common/QuickLinks'
const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header text-center">
        <img src="/logo.png" alt="School Logo" className="logo" />
        <h1>Springdale Public School</h1>
        <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </header>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="sports.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src=" Exhibition.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="annual.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="featured-programs">
        <h2>Featured Programs</h2>
        <div className="program-cards">
          <div className="program-card">
            <img src="Robotics.jpg" alt="Program 1" />
            <h3>Robotics Club</h3>
            <p>Join our Robotics Club to explore engineering and programming through exciting hands-on projects.</p>
          </div>
          <div className="program-card">
            <img src="crousal2.jpg" alt="Program 1" />
            <h3>Architecture Club</h3>
            <p>Explore the world of design and construction through engaging projects and activities.</p>
          </div>
          <div className="program-card">
            <img src="drama.jpg" alt="Program 1" />
            
            <h3>Drama Club</h3>
            <p>Express your creativity and develop your Drama skills in our vibrant Drama Club..</p>
          </div>
          <div className="program-card">
            <img src="crousal3.jpg" alt="Program 1" />
            <h3>Maintenance Club</h3>
            <p>Learn the essential skills of maintenance and repair through hands-on workshops.</p>
          </div>
          <div className="program-card">
            <img src="music.jpg" alt="Program 2" />
            <h3>Art and Music</h3>
            <p>Unleash your creativity in our Art and Music programs, where students can explore various artistic talents.</p>
          </div>
          <div className="program-card">
            <img src="science.jpg" alt="Program 3" />
            <h3>Science Fair</h3>
            <p>Participate in our annual Science Fair to showcase your innovative projects and experiments.</p>
          </div>
        </div>
      </div>
      <QuickLinks/>
    </div>
  );
};

export default HomePage;
