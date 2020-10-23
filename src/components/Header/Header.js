import React from "react";
// import RNNepaliDate from "react-native-nepali-date";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import moment from "moment";
import logo from "../../Extras/Nlogo.png";
// import { Navbar } from "../../Common";
import "./Header.css";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="date-time">{moment().format("LL")} | </section>
        <section className="language">
          <a href="/">Language</a>
        </section>
        <section className="icon">
          <a href="facebook.com">
            <FacebookIcon size={20} round={true} />{" "}
          </a>
          <a href="twitter.com">
            <TwitterIcon size={20} round={true} />
          </a>
          <a href="linkedin.com">
            <LinkedinIcon size={20} round={true} />
          </a>
          <a href="whatsapp.com">
            <WhatsappIcon size={20} round={true} />
          </a>
          <a href="gmail.com">
            <EmailIcon size={20} round={true} />
          </a>
        </section>

        {/* for school name  */}
        {/*  <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navbar />
            </section>
          </section> */}
      </section>
      <div className="head">
        <section className="header-top__logo">
          <img src={logo} alt="logo" width="90" height="90" />
        </section>
        <h1 className="school-name"> Durbar High School</h1>
        <section className="search">
          <input type="text" placeholder="search"></input>
        </section>
      </div>

      <div className="header-bottom">
        <section className="header-bottom__phone">+977071577620 </section>

        <section className="header-bottom__email">info@neutroline.com</section>
      </div>
    </section>
  );
}
export default Header;
