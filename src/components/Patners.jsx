import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Partner 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      url: "https://www.amazon.com",
    },
    {
      name: "Partner 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      url: "https://www.microsoft.com",
    },
    {
      name: "Partner 3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      url: "https://www.apple.com",
    },
    {
      name: "Partner 4",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
      url: "https://www.google.com",
    },
    {
      name: "Partner 5",
      logo: "https://imgs.search.brave.com/YXfe4yLyR8Mu6M9MAiEMevvnWKoeB9cmrN62sB7yRcg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1kby13ZS10/aGluay1vZi10aGUt/bmV3LWZ1dHVyZS10/d2l0dGVyLXgtbG9n/by12MC1oM2xscjc3/ZWN2ZGIxLmpwZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz05YTdm/NDkyMGIyMmY4YmU0/NzkzMTU5NjQ1YjBj/NmU2YjA4ZDZkMDFl",
      url: "https://www.twitter.com",
    },
    {
      name: "Partner 6",
      logo: "https://imgs.search.brave.com/mzEbMYvVc06jNUR-ma-XQE-pf_gLI7YBJDj0eAjbOgg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzJmL1Jl/ZGRpdF93b3JkbWFy/ay5zdmcvMjUwcHgt/UmVkZGl0X3dvcmRt/YXJrLnN2Zy5wbmc",
      url: "https://www.youtube.com",
    },
  ];

  return (
    <section id="partners">
      <div className="partners-content">
        <h2 className="partners-title">Our Trusted Partners</h2>
        <p className="partners-subtitle">
          We proudly collaborate with industry leaders to bring you world-class solutions.
        </p>
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="partner-card"
            >
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
