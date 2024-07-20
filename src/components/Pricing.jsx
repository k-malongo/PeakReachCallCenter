export default function Pricing() {
	return (
		<div id="pricing">
			<div className="getting_started">
				<h2 className="title">four easy steps</h2>
				<h3 className="subtitle">how to get started</h3>

				<div className="card_container">
					<div className="card">
						<h4 className="card_title">Setup Your Campaign</h4>
						<div className="line_container">
							<div className="number">01</div>
							<div className="line"></div>
						</div>
						<p className="card_text">
							Name your Campaign and choose your country
						</p>
					</div>

					<div className="card">
						<h4 className="card_title">Get a Tracking Number</h4>
						<div className="line_container">
							<div className="number">02</div>
							<div className="line"></div>
						</div>
						<p className="card_text">
							Get a unique Tracking Number where you can send calls
						</p>
					</div>

					<div className="card">
						<h4 className="card_title">Add a Target Line</h4>
						<div className="line_container">
							<div className="number">03</div>
							<div className="line"></div>
						</div>
						<p className="card_text">
							Forward your calls to buyers or anywhere you'd like them to go
						</p>
					</div>

					<div className="card">
						<h4 className="card_title">Launch Your Campaign</h4>
						<div className="line_container">
							<div className="number">04</div>
							<div className="line"></div>
						</div>
						<p className="card_text">
							Name your Campaign and choose your country
						</p>
					</div>
				</div>
			</div>

			<div className="prices">
				<div className="card_container">
					<div className="card">
						<h4 className="category">basic</h4>
						<h4 className="figure">
							$<span>9.99</span>
						</h4>
						<ul className="features">
							<li>
								<p>Live Call Monitoring</p>
							</li>
							<li>
								<p>Report Builder</p>
							</li>
							<li>
								<p>Custom Caller ID</p>
							</li>
						</ul>
						<div className="action">
							<button>buy now</button>
						</div>
					</div>

					<div className="card">
						<h4 className="category">professional</h4>
						<h4 className="figure">
							$<span>49.99</span>
						</h4>
						<ul className="features">
							<li>
								<p>Live Call Monitoring</p>
							</li>
							<li>
								<p>Report Builder</p>
							</li>
							<li>
								<p>Custom Caller ID</p>
							</li>
							<li>
								<p>Complex IVR</p>
							</li>
						</ul>
						<div className="action">
							<button>buy now</button>
						</div>
					</div>

					<div className="card">
						<h4 className="category">master</h4>
						<h4 className="figure">
							$<span>79.99</span>
						</h4>
						<ul className="features">
							<li>
								<p>Live Call Monitoring</p>
							</li>
							<li>
								<p>Report Builder</p>
							</li>
							<li>
								<p>Custom Caller ID</p>
							</li>
							<li>
								<p>Complex IVR</p>
							</li>
							<li>
								<p>Debt Collection</p>
							</li>
						</ul>
						<div className="action">
							<button>buy now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
