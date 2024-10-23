import { useState } from "react";

const q_a1 = [
	{
		question: "How to contact us?",
		answer:
			"info@peakreachcallcenterltd.com | +254797561335/+254780520824",

	},
	{
		question: "What are our hours of operation?",
		answer:
			"Peakreach Call Center operational 24hrs a day",
	},
	{
		question: "What products/services do we offer?",
		answer:
			"Assisting customers with inquiries, troubleshooting issues, and providing information about products and services.",
	},
	{
		question: "what is our location?",
		answer:
			"Our headquaters are located in Nairobi Kenya but we operate globally ",
	},
];

const q_a2 = [
	{
		question: "How to request for a demo",
		answer:
			"Prepare Your Information: Before reaching out, have your contact details ready, including your name, email, and phone number. Identify the specific product or service you’re interested in.",
	},
	{
		question: "How long is the demo?",
		answer:
			"The length of a demo in our call center typically ranges from 30 minutes to an hour. This duration allows for a comprehensive overview of the services offered, including system features, functionality, and user interface. During our demo, you can ask questions and explore specific use cases relevant to their needs. We organize a well-structured demo ensures that you understand how the call center solutions can benefit your operations and improve customer experience. Following the demo, there will be time allocated for further discussions or clarifications based on your interests and requirements.",
	},
	{
		question: "why Peak Reach?",
		answer:
		"Exceptional Customer Service: Our trained agents prioritize customer satisfaction, ensuring a friendly and professional experience for every caller.",
		
	},
	{
		question: "Who are our clients?",
		answer:
			"Our clients are companies that receive high number of calls, chats and interactions",
	},
];

export default function FAQ() {
	const [open, setOpen] = useState({
		first: true,
		second: true,
	});
	const [active, setActive] = useState({
		first: 0,
		second: 0,
	});

	const handleToggle = (e, set, index) => {
		if (index === active[set]) {
			setOpen({ ...open, [set]: !open[set] });
		} else {
			setActive({ ...active, [set]: index });
			setOpen({ ...open, [set]: true });
		}
	};

	return (
		<div id="faq">
			<div className="header">
				<h2 className="title">faq</h2>
				<h3 className="subtitle">have you any questions</h3>
			</div>

			<div className="container">
				<div>
					{q_a1.map((q_a_card, index) => (
						<div className="faq_card" key={index}>
							<button
								className="question"
								onClick={(e) => handleToggle(e, "first", index)}
							>
								<div className="question_icon">&#63;</div>
								<p className="question_text">{q_a_card.question}</p>
								{open["first"] && active["first"] === index ? (
									<div className="question_toggle">&#8722;</div>
								) : (
									<div className="question_toggle">&#43;</div>
								)}
							</button>
							<div
								className={
									open["first"] && active["first"] === index
										? "answer"
										: "answer_closed"
								}
							>
								<div className="answer_icon">&#11166;</div>
								<p className="answer_text">{q_a_card.answer}</p>
							</div>
							<hr className="faq_card_border" />
						</div>
					))}
				</div>
				<div>
					{q_a2.map((q_a_card, index) => (
						<div className="faq_card" key={index}>
							<button
								className="question"
								onClick={(e) => handleToggle(e, "second", index)}
							>
								<div className="question_icon">&#63;</div>
								<p className="question_text">{q_a_card.question}</p>
								{open["second"] && active["second"] === index ? (
									<div className="question_toggle">&#8722;</div>
								) : (
									<div className="question_toggle">&#43;</div>
								)}
							</button>
							<div
								className={
									open["second"] && active["second"] === index
										? "answer"
										: "answer_closed"
								}
							>
								<div className="answer_icon">&#11166;</div>
								<p className="answer_text">{q_a_card.answer}</p>
							</div>
							<hr className="faq_card_border" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
