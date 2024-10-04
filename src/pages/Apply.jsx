import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Apply() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
      
        <div className="text-center">
          <h2><strong>Find the right fit with Inspirational Generations today. </strong></h2>
         
        </div>

      
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="src/assets/images/job1.png"
              alt="Job Description 1"
              style={{ maxWidth: "80%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="src/assets/images/job2.png"
              alt="Job Description 2"
              style={{ maxWidth: "80%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="src/assets/images/job3.png"
              alt="Job Description 3"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>

      
        <div className="row mt-4 justify-content-center align-items-center">
          <div className="col-md-2 text-center">
            <img
              className="img-fluid"
              src="src/assets/images/flower-pot.png"
              alt="Flower Pot"
              style={{ maxWidth: "50%" }}
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              className="img-fluid"
              src="src/assets/images/mage_light-bulb.png"
              alt="Light Bulb"
              style={{ maxWidth: "50%" }}
            />
          </div>
        </div>

        
        <div className="text-center mt-5 mb-5"> 
        <h5>Click the button below to access our job listing</h5>
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>

   
      <Footer />
    </>
  );
}

export default Apply;

