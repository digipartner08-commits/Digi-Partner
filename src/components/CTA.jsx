import React from "react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">

        {/* LEFT */}
        <motion.div
          className="cta-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            Let’s Work <span>Together</span>
          </h2>

          <p>
            Ready to transform your digital presence? Let’s build something
            exceptional.
          </p>

          <div className="cta-info">
            <div className="info">
              <span className="icon">📍</span>
              <span>Surat, India</span>
            </div>

            <div className="info">
              <span className="icon">✉</span>
              <span>digipartner08@gmail.com</span>
            </div>

            <div className="info">
              <span className="icon">📞</span>
              <span>+91 97372 84141</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="cta-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="row">
            <div className="field">
              <input type="text" required />
              <label>First Name</label>
            </div>

            <div className="field">
              <input type="text" required />
              <label>Last Name</label>
            </div>
          </div>

          <div className="field">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="field">
            <input type="text" required />
            <label>Mobile Number</label>
          </div>

          <div className="field">
            <input type="text" required />
            <label>Service you're interested in</label>
          </div>

          <div className="field">
            <textarea rows="4" required></textarea>
            <label>Project Details</label>
          </div>

          <button className="cta-btn">Send Message →</button>

        </motion.form>
      </div>
    </section>
  );
}

export default CTA;