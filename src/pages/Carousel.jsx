import { useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleCaptions");

    if (carouselElement && window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 2000,
        wrap: true,
      });

      return () => {
        carousel.dispose();
      };
    }
  }, [window.bootstrap]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="src/assets/images/elder-game.jpeg"
            className="d-block w-100"
            alt="Wild Landscape"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Inspirations Generations</h2>
            <h3 className="text-warning">
              Providing clients with the best experience!
            </h3>
            <h4>Where Comfort, Care, and Community Flourish.</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/images/joy-img.jpeg"
            className="d-block w-100"
            alt="Camera"
          />
          
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/images/help-img.jpeg"
            className="d-block w-100"
            alt="Exotic Fruits"
          />
          
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <FaChevronLeft className="carousel-control-prev-icon" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <FaChevronRight className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
