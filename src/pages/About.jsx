import NavBar from "../components/Navbar";
import TextOverlay from "../utils/TextOverlay";
function About() {
    return (
        <>
        <NavBar/>
        <TextOverlay
        text="About Us"
        image=""
        color={{ color: "white" }}
      />

      <div className="container">
        <div className="row">
            <h1 className="text-center">About inspirations Generations</h1>
        </div>
      </div>
        </>
    )
}

export default About;