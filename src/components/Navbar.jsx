import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div id="navbar">
			<div className="content">
				<div className="brand">
					<img className="logo" src="/images/logo1.png" alt="" />
					<h1>Peak Reach</h1>
				</div>

				<div className="links">
					<Link to="/">Home</Link>
					<Link to="/">Services</Link>
					<Link to="/">Products</Link>
					<Link to="/">Contact</Link>
					<Link to="/">About</Link>
				</div>
			</div>
		</div>
	);
}
