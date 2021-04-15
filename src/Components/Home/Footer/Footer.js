import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#FBD062", padding: "50px" }}>
      <section class="d-flex flex-row" className="footer-container">
        <div class="col-md-5 col-sm-12" className="container-footer">
          <h2 className="footer-h2">Let us handle your project, professionally.</h2>
          <p className="container-footer-p">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
        <div class="col-md-7 col-sm-12">
          <form className="form-footer">
            <div class="mb-2">
              <input
                type="email"
                class="form-control"
                placeholder="Your email address"
              />
            </div>
            <div class="mb-2">
              <input
                type="text"
                class="form-control"
                placeholder="Your name / company’s name"
              />
            </div>
            <div class="mb-2">
              <textarea
                name=""
                class="form-control"
                id=""
                cols="76"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="btn-footer">
              Send
            </button>
          </form>
    
        </div>
      </section>
      <small className="footer-small">
        copyright Orange labs {new Date().getFullYear()}
      </small>
    </div>
  );
};

export default Footer;
