import styles from "./HeroSection.module.scss";
import rusticCoffee from "../../assets/img/HeroSection/rustic-coffee.png";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["gradient-blur-top-left"]} />
      <div className={styles["gradient-blur-top-right"]} />
      <div className={styles["content"]}>
        <h1>
          Start Your Day with{" "}
          <span className={styles["highlight"]}>Jo & Ann</span> Cafe
        </h1>
        <p>
          Fuel your focus and lift your mood with a perfect cup of coffee,
          crafted just for you.
        </p>
        <div className={styles["button"]}>
          <Button>Order Now</Button>
          <Button color="tertiary">See Menu</Button>
        </div>
      </div>

      <div className={styles["visual"]}>
        <div className={styles["circle"]}></div>
        <img
          src={rusticCoffee}
          alt="Rustic Coffee"
          className={styles["image"]}
        />
        <span className={styles["label"]}>Rustic Coffee</span>
        <span className={styles["rating"]}>4.8 ★</span>
        <span className={styles["sold"]}>18K</span>
      </div>
    </div>
  );
};

export default HeroSection;
