import HeroSection from "../pages/section/HeroSection/HeroSection";
import styles from "./LandingPage.module.scss";
import rippedPaper from "../assets/ripped-paper.png";
import rippedPaperTwo from "../assets/ripped-paper-two.png";
import rippedPaperThree from "../assets/ripped-paper-three.png";
import MenuSection from "../pages/section/MenuSection/MenuSection";
import AboutSection from "./section/AboutSection/AboutSection";
import ContactSection from "./section/ContactSection/ContactSection";

const LandingPage = () => {
  return (
    <>
      <section className={styles["hero-section"]}>
        <HeroSection />
      </section>

      <div className={styles["ripped-paper-one"]}>
        <img src={rippedPaper} alt="ripped paper" />
      </div>

      <section className={styles["menu-section"]} id="menu">
        <MenuSection />
      </section>

      <section className={styles["about-section"]} id="about-us">
        <div className={styles["ripped-paper-two"]}>
          <img src={rippedPaperTwo} alt="ripped paper" />
        </div>

        <AboutSection />
      </section>

      <section className={styles["contact-section"]} id="contact-us">
        <div className={styles["ripped-paper-three"]}>
          <img src={rippedPaperThree} alt="ripped paper" />
        </div>

        <ContactSection />
      </section>
    </>
  );
};

export default LandingPage;
