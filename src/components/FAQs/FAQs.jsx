import React, { useState } from 'react';
import './FAQs.css'; // Optional: For styling

const faqsData = [
  {
    question: "How do I contact customer support if I have a question or issue?",
    answer: "You can reach our customer support team through our contact page or email us directly at support@example.com.",
  },
  {
    question: "Can I return the product if it doesn't meet my expectations?",
    answer: "Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within 30 days for a full refund or exchange.",
  },
  {
    question: "What makes your product stand out from others in the market?",
    answer: "We focus on quality, affordability, and exceptional customer service to make our product the best choice.",
  },
  {
    question: "Is there a warranty on the product, and what does it cover?",
    answer: "Yes, all our products come with a 1-year warranty that covers manufacturing defects.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs">
    
      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
