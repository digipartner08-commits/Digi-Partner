import React from "react";

function Footer() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT - BRAND */}
        <div className="footer-col brand">
          <h2 className="logo">DIGI PARTNER</h2>
          <p>
            Elevating brands through strategic digital marketing,
            superior design, and cutting-edge technology.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => handleScroll("home")}>Home</li>
            <li onClick={() => handleScroll("service")}>Services</li>
            <li onClick={() => handleScroll("portfolio")}>Portfolio</li>
            <li onClick={() => handleScroll("about")}>About Us</li>
            <li onClick={() => handleScroll("process")}>Process</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li onClick={() => handleScroll("service")}>Digital Marketing</li>
            <li onClick={() => handleScroll("service")}>UI/UX & Design</li>
            <li onClick={() => handleScroll("service")}>Web Development</li>
            <li onClick={() => handleScroll("service")}>Content Creation</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col contact">
          <h3>Contact</h3>

          <p>📍 912, C2 Pragti IT Park<br />Mota Varachha, Surat</p>
          <p>📧 digipartner08@gmail.com</p>
          <p>📞 +91 97372 84141</p>

          {/* optional CTA */}
          <button
            onClick={() => handleScroll("contact")}
            className="footer-btn"
          >
            Get in Touch
          </button>
        </div>

      </div>

    </footer>
  );
}

export default Footer;