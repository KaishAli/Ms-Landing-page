import "../Footer/Footer.css";
function Footer() {
  return (
    <>
      <section id="footer">
        <footer className="bg-black text-muted custom-footer container-fluid">

          <div className="container border-bottom">
            <div className="row mt-2 mb-5 mt-0">
              <div className="col-md-3 col-lg-4 mx-auto mb-4 mt-5">
                <span className="footer-heading">MASTER'S UNION</span>
              </div>
              <div className="col-md-4 mx-auto mb-md-0 mb-4 mt-5 address">
                <p>
                  <i className="fa-solid fa-location-dot"></i> <span> </span>
                  DLF Cyberpark, Phase II, Udyog Vihar, Sector 20, Gurugram,
                  Haryana, 122008
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center justify-content-between p-4">
            <div className="me-5 d-none d-lg-block">
              <ul className="d-flex justify-content-between justify-content-center ms-2">
                <li>Privacy policy</li>
                <li>Tearm & Condication</li>
                <li>Cookie policy</li>
              </ul>
              <span className="ms-5">
                *T&C apply: Images shown here after differ from actual Product
              </span>
            </div>
            <div>
              <a
                target="_blank"
                href="/"
                className="me-4 text-reset"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                target="_blank"
                href="/"
                className="me-4 text-reset"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                target="_blank"
                href="/"
                className="me-4 text-reset"
              >
                <i className="fab fa-linkedin" />
              </a>

              <a
                target="_blank"
                href="/"
                className="me-4 text-reset"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
export default Footer;
