import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Contact me on ")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          dinhloc1004@gmail.com | {" "}
          <a
            href="https://www.linkedin.com/in/%C4%91inh-t%E1%BA%A5n-l%E1%BB%99c-104606277/"
            target="_blank"
            rel="noreferrer"
          >
            Loc Tan Dinh
          </a>
        </p>
      </div>
    </Fade>
  );
}
