
const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">
        Explore our photo gallery to see the vibrant life at Springdale Public School.
      </p>
      <div className="gallery-grid">
        <img src="crousal1.jpg" alt="Event 1" className="gallery-image" />
        <img src="crousal2.jpg" alt="Event 2" className="gallery-image" />
        <img src="drama.jpg" alt="Event 3" className="gallery-image" />
        <img src="Exhibition.jpg" alt="Event 4" className="gallery-image" />
        <img src="annual.jpg" alt="Event 5" className="gallery-image" />
        <img src="science.jpg" alt="Event 6" className="gallery-image" />
        <img src="sports.jpg" alt="Event 7" className="gallery-image" />
        <img src="" alt="" className="" />
        <img src="music.jpg" alt="Event 8" className="gallery-image" />
      </div>
    </div>
  );
};

export default Gallery;
