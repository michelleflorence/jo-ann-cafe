import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Button from "../Button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about-us" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  return (
    <nav className={styles["navbar"]}>
      <img src={logo} alt="Jo & Ann Logo" className={styles["logo"]} />

      <button
        className={styles["menu-toggle"]}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`${styles["links"]} ${isOpen ? styles["show"] : ""}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles["order-button"]}>
        <Button color="secondary">
          Order Now <ArrowRight />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
