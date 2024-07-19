import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
		slidesToSlide: 4, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 767, min: 464 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const testimonials = [
	{
		name: "John M.",
		company: "Acme Inc.",
		statement:
			"PeakReach's customer service is top-notch. Their team is always professional and responsive, making our interactions smooth and efficient.",
	},
	{
		name: "Susan K.",
		company: "Bright Solutions",
		statement:
			"We've seen a significant improvement in our debt recovery rates since partnering with PeakReach. Their ethical approach and effectiveness are commendable.",
	},
	{
		name: "Michael O.",
		company: "Tech Innovators",
		statement:
			"The inbound and outbound call services provided by PeakReach have been a game changer for our business. Our customers are happier, and our operations are more streamlined.",
	},
	{
		name: "Grace N.",
		company: "Marketing Pros",
		statement:
			"PeakReach's lead generation services have helped us grow our customer base significantly. Their strategies are advanced and highly effective.",
	},
	{
		name: "David W.",
		company: "E-commerce Ventures",
		statement:
			"The live chat support from PeakReach has been exceptional. Our customers receive immediate assistance, which has greatly enhanced their satisfaction.",
	},
	{
		name: "Linda A.",
		company: "Retail Giants",
		statement:
			"Working with PeakReach has been a pleasure. Their dedication to building long-term relationships and providing excellent service is evident in every interaction.",
	},
	{
		name: "Peter R.",
		company: "Financial Solutions",
		statement:
			"Our customer service ratings have soared since we started using PeakReach's services. Their team is dedicated, professional, and always ready to help.",
	},
	{
		name: "Mary T.",
		company: "Health Services Inc.",
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
							<h4>{testimonial.name}</h4>
							<h4>{testimonial.company}</h4>
							<p>{testimonial.statement}</p>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}
