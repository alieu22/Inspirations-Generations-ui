import NavBar from "../components/Navbar";
import TextOverlay from "../utils/TextOverlay";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar />
      <TextOverlay text="About Us" image="src/assets/images/care.png" color={{ color: "white" }} />

      
      <div className="container">
        <div className="row mt-5 img-home">
          <h2 className="text-center spacing">About Inspirations Generations</h2>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-start justify-content-center">
         
          <div className="col-12 col-md-4">
            <img 
              className="img-fluid" 
              src="src/assets/images/wheelchair1-img.jpeg" 
              style={{ width: '100%'}} 
              alt="Seniors"
            />
          </div>

          
          <div className="col-12 col-md-8"> 
            <p>
              We are committed to providing a safe, supportive, and nurturing environment 
              for seniors and adults who need personalized care. Our mission is to offer a 
              home-like atmosphere where residents can thrive, feel valued, and receive 
              the attention that they deserve.
            </p>
            <br />
            <p>
              We are committed to providing a safe, supportive, and nurturing environment 
              for seniors and adults who need personalized care. Our mission is to offer a 
              home-like atmosphere where residents can thrive, feel valued, and receive 
              the attention that they deserve. We are committed to providing a safe, supportive, 
              and nurturing environment for seniors and adults who need personalized care. 
              Our mission is to offer a home-like atmosphere where residents can thrive, 
              feel valued, and receive the attention that they deserve.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mt-5">
      <div className="row img-home">
          <h2 className="text-center">What We Do</h2>
        </div>

        <div className="row mt-5 d-flex justify-content-center">
          {/* Second Text Section */}
          <div className="col-12 col-md-8">
            <p>
              Inspirations Generations embodies our commitment to honoring the lives and legacies 
              of those we care for. At our adult family home, we believe that every generation has 
              something valuable to offer, and we are inspired daily by the wisdom, stories, and 
              experiences of our residents. The name "Inspirations Generations" reflects our 
              dedication to creating an environment where every individual feels cherished and 
              empowered to share their life's journey.
            </p>
            <br />
            <p>
              We are committed to providing a safe, supportive, and nurturing environment 
              for seniors and adults who need personalized care. Our mission is to offer a 
              home-like atmosphere where residents can thrive, feel valued, and receive 
              the attention that they deserve. We are committed to providing a safe, supportive, 
              and nurturing environment for seniors and adults who need personalized care. 
              Our mission is to offer a home-like atmosphere where residents can thrive, 
              feel valued, and receive the attention that they deserve.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <img 
              className="img-fluid" 
              src="src/assets/images/Logo.png" 
              style={{ 
                width: '100%', 
                borderRadius: '50%' 
              }} 
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="container-fluid spacing founder-bg-color">
        <div className="row mb-5">
          <h1 className="text-center">Our Founder</h1>
        </div>

        <div className="row d-flex justify-content-center">
          {/* Founder Image and Details */}
          <div className="col-12 col-md-2 d-flex flex-column">
            <img 
              className="img-fluid founder-img" 
              src="src/assets/images/founder.jpeg" 
              style={{ 
                width: '100%',
                borderRadius: '40%' 
              }} 
              alt="Founder"
            />
            
            
            <h2 className="mt-4" style={{ fontSize: '1.5rem' }}>Isatou Darboe</h2>
            <h3 style={{ fontSize: '1rem' }}>Isatoudarboe@gmail.com</h3>
            <h3 style={{ fontSize: '1rem' }}>
              <a href="https://www.testlink.com" style={{ fontSize: '1rem' }}>https://www.testlink.com</a>
            </h3>
            <h3 style={{ fontSize: '1rem' }}>425-332-3434</h3>
          </div>

  
          <div className="col-12 col-md-8">
            <p>
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
