import React, { useState } from "react";


const faqs = [
  {
    question: "What services does Digi Partner offer?",
    answer:
      "We provide digital marketing, UI/UX design, web development, and content creation tailored to elevate your brand.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on scope, but most projects are completed within 2–6 weeks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance and ongoing support to ensure your business runs smoothly.",
  },
  {
    question: "Can you help improve my existing website?",
    answer:
      "Absolutely! We specialize in redesigning and optimizing websites for better performance and conversion.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <div className="icon">
                {active === index ? "✕" : "+"}
              </div>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;