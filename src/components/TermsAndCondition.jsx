import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal'

const TermsAndCondition = () => {
    const [showAll,setShowAll] = useState(false)
    const toggleShow =()=>{
        setShowAll(!showAll)
    }

    const terms = [
        {
          title: "Introduction",
          content:
            "These Terms and Conditions ('Terms') govern the use of Java Token, a digital currency offered by Java Times Caffé ('Company,' 'we,' or 'us'). By purchasing, holding, or using Java Token, you ('Investor,' 'user,' or 'you') agree to these Terms.",
        },
        {
          title: "Eligibility",
          content:
            "You must be at least 18 years old to purchase Java Token. 2.2. The wealthiest 10% of the population are excluded from investing in Java Token to ensure fairness and inclusivity. 2.3. By participating, you confirm that you meet the eligibility criteria.",
        },
        {
          title: "Purchasing Java Token",
          content:
            "Java Token can be purchased through www.javatoken.io. 3.2. The minimum and maximum investment amounts will be specified on the platform. 3.3. All purchases are subject to verification and approval by the Company.",
        },
        {
          title: "Returns and Investment",
          content:
            "Investors are entitled to an annual return of 9% on their Java Token investment. 4.2. Returns are calculated based on the performance of the coffee farmers and the overall success of the Java Times Caffé ecosystem. 4.3. Returns are disbursed annually, and investors will receive detailed information on the distribution schedule.",
        },
        {
          title: "Use of Funds",
          content:
            "Funds raised through the sale of Java Token will be used to purchase coffee from farmers at a fair price. 5.2. Farmers are required to invest 10% of their earnings back into Java 300, promoting sustainable growth.",
        },
        {
          title: "Security and Risk",
          content:
            "Java Token investments are secured through advanced blockchain technology. 6.2. While we take every measure to ensure the security of your investment, investing in digital currencies carries inherent risks. 6.3. The Company is not responsible for any loss or damage resulting from unauthorized access to your account or investment.",
        },
        {
          title: "Transfer and Sale of Java Token",
          content:
            "Java Token can be sold or transferred through the Java Times Caffé investment platform, subject to certain conditions and guidelines. 7.2. The Company reserves the right to impose limits on the transfer or sale of Java Token to ensure compliance with regulatory requirements.",
        },
        {
          title: "Termination and Suspension",
          content:
            "The Company reserves the right to terminate or suspend your access to Java Token if you violate these Terms or engage in fraudulent or illegal activities. 8.2. Upon termination, you will forfeit any rights to future returns or benefits associated with Java Token.",
        },
        {
          title: "Amendments to Terms",
          content:
            "The Company reserves the right to amend these Terms at any time. Any changes will be posted on our website and communicated to investors. 9.2. Continued use of Java Token after the effective date of any amendments constitutes acceptance of the revised Terms.",
        },
        {
          title: "Limitation of Liability",
          content:
            "The Company is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use Java Token. 10.2. The Company’s total liability is limited to the amount of your initial investment in Java Token.",
        },
        {
          title: "Governing Law",
          content:
            "These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Java Times Caffé is registered. 11.2. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction.",
        },
        {
          title: "Contact Information",
          content:
            "For any questions or concerns regarding these Terms, please contact us at support@javatoken.io",
        },
      ];
  return (
    <div className='terms-container' >
      {terms.slice(0,showAll ? terms.length : 5).map((term,index)=>(
          
            <Slide direction='left' key={index}>
                <div className='term-item' >
                    <h3>{term.title}</h3>
                    <p>{term.content}</p>
                </div>
            </Slide>
           
        ))}

        <div className='btn-show-more'>
            <button onClick={toggleShow}>
                {showAll? "Show less" : "Show more"}
            </button>
        </div>
    </div>
  )
}

export default TermsAndCondition
