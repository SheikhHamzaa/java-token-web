import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const FAQs = () => {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);
  const faqs = [
    {
      question: "Q1: What is Java Token?",
      answer:
        "Java Token is a digital currency designed to support the Java Times Café ecosystem. It allows investors to fund coffee farmers, offering them a fair price for their coffee while providing investors with an annual return.",
    },
    {
      question: "Q2: How does Java Token benefit coffee farmers?",
      answer:
        "Java Token ensures that coffee farmers receive a fair price for their coffee. Additionally, farmers invest 10% of their earnings back into Java 300, fostering a collaborative and sustainable growth model.",
    },
    {
      question: "Q3: What are the annual returns for investing in Java Token?",
      answer: "Investors in Java Token can expect an annual return of 9%.",
    },
    {
      question: "Q4: Who can invest in Java Token?",
      answer:
        "Anyone who supports the vision of Java Times Café and meets the investment criteria can invest in Java Token, excluding the wealthiest 10% of the population to ensure fairness and inclusivity.",
    },
    {
      question: "Q5: How can I purchase Java Token?",
      answer:
        "You can purchase Java Token through the Java Times Café investment platform. Detailed instructions and support are available on our website.",
    },
    {
      question: "Q6: What is the minimum investment amount for Java Token?",
      answer:
        "The minimum investment amount will be specified on the investment platform. Typically, it aligns with the overall investment requirements of Java 300.",
    },
    {
      question: "Q7: How are the returns on Java Token calculated?",
      answer:
        "Returns are calculated annually based on the performance of the coffee farmers and the overall success of the Java Times Café ecosystem. Investors earn a fixed 9% return per year.",
    },
    {
      question: "Q8: When will I receive my returns?",
      answer:
        "Returns are disbursed annually. Investors will receive detailed information on the distribution schedule upon investing.",
    },
    {
      question: "Q9: Is there a maximum investment limit for Java Token?",
      answer:
        "Yes, to ensure fair distribution and inclusivity, there is a maximum investment limit per individual. Larger investments can be made under the names of spouses or children over 18 years old.",
    },
    {
      question: "Q10: How secure is my investment in Java Token?",
      answer:
        "Java Token investments are secured through advanced blockchain technology, ensuring transparency, security, and reliability. We also provide robust support and resources to safeguard your investment.",
    },
    {
      question:
        "Q11: What happens if a coffee farmer defaults on their investment?",
      answer:
        "The risk of default is mitigated through rigorous vetting of farmers and continuous support. In case of a default, the impact on investor returns will be assessed and managed through our contingency plans.",
    },
    {
      question: "Q12: How can I track my investment and returns?",
      answer:
        "Investors can track their investments and returns through the Java Times Café investment platform, which provides real-time updates and comprehensive reports.",
    },
    {
      question: "Q13: Can I sell or transfer my Java Token?",
      answer:
        "Yes, Java Token is designed to be a flexible investment. You can sell or transfer your Java Token through our platform, subject to certain conditions and guidelines.",
    },
    {
      question:
        "Q14: How does Java Token contribute to the mission of Java Times Café?",
      answer:
        "Java Token plays a crucial role in ensuring fair trade, supporting sustainable farming practices, and fostering a collaborative growth model for all stakeholders in the Java Times Café ecosystem.",
    },
    {
      question: "Q15: Where can I find more information about Java Token?",
      answer:
        "For more detailed information, visit our website or contact our support team. We provide extensive resources and support to help you understand and manage your investment. If you have any other questions or need further assistance, please do not hesitate to contact us at support@javatoken.io",
    },
  ];
  const toggleShow = () => {
    setShowAll(!showAll);
  };

  const handleItemClick = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="faq-container">
      <ul>
        {faqs.slice(0, showAll ? faqs.length : 5).map((faq, index) => (
          <li key={index}>
            <div className="one" onClick={() => handleItemClick(index)}>
              <p>{faq.question}</p>
              <div className="border">
                {active !== index && <FaPlus style={{color:"red"}}/>}
                {active === index && <RxCross2 style={{color:"red"}}/>}
              </div>
            </div>

            {active === index && <div className="two">{faq.answer}</div>}
          </li>
        ))}
      </ul>

      <div className="btn-show-more">
        <button onClick={toggleShow}>
            {showAll ? "show less" : "show more"}
        </button>
      </div>
    </div>
  );
};

export default FAQs;
