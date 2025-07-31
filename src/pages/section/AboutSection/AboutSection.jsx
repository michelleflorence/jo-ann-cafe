import styles from "./AboutSection.module.scss";
import aboutImage from "../../../assets/img/AboutSection/about-image.png";

const AboutSection = () => {
  return (
    <div className={styles["about"]}>
      <div className={styles["image-wrapper"]}>
        <img src={aboutImage} alt="about-image" />
      </div>

      <div className={styles["text-container"]}>
        <div className={styles["title"]}>
          <span className={styles["highlighted"]}>About</span> Us
        </div>

        <div className={styles["subtitle-container"]}>
          <div className={styles["subtitle"]}>
            At Jo & Ann Cafe, we believe coffee is more than just a drink — it's
            a daily ritual, a moment of calm, and a reason to connect.
          </div>
          <div className={styles["subtitle"]}>
            Our menu brings together your favorite classics with a personal
            twist, blending rich flavors, quality ingredients, and a touch of
            love in every cup and bite.
          </div>
          <div className={styles["subtitle"]}>
            From handcrafted lattes to signature snacks, everything we serve is
            designed to comfort, energize, and inspire.
          </div>
          <div className={styles["subtitle"]}>
            Step into Jo & Ann, and feel right at home.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
