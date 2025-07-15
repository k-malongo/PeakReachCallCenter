import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1080 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1079, min: 768 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 767, min: 350 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const testimonials = [
	{
		name: "John M.",
		company: "CEO of a leading airline",
		image: "boy1.jpg",
		statement:
			"PeakReach's customer service is top-notch. Their team is always professional and responsive, making our interactions smooth and efficient. They go above and beyond to understand our needs and deliver tailored solutions quickly. Whether it's resolving an issue or answering our queries, they consistently demonstrate reliability, friendliness, and a genuine commitment to customer satisfaction.",
	},
	{
		name: "Susan K.",
		company: "Decision ",
		image: "girl1.jpg",
		statement:
			"We've seen a significant improvement in our debt recovery rates since partnering with PeakReach. Their ethical approach, professionalism, and consistent communication have made a real difference in how we manage collections. They handle every case with integrity and efficiency, ensuring both compliance and results.",
	},
	{
		name: "Michael O.",
		company: "Tech Innovators",
		image: "boy2.jpg",
		statement:
			"The inbound and outbound call services provided by PeakReach have truly been a game changer for our business. Their team handles every interaction with professionalism and care, which has led to improved customer satisfaction. As a result, our internal processes are more streamlined, efficient, and aligned with our service goals.",
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
				swipeable={true}
				draggable={true}
				showDots={true}
				arrows={false}
				infinite={true}
				partialVisible={false}
				dotListClass="custom-dot-list-style"
			>
				{testimonials.map((testimonial, index) => (
					<div className="card" key={index}>
						<p className="quote_icon">&#10077;</p>
						<p className="quote_text">{testimonial.statement}</p>
						<div className="personal_info">
							{/* <div className="portrait">
								<img
									src={`/images/${testimonial.image}`}
									alt={testimonial.name}
								/>
							</div> */}
							<div>
								<h4 className="name">{testimonial.name}</h4>
								{/* <h4 className="company">{testimonial.company}</h4> */}
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}
