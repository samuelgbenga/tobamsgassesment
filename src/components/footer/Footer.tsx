import React from "react";
import style from "./footer.module.css";
import Button from "../botton/Button";
import Logo from "../../assets/Logo";
import Facebook from "../../assets/Facebook";
import LinkedInIcon from "../../assets/LinkedInIcon";
import GithubIcon from "../../assets/GithubIcon";
import XIcon from "../../assets/XIcon";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.col1}>
        <div className={style.innerbox}>
          <div className={style.logo}>
            <Logo/> NFT MARKET
          </div>
          <div className={style.col1Items}>
            <span>Support</span>
            <span>Terms of service</span>
            <span>License</span>
          </div>
        </div>
      </div>
      <div className={style.col}>
        <div className={style.innerbox}>
          <ul>
            <li>Auctions</li>
            <li>Roadmap</li>
            <li>Discovery</li>
            <li>Community</li>
          </ul>
          <div>
            <Button label="My Account" variant="secondary" />
          </div>

          <div className={style.col1Items}>
            <span><Facebook/></span>
            <span><LinkedInIcon/></span>
            <span><GithubIcon/></span>
            <span><XIcon/></span>
            <span><InstagramIcon/></span>
          </div>
        </div>
      </div>
      <div className={style.col3}>
        <div className={style.innerbox}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            quod laudantium facilis natus vel? Voluptatum numquam labore maxime
            accusantium quo tenetur quasi molestias! Consequuntur enim dolorem
            commodi porro iure! Obcaecati!
          </p>
          <div>input bar signup</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
