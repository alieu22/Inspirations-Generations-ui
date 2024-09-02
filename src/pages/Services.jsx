import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import TextOverlay from "../utils/TextOverlay";
function Services() {
  return (
    <>
      <NavBar />
      <TextOverlay text="About Us" image="" color={{ color: "white" }} />

      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5">Our Services</h1>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid" src="src/assets/images/dark.jpg" />
          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <h2>Personal Care Services</h2>
            <ul>
              <li>Assistance with activites of daily living (ADLs)</li>
              <li>
                Medication management and assistance with Medication
                administration.
              </li>
              <li>
                Mobility assistance, including help with transferring and
                positioning.
              </li>
            </ul>
            <h2>Emotional and Psychological Support</h2>
            <li>
              Emotional support and companionship from caregivers and fellow
              residents.
            </li>
            <li>
              Individualized attention to emotional needs and coping strategies.
            </li>
            <li>Access to counseling or therapy services as needed.</li>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <h2>Health care services</h2>
            <ul>
              <li>
                Assistance with activities of daily life (ADLs) such as bathing
              </li>
              <li>
                Medication management assistance with Medication administration
              </li>
              <li>
                Mobility assistance, including help with transferring and
                positioning
              </li>
            </ul>
            <h2 className="mt-2">Nutritional Support</h2>
            <ul>
              <li>
                Meal planning and preparation based on individual dietary needs
                and preferences
              </li>
              <li>Assistance with feeding if needed</li>
              <li>Snacks and hydration support throughout the day</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid" src="src/assets/images/dark.jpg" />
          </div>
        </div>
      </div>

      <div className="container spacing">
        <div className="row">
          <h1 className="text-center">Our Home</h1>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-6">
            <img class="img-fluid" src="src/assets/images/dark.jpg" />
          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <h3>
              Welcome to our home in Snohomish. <br />
              It's cozy and comfy. Relax and make <br />
              yourself at home - we've got everything <br /> you need for a
              peaceful stay.
            </h3>

            <h5 className="mt-5">Availability : 2 Rooms Available</h5>
            <h5>Location : Snohomish</h5>
            <h5>Address : 1234 Cedar St Snohomish, WA 98290</h5>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
            <h1 className="text-center">Images of our Home</h1>
        </div>

        <div className="row text-center">
            <div className="col-12 col-md-4 col-lg-4 mb-5">
                <img className="img-fluid" src="src/assets/images/dark2.jpeg"/>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mb-5">
                <img className="img-fluid"  src="src/assets/images/dark2.jpeg"/>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mb-5">
                <img className="img-fluid"  src="src/assets/images/dark2.jpeg"/>
            </div>

            
        </div>

        <div className="row mt-3 text-center">
        <div className="col-12 col-md-4 col-lg-4 mb-5">
                <img className="img-fluid"  src="src/assets/images/dark2.jpeg"/>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mb-5">
                <img className="img-fluid"  src="src/assets/images/dark2.jpeg"/>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mb-5">
                <img className="img-fluid"  src="src/assets/images/dark2.jpeg"/>
            </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Services;
