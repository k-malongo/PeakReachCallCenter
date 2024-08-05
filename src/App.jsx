import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Team from "./components/Team.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Services />
			<About />
			<Testimonials />
			<Pricing />
			<FAQ />
			<Team/>
		</>
	);
}

export default App;
