import { Navbar } from "react-bootstrap";
import Carousel from "./Carousel";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
    return (
        <>
       <NavBar/>
        <Carousel></Carousel>

        <div className="container">
            <div className="row mt-5">
                <h1 className="text-center">Mission Statement</h1>
            </div>

            <div className="row mt-5">
            <p className="text-center"> 
              At inspirations Generations Family Home, our mission is to enrich the lives of our residents by creating a warm, welcoming atomosphere
              where they can thrive. We are dedicated to delivering personalized care that honors each individuals unique journey, fostering a sense of
              belonging and community. Through our commitment to compassion, respect, and excellence, we aim to inspire and support each generation,
              ensuring they feel at home and cared for in every aspect of their lives.  
            </p>

            <br/>

            <p className="text-center">
                Guided by empathy, respect, and commitment, we aim to build a caring and supportive home where families have confidence that their loved 
                ones are recieving exceptional care. Our team is passionate about enchancing the quality of life for each resident, ensuring they experience
                joy, dignity, and fufillment every day. We take pride in being a trusted partner on their life journey.
            </p>
            </div>

            <div className="row mt-5 text-center">
                <div className="col-12 col-md-4 col-lg-4 mb-5">
                   <img class="img-fluid" src="src/assets/images/wheelchair1-img.jpeg"/>
                </div>

                <div className="col-12 col-md-4 col-lg-4 mb-5">
                   <img class="img-fluid" src="src/assets/images/wheelchair2-img.jpeg"/>
                </div>

                <div className="col-12 col-md-4 col-lg-4">
                   <img class="img-fluid" src="src/assets/images/medicineimg.jpeg"/>
                </div>
            </div>

            <div className="row mb-5">

            </div>
        </div>

<Footer/>
        </>
    )
}

export default Home;