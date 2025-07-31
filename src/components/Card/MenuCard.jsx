import { Star } from "lucide-react";
import styles from "./MenuCard.module.scss";

const MenuCard = ({ data }) => {
  const { name, price, desc, image, isFavorite } = data;

  return (
    <div className={styles["card"]}>
      <div className={styles["image-wrapper"]}>
        <img src={image} alt={name} />
        {isFavorite && (
          <button className={styles["favorite"]}>
            <Star fill="#FF8211" color="#FF8211" size={18} />
          </button>
        )}
      </div>
      <div className={styles["info"]}>
        <h4 className={styles["name"]}>{name}</h4>
        <p className={styles["desc"]}>{desc}</p>
        <p className={styles["price"]}>{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
