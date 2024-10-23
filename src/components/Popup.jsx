/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

export default function Popup({ closePopup }) {
  const [closing, setClosing] = useState(false);
  const popupRef = useRef(null);

  // Close popup if clicked outside the content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        triggerClose();
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const triggerClose = () => {
    setClosing(true); // Trigger closing animation
    setTimeout(() => {
      closePopup(); // Actually close popup after animation
    }, 300); // Match the transition duration (0.3s)
  };

  return (
    <div className={`popup-overlay ${closing ? "hidden" : ""}`}>
      <div
        className={`popup-content ${closing ? "hidden" : ""}`}
        ref={popupRef}
      >
        <button className="close-btn" onClick={triggerClose}>
          X
        </button>
        <h2>Privacy Policy</h2>
        <p>
          At Peak Reach, we are committed to protecting your privacy and
          ensuring the security of your personal information. This privacy
          policy outlines how we collect, use, and protect your information when
          you interact with our call center.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal information when you contact us, including but
          not limited to:
        </p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Account details</li>
          <li>Call recordings for quality assurance and training purposes</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use your information to:</p>
        <ul>
          <li>Provide customer support and assistance</li>
          <li>Process orders and manage accounts</li>
          <li>Improve our services and enhance customer experience</li>
          <li>Communicate with you regarding your inquiries and feedback</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h3>3. Data Security</h3>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, use, or disclosure. This
          includes encryption, secure servers, and regular security assessments.
        </p>

        <h3>4. Sharing Your Information</h3>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with:
        </p>
        <ul>
          <li>Service providers who assist us in operating our call center</li>
          <li>Regulatory authorities as required by law</li>
          <li>Other parties with your consent</li>
        </ul>

        <h3>5. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access and request corrections to your personal information</li>
          <li>Withdraw consent for data processing where applicable</li>
          <li>Opt-out of marketing communications at any time</li>
        </ul>

        <h3>6. Changes to This Policy</h3>
        <p>
          We may update this privacy policy periodically. Any changes will be
          posted on our website, and we will notify you of significant updates.
        </p>

        <h3>7. Contact Us</h3>
        <p>
          If you have any questions or concerns about this privacy policy or our
          data practices, please contact us at:
        </p>
        <p>Phone: +254797561335/+254780520824</p>
        <p>
          Email: info@peakreachcallcenterltd.com
        </p>
      </div>
    </div>
  );
}
