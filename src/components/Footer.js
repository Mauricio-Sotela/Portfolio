import React from "react";

function Footer() {
  return (
    <div className="footer">
      <ul className="social-network social-circle">
        <li>
          <a
            className="icoLinkedin"
            target="blank"
            href="https://www.linkedin.com/in/jos%C3%A9-sotela/"
            title="Linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            className="icoGithub"
            target="blank"
            href="https://github.com/Mauricio-Sotela"
            title="GitHub"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </li>

        <li>
          <a
            className="icoHotmail"
            href="mailto:j-ms-27@hotmail.com"
            title="Hot Mail"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>

        {/* <li>
          <a
            className="icoFacebook"
            target="blank"
            href="https://www.facebook.com/maricio.soteloprendegast"
            title="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>

        <li>
          <a
            className="icoInstagram"
            target="blank"
            href="https://www.instagram.com/mau.1988/"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Footer;
