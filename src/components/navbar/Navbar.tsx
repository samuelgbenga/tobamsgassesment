import Logo from "../../assets/Logo";
import Button from "../botton/Button";
import  style from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={style.navbar}>
      <Logo/>
     
      <ul>
        <li>Auctions</li>
        <li>Roadmap</li>
        <li>Discovery</li>
        <li>Community</li>
      </ul>

      <div className={style.buttons}>
        <Button label="Contact" variant="primary" />
        <Button label="My Account" variant="secondary" />
      </div>
    </nav>
  );
};

export default Navbar;
