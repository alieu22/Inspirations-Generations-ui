import NavBar from "../components/Navbar";
import TextOverlay from "../utils/TextOverlay";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar />
      <TextOverlay text="About Us" image="src/assets/images/care.png" color={{ color: "white" }} />

      
      <div className="container">
        <div className="row mt-5">
          <h1 className="text-center spacing">About Inspirations Generations</h1>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 d-flex align-items-start justify-content-center">
         
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img 
              className="img-fluid" 
              src="src/assets/images/wheelchair1-img.jpeg" 
              style={{ maxWidth: '100%', maxHeight: '300px' }} 
              alt="Seniors"
            />
          </div>

          
          <div className="col-12 col-md-6 text-left mt-4 mt-md-0"> 
            <h4>
              We are committed to providing a safe, supportive, and nurturing environment 
              for seniors and adults who need personalized care. Our mission is to offer a 
              home-like atmosphere where residents can thrive, feel valued, and receive 
              the attention that they deserve.
            </h4>
          </div>
        </div>
      </div>

      {/* Second Section: Logo and Description */}
      <div className="container spacing">
        <div className="row mt-5 d-flex align-items-center justify-content-center">
          {/* Second Text Section */}
          <div className="col-12 col-md-6 text-left"> {/* Changed to text-left */}
            <h4>
              Inspirations Generations embodies our commitment to honoring the lives and legacies 
              of those we care for. At our adult family home, we believe that every generation has 
              something valuable to offer, and we are inspired daily by the wisdom, stories, and 
              experiences of our residents. The name "Inspirations Generations" reflects our 
              dedication to creating an environment where every individual feels cherished and 
              empowered to share their life's journey.
            </h4>
          </div>

          {/* Second Image (Logo) Section */}
          <div className="col-12 col-md-6 d-flex mt-4 justify-content-center">
            <img 
              className="img-fluid" 
              src="src/assets/images/Logo.png" 
              style={{ 
                width: '400px', 
                height: '400px', 
                borderRadius: '50%' 
              }} 
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="container-fluid spacing founder-bg-color">
        <div className="row mt-5">
          <h1 className="text-center">Our Founder</h1>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          {/* Founder Image and Details */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <img 
              className="img-fluid founder-img" 
              src="src/assets/images/founder.jpeg" 
              style={{ 
                width: '250px',
                height: '250px',
                borderRadius: '50%' 
              }} 
              alt="Founder"
            />
            
            
            <h2 className="mt-4 text-left" style={{ fontSize: '1.5rem' }}>Isatou Darboe</h2>
            <h3 className="text-left" style={{ fontSize: '1rem' }}>Isatoudarboe@gmail.com</h3>
            <h3 className="text-left" style={{ fontSize: '1rem' }}>
              <a href="https://www.testlink.com" style={{ fontSize: '1rem' }}>https://www.testlink.com</a>
            </h3>
            <h3 className="text-left" style={{ fontSize: '1rem' }}>425-332-3434</h3>
          </div>

  
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <p className="font text-left" style={{ fontSize: '1.25rem' }}>
              Isatou Darboe, the founder of Inspiration Generations, is passionate about creating 
              a compassionate and nurturing environment for seniors and adults in need of personalized care. 
              With a background in caregiving and a deep commitment to enhancing the quality of life for others, 
              Isatou established Inspirations Generations to provide a home where residents are treated like family. 
              Her vision is to create a space where each individual feels respected, valued, and empowered to 
              live their best life in a safe and supportive community.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
