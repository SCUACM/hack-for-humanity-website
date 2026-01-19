import '../css/FAQ.css';
import earth from '../assets/images/question_earth.PNG'
import pin from '../assets/images/pin.PNG'

function FAQ() {
    const faqs =[
        {
            question: "What's a Hackathon?",
            answer: "A hackathon is an opportunity when you and your team come together to construct a cool and inventive project in 24 hours!"

        },
        {
            question: "How big can my team be?",
            answer: "We require all teams to be comprised of 2-6 people. This is a great way for you to work with others, and learn about the design process."

        },
        {
            question: "What if I don't have a team?",
            answer: "No problem! We will help connect you with other students who are also looking for teammates before and during the event."

        },
        {
            question: "Who can attend?",
            answer: "All undergraduate and graduate students of all majors are welcome! No prior technical experience is required. We'll have mentors and resources to help you along the way."     
        },
        {
            question: "I've never been to a Hackathon!",
            answer: "No worries! Hackathons are a great way to develop your skills and see what you can accomplish."
        },
        {
            question: "Any other questions?",
            answer: "Feel free to email us at acm@scu.edu if you have any questions or concerns!"
        }
    ]
    return (
        <section id="faq">
            <h1>FAQs</h1>
            <img src={earth} className="center-image" />
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question">
                            <h2>{faq.question}</h2>
                        </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;