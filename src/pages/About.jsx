import NavBar from "../components/Navbar";
import TextOverlay from "../utils/TextOverlay";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar />
      <TextOverlay text="About Us" image="" color={{ color: "white" }} />

      <div className="container">
        <div className="row mt-5">
          <h1 className="text-center spacing">About inspirations Generations</h1>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid" src="src/assets/images/dark.jpg" />
          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-5 text-center">
            <h4>
              We are commited to providing a safe, supportive, and nurturing
              environment for seniors and adults who need personalized care. Our
              mission is to offer a home-like atomosphere where residents can
              thrive, feel valued, and receieve the attention that they deserve
            </h4>
          </div>
        </div>
      </div>

      <div className="container spacing">
        <div className="row mt-5 ">
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <h4>
              Inspirations Generations embodies our commitment to honoring the
              lives and legacies of those we care for. At our adult family home,
              we believe that every generation has something valuable to offer,
              and we are inspired daily by the wisdom, stories, and experiences
              of our residents. The name "Inspirations Generations" reflects our
              dedication to creating an environment where every individual feels
              cherished and empowered to share their life's journey.
            </h4>
          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <img className="img-fluid" src="src/assets/images/Logo.png" />
          </div>
        </div>
      </div>

      <div className="container-fluid spacing">
        <div className="row mt-5 founder-bg-color">
          <h1 className="text-center">Our Founder</h1>
        </div>

        <div className="row founder-bg-color">
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
            <img className="img-fluid founder-img" src="src/assets/images/founder.jpeg" />
          </div>

          <div className="col-12 col-md-6 col-lg-6 ">
            <h1 className="mt-3 ">Isatou Darboe</h1>
            <h2 className="mt-3">Isatoudarboe@gmail.com</h2>
            <h3 className="mt-3"><a>https://www.testlink.com</a></h3>
            <h3 className="mt-3">425-332-3434</h3>
          </div>
        </div>
      
      <div className="row founder-bg-color">
      <h3 className="mt-5">
            Isatou Darboe, the founder of inspiration Generations, is passionate about creating a compassionate 
            and nurturing environment for seniors and adults in need of personalized care. With a background 
            in caregiving and a deep commitment to enchancing the quality of life for others, Isatou established
            Inspirations Generations to provide a home where residents are treated like family. Her vision is to
            create a space where each individual feels respected, valued, and empowered to live their best life 
            in a safe and supportive community.
        </h3>
      </div>

      </div>

    <Footer/>
    </>
  );
}

export default About;
