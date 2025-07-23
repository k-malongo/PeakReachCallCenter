import { Helmet } from "react-helmet";

<Helmet>
  <title>Peak Reach | Services</title>
  <meta name="description" content="Explore Peak Reach - your premier partner in global customer contact solutions." />
  <link rel="canonical" href="https://www.peakreach.co.ke/" />
</Helmet>


export default function Services() {
	return (
		<div id="services">
			<div className="content">
				<h3 className="title">
					Some of the <span>Services</span> We Offer
				</h3>
				<h3 className="subtitle">
					Peak Reach has Extensive Experience providing Comprehensive Solutions
					for Exceptional Customer Engagement and Business Growth
				</h3>

				<div className="container">
					<div className="card">
						<div className="card_icon">
							<img src="/images/services_calls.png" alt="services calls" />
						</div>
						<div className="card_title">
							<h4>Digital CX and virtual solutions</h4>
						</div>
						<p>
							Our expertise to work for your business by optimizing business processes
							and integrating business functions through implementing a digital first strategy.
						</p>
					</div>

					<div className="card">
						<div className="card_icon">
							<img src="/images/services_debt.png" alt="services debt" />
						</div>
						<div className="card_title">
							<h4>Back Office Outsourcing</h4>
						</div>
						<p>
							Enhancing back office functions to drive service delivery
						</p>
					</div>

					<div className="card">
						<div className="card_icon">
							<img src="/images/services_lead.png" alt="services lead" />
						</div>
						<div className="card_title">
							<h4>Lead Generation</h4>
						</div>
						<p>
							We specialize in lead generation, using advanced strategies to
							identify and cultivate potential customers, driving business
							growth and success.
						</p>
					</div>

					<div className="card">
						<div className="card_icon">
							<img src="/images/services_support.png" alt="services support" />
						</div>
						<div className="card_title">
							<h4>Live Chat Support</h4>
						</div>
						<p>
							Our live chat support offers real-time assistance, ensuring
							customers receive immediate help and resolutions, enhancing their
							overall experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
