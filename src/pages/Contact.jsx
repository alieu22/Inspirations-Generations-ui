import { useState } from "react";
import NavBar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import TextOverlay from "../utils/TextOverlay";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formState);
    axios
      .post("http://localhost:8080/public/contact/create", formState)
      .then(() => navigate("/thankyoupage"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <TextOverlay
        text="Contact Us"
        image="src/assets/images/care.png"
        color={{ color: "white" }}
      />

      <div className="contact border-primary" style={{ overflowX: "hidden" }}>
        <div className="container">
          <div className="row mb-2"></div>

          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10">
              <div
                className="contact-container p-4"
                style={{
                  border: "1px solid #007bff",
                  borderRadius: "10px",
                  display: "flex",
                  flexWrap: "wrap", 
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  maxWidth: "100%", 
                }}
              >
                <div className="col-12 col-lg-7">
                  <p className="text-left text-muted">
                    Fill out the following form and we will be in contact with you as soon as possible
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group text-dark m-2">
                      <label htmlFor="exampleInputName">Enter your name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group text-dark m-2">
                      <label htmlFor="exampleInputEmail1">Enter your Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group text-dark m-2">
                      <label htmlFor="exampleInputPhone">Enter your Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPhone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group text-dark m-2">
                      <label htmlFor="exampleFormControlReason">Enter your Reason for Contacting us</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlReason"
                        name="reason"
                        rows="3"
                        value={formState.reason}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12 text-center mt-4">
                      <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                  </form>
                </div>

               
                <div className="col-12 col-lg-4 text-dark mt-4 mt-lg-0">
                  <div className="text-center">
                    <img
                      className="img-fluid"
                      src="src/assets/images/contactcard.png"
                      alt="Light Bulb"
                      style={{ maxWidth: "100%", marginBottom: "20px" }}
                    />
                  </div>

              
                  <div className="contact-info text-left" style={{ fontSize: "1.20rem" }}>
                    <p>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Maple Street Everett, WA 98201
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPhone} /> 425-333-4353
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faEnvelope} /> InspirationalGenerations@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5"></div>
      <Footer className="mb-5" />
    </>
  );
}

export default Contact;
