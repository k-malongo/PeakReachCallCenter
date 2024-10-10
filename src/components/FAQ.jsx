import { useState } from "react";

const q_a1 = [
	{
		question: "what is a call center agency?",
		answer:
			"We often have job opportunities available. We value hard work and strive to build a great team. If interested in a position with UZ Mindset Services",
	},
	{
		question: "is worldwide a call center agency?",
		answer:
			"No – we do not own a call center. WCC is a call center consulting company that is dedicated to enhancing the outsourcing process. Our consultants will analyze your unique situation and provide referrals to 4-5 of the BEST call",
	},
	{
		question: "what type of call center agencies are?",
		answer:
			"Donec pellentesque neque id blandit sodales. Duis vel euismod nibh. Sed efficitur magna eget auctor auctor. Aliquam ultrices nisi ac nisl tempus, in",
	},
	{
		question: "what is call center outsourcing?",
		answer:
			"Feugiat nunc hendrerit. Vivamus gravida id tortor vitae rhoncus. Sed odio lorem, gravida eget condimentum sit amet, ultrices at ante. Sed urna purus, cursus sed",
	},
];

const q_a2 = [
	{
		question: "what are the costs of outsourcing?",
		answer:
			"Feugiat nunc hendrerit. Vivamus gravida id tortor vitae rhoncus. Sed odio lorem, gravida eget condimentum sit amet, ultrices at ante. Sed urna purus, cursus sed",
	},
	{
		question: "how do i hire a call center?",
		answer:
			"Nulla mi ipsum, congue vitae erat ut, lacinia facilisis tellus. Duis ut tellus sit amet urna interdum congue. Proin eu laoreet nisl. Cras eget sagittis felis",
	},
	{
		question: "what are the top call center locations?",
		answer:
			"Nam a aliquet augue. Nunc dignissim massa nec vulputate eleifend. Cras at nisl imperdiet, venenatis sem gravida, porta odio. Nulla congue erat id risus maximus",
	},
	{
		question: "how can we generate more leads?",
		answer:
			"Integer libero libero, pharetra sed ultrices eu, bibendum non nisl. Nulla turpis lorem, placerat non eleifend nec, lacinia ut diam. Phasellus eleifend risus",
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
