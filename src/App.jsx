import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Services />
			<About />
			<Testimonials />
			<Pricing />
		</>
	);
}

export default App;
