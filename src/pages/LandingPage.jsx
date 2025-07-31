import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./LandingPage.module.scss";
import rippedPaper from "../assets/ripped-paper.png";
import MenuSection from "../components/MenuSection/MenuSection";

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
    </>
  );
};

export default LandingPage;
