import styles from "./MenuSection.module.scss";
import flyingAssetOne from "@/assets/img/MenuSection/flying-asset-one.png";
import flyingAssetTwo from "@/assets/img/MenuSection/flying-asset-two.png";
import TabMenu from "@/components/TabMenu/TabMenu";
import AllMenu from "@/components/TabMenu/AllMenu/AllMenu";
import FoodMenu from "@/components/TabMenu/FoodMenu/FoodMenu";
import DrinkMenu from "@/components/TabMenu/DrinkMenu/DrinkMenu";
import OtherMenu from "@/components/TabMenu/OtherMenu/OtherMenu";

const MenuSection = () => {
  return (
    <div className={styles["menu"]}>
      <div className={styles["flying-asset-one"]}>
        <img src={flyingAssetOne} alt="flying-asset" />
      </div>
      <div className={styles["flying-asset-two"]}>
        <img src={flyingAssetTwo} alt="flying-asset" />
      </div>
      <div className={styles["header-container"]}>
        <div className={styles["title"]}>
          Our <span className={styles["highlight"]}>Signature</span> Dishes
        </div>
        <div className={styles["subtitle"]}>
          Delight in the flavors that define Jo & Ann — your favorite classics
          with a signature twist.
        </div>
      </div>

      <div>
        <TabMenu
          defaultActive="all-menu"
          tabs={[
            { key: "all-menu", label: "All Menu", content: <AllMenu /> },
            {
              key: "food-snack",
              label: "Food & Snack",
              content: <FoodMenu />,
            },
            { key: "drink", label: "Drink", content: <DrinkMenu /> },
            { key: "other", label: "Other", content: <OtherMenu /> },
          ]}
        />
      </div>
    </div>
  );
};

export default MenuSection;
