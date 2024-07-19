import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 767, min: 464 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const testimonials = [
	{
		name: "John M.",
		company: "Acme Inc.",
		image: "boy1.jpg",
		statement:
			"PeakReach's customer service is top-notch. Their team is always professional and responsive, making our interactions smooth and efficient.",
	},
	{
		name: "Susan K.",
		company: "Bright Solutions",
		image: "girl1.jpg",
		statement:
			"We've seen a significant improvement in our debt recovery rates since partnering with PeakReach. Their ethical approach and effectiveness are commendable.",
	},
	{
		name: "Michael O.",
		company: "Tech Innovators",
		image: "boy2.jpg",
		statement:
			"The inbound and outbound call services provided by PeakReach have been a game changer for our business. Our customers are happier, and our operations are more streamlined.",
	},
	{
		name: "Grace N.",
		company: "Marketing Pros",
		image: "girl2.jpg",
		statement:
			"PeakReach's lead generation services have helped us grow our customer base significantly. Their strategies are advanced and highly effective.",
	},
	{
		name: "David W.",
		company: "E-commerce Ventures",
		image: "boy3.jpg",
		statement:
			"The live chat support from PeakReach has been exceptional. Our customers receive immediate assistance, which has greatly enhanced their satisfaction.",
	},
	{
		name: "Linda A.",
		company: "Retail Giants",
		image: "girl3.jpg",
		statement:
			"Working with PeakReach has been a pleasure. Their dedication to building long-term relationships and providing excellent service is evident in every interaction.",
	},
	{
		name: "Peter R.",
		company: "Financial Solutions",
		image: "boy4.jpg",
		statement:
			"Our customer service ratings have soared since we started using PeakReach's services. Their team is dedicated, professional, and always ready to help.",
	},
	{
		name: "Mary T.",
		company: "Health Services Inc.",
		image: "girl4.jpg",
		statement:
			"PeakReach has truly exceeded our expectations. Their comprehensive solutions have improved our customer engagement and driven significant business growth.",
	},
];

export default function Testimonials() {
	return (
		<div id="testimonials">
			<div className="header">
				<h2 className="title">testimonials</h2>
				<h3 className="subtitle">what people say about our services</h3>
			</div>

			<Carousel
				responsive={responsive}
				autoPlay={true}
				swipeable={true}
				draggable={true}
				showDots={true}
				infinite={true}
				partialVisible={false}
				dotListClass="custom-dot-list-style"
			>
				{testimonials.map((testimonial, index) => {
					return (
						<div className="card" key={index}>
							<p>{testimonial.statement}</p>
							<div className="personal_info">
								<div className="portrait">
									<img
										src={`/images/${testimonial.image}`}
										alt={testimonial.name}
									/>
								</div>
								<div>
									<h4 className="name">{testimonial.name}</h4>
									<h4 className="company">{testimonial.company}</h4>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}
