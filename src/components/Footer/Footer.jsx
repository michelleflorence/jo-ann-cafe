import styles from "./Footer.module.scss";
import logo from "@/assets/logo.png";
import instagramSVG from "@/assets/svg/instagram.svg";
import facebookSVG from "@/assets/svg/facebook.svg";
import tiktokSVG from "@/assets/svg/tiktok.svg";
import Button from "@/components/Button/Button";
import phoneSVG from "@/assets/svg/phone.svg";
import locationSVG from "@/assets/svg/location.svg";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about-us" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  return (
    <div className={styles["footer"]}>
      <div className={styles["content"]}>
        <div className={styles["left"]}>
          <div className={styles["logo"]}>
            <img src={logo} alt="logo-cafe" />
          </div>

          <div className={styles["text"]}>
            Bringing people together over coffee, one comforting cup and cozy
            moment at a time.
          </div>

          <div className={styles["icon-group"]}>
            <img src={instagramSVG} alt="social-media" />
            <img src={facebookSVG} alt="social-media" />
            <img src={tiktokSVG} alt="social-media" />
          </div>

          <div className={styles["back-to-top"]}>
            <Button
              color="secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ChevronUp />
              Back to Top
            </Button>
          </div>
        </div>

        <div className={styles["right"]}>
          <div className={styles["navigation"]}>
            <div className={styles["title"]}>Navigation</div>
            <ul className={styles["nav-list"]}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["contact"]}>
            <div className={styles["title"]}>Contact</div>

            <div className={styles["info-wrapper"]}>
              <div className={styles["info"]}>
                <img src={phoneSVG} alt="icon" />
                <div className={styles["text"]}>+6281216477232</div>
              </div>

              <div className={styles["info"]}>
                <img src={locationSVG} alt="icon" />
                <div className={styles["text"]}>
                  Jalan KH Jl. Agus Salim No.22-26, Citrodiwangsan, Lumajang
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["copyright"]}>
        © 2025 Jo & Ann Cafe. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
