export default function Header() {
	return (
		<div id="header">
			<img
				className="background"
				src="/images/header.jpg"
				alt="header background"
			/>

			<div className="content">
				<div className="card">
					<h2 className="title">
						Empowering Customer Experiences with Innovation and Sustainability
						in Global Premier Call Center
					</h2>
					<h3 className="description">
						PeakReach is a Global call center where customer satisfaction,
						advanced technology, and sustainability converge. Our exceptional
						workforce builds long-term relationships, delivering unparalleled
						service and ensuring customer service excellence.
					</h3>
                    <button className="action">Request A Quote</button>
				</div>
			</div>
		</div>
	);
}
