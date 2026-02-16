import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer-custom text-center py-4">
      <div className="container">
        <p>
          📍 EMA 402 Second Floor, Estrellita Building, Montillano St. Alabang,
          Muntinlupa City
        </p>
        {/* Uncomment if you want to show phone number */}
        {/* <p>📞 +63 912 345 6789</p> */}

        {/* Contact link above social links */}
        <div className="contact-link mt-3">
          <strong>Get in touch via the links below</strong>
        </div>

        {/* Social links below */}
        <div className="social-links mt-2">
          <a
            href="https://www.facebook.com/REBulosBuilders2017"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="container mt-2">
        <p>© {new Date().getFullYear()} R.E Bulos Builders. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
