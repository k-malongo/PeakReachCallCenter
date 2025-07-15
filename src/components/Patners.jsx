import React from "react";


const partnerLogos = [
  {
    name: "Cisco",
    url: "https://www.cisco.com",
    img: "https://imgs.search.brave.com/_EJ-NRiq-aaT23gGmbI7Ox8f39NQnPmcIFpYvR7Sc6s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA4L0Np/c2NvX2xvZ29fYmx1/ZV8yMDE2LnN2Zy8y/NTBweC1DaXNjb19s/b2dvX2JsdWVfMjAx/Ni5zdmcucG5n",
  },
  {
    name: "Juniper Networks",
    url: "https://www.juniper.net",
    img: "https://imgs.search.brave.com/tlvqOxk9FECx0pX3KB25Y4ZuVKJ0pqh6MGRQb7FtQvA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzMxL0p1/bmlwZXJfTmV0d29y/a3NfbG9nby5zdmcv/MjUwcHgtSnVuaXBl/cl9OZXR3b3Jrc19s/b2dvLnN2Zy5wbmc",
  },
  {
    name: "Google",
    url: "https://www.google.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com",
    img: "https://imgs.search.brave.com/i2IP1LXWFBCC7pYw2mjvGvYVwKguOcRbqYkQeFts1D4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2NlL1hf/bG9nb18yMDIzLnN2/Zy8yNTBweC1YX2xv/Z29fMjAyMy5zdmcu/cG5n",
  },
  {
    name: "Microsoft",
    url: "https://www.microsoft.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    url: "https://www.apple.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com",
    img: "https://imgs.search.brave.com/mzEbMYvVc06jNUR-ma-XQE-pf_gLI7YBJDj0eAjbOgg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzJmL1Jl/ZGRpdF93b3JkbWFy/ay5zdmcvMjUwcHgt/UmVkZGl0X3dvcmRt/YXJrLnN2Zy5wbmc",
  },
  {
    name: "Palo Alto Networks",
    url: "https://www.paloaltonetworks.com/",
    img: "https://imgs.search.brave.com/zO_Q3dcbHkkyavOz0scZM7BkLZIjj5C4Mz9Qn7B2rQ0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YnJhbmRjb2xvcmNv/ZGUuY29tL2ltYWdl/cy9jb2xvci1wYWxl/dHRlL3BhbG8tYWx0/by1uZXR3b3Jrcy5w/bmc",
  },
];

const Partners = () => {
  return (
    <div className="partners-section">
      <h2 className="partners-heading">Our Trusted Partners</h2>
      <div className="partner-grid">
        {partnerLogos.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
            aria-label={`Visit ${partner.name} website`}
          >
            <img
              src={partner.img}
              alt={partner.name}
              className="partner-logo"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
