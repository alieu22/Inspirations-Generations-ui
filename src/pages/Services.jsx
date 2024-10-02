import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import TextOverlay from "../utils/TextOverlay";

function Services() {
  return (
    <>
      <NavBar />
      <TextOverlay text="Our Services" image="src/assets/images/care.png" color={{ color: "white" }} />

      {/* Your existing sections */}

      <div className="container about">
        <div className="row img-home">
          <h2 className="text-center">Our Home</h2>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid" src="src/assets/images/house-img.jpeg" alt="House" />
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <h2>Welcome to our home in Snohomish.</h2>
            <p className="mb-5">
              It's cozy and comfy. Relax and make yourself at home - we've got everything you need for a
              peaceful stay.
            </p>

            <p> <strong>Availability:</strong> 2 Rooms Available</p>
            <p> <strong>Location:</strong> Snohomish</p>
            <p> <strong>Address:</strong> 1234 Cedar St Snohomish, WA 98290</p>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="container-fluid p-5 about">
        <div className="row mt-5 mb-5 img-home">
          <h2 className="text-center">Images of our Home</h2>
        </div>

        <div className="row text-center">
          <div className="col-12 col-md-4 mb-3">
            <img className="img-fluid gallery-image" src="src/assets/images/house-img.jpeg" alt="House Image 1" />
          </div>

          <div className="col-12 col-md-4 mb-3">
            <img className="img-fluid gallery-image" src="src/assets/images/house-img.jpeg" alt="House Image 2" />
          </div>

          <div className="col-12 col-md-4 mb-3">
            <img className="img-fluid gallery-image" src="src/assets/images/house-img.jpeg" alt="House Image 3" />
          </div>
        </div>

        <div className="row text-center">
          <div className="col-12 col-md-4 mb-3">
            <img className="img-fluid gallery-image" src="src/assets/images/house-img.jpeg" alt="House Image 4" />
          </div>

          <div className="col-12 col-md-4 mb-3">
            <img className="img-fluid gallery-image" src="src/assets/images/house-img.jpeg" alt="House Image 5" />
          </div>

          <div className="col-12 col-md-4 mb-3">
            <img className="img-fluid gallery-image" src="src/assets/images/house-img.jpeg" alt="House Image 6" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;
