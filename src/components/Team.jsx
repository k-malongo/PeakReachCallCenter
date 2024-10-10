import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamDetails = [
  {
    image: "/images/boy1.jpg",
    alt: "boy1",
    name: "Roger M. Howell",
    position: "Manager",
  },
  {
    image: "/images/girl1.jpg",
    alt: "girl1",
    name: "Barbara J. Zambrano",
    position: "Manager",
  },
  {
    image: "/images/boy4.jpg",
    alt: "boy4",
    name: "Jacob B. McGinley",
    position: "Manager",
  },
  {
    image: "/images/girl2.jpg",
    alt: "girl2",
    name: "Joyce V. Garcia",
    position: "Manager",
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
              <div className="socials">
                <FacebookIcon className="icon" />
                <XIcon className="icon" />
                <InstagramIcon className="icon" />
                <LinkedInIcon className="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
