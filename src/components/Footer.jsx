import { NavLink } from "react-router-dom";

const Footer = () => {
  const pages = ["Home", "About", "Services", "Contact"];

  return (
    <footer className="text-center text-lg-start text-muted bg-primary">
      <section className="pt-2 text-white">
        <div className="container text-center text-md-start">
          <div className="row mt-5">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 d-flex align-items-center">
                
                <i className="ms-1"></i>Inspirational Generations  
                
                
                <img 
                  className="img-fluid ms-1"
                  src="src/assets/images/Logo.png" 
                  style={{ 
                    width: '50px',  
                    height: '50px', 
                    borderRadius: '50%' 
                  }} 
                  alt="Logo"
                />
              </h6>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>

              {pages.map((page) => (
                <p key={page}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link footer-link footer-link-active"
                        : "nav-link text-reset"
                    }
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  >
                    {page}
                  </NavLink>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 footerCopyright text-white">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-reset fw-bold" href="https://mindsightmentors.org">
          MCG
        </a>
      </div>
    </footer>
  );
};

export default Footer;
