import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Helmet } from "react-helmet";

<Helmet>
  <title>Peak Reach | Team</title>
  <meta name="description" content="Explore Peak Reach - your premier partner in global customer contact solutions." />
  <link rel="canonical" href="https://www.peakreach.co.ke/" />
</Helmet>


const teamDetails = [
  {
    image: "/images/image.png",
    alt: "boy1",
    name: "Trevor Kibuba",
    position: "C.E.O",
  },
  {
    image: "/images/4.png", 
    alt: "Emma Wambui",
    name: "Emma Wambui",
    position: "Head of peoples department",
  },
  {
    image: "/images/1.png",
    alt: "boy4",
    name: "Felisters Gathoni",
    position: "Director bids and Contracts",
  },
  {
    image: "/images/1.png",
    alt: "girl2",
    name: "Juliet W",
    position: "Head of Business Development",
  },
  {
    image: "/images/3.png",
    alt: "girl2",
    name: "Kelvin M",
    position: "Systems Specialist",
  },
];

export default function Team() {
  return (
    <div id="team">
      <div className="header">
        <h2 className="title">our team</h2>
        <h3 className="subtitle">our best specialists work for you</h3>
      </div>

      <div className="card_container">
        {teamDetails.map((person, index) => (
          <div className="card" key={index}>
            <img src={person.image} alt={person.alt} />
            <div className="info">
              <h4 className="name">{person.name}</h4>
              <h5 className="position">{person.position}</h5>
              {/* <div className="socials">
                <FacebookIcon className="icon" />
                <XIcon className="icon" />
                <InstagramIcon className="icon" />
                <LinkedInIcon className="icon" />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
