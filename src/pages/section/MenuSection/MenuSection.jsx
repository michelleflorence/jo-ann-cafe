import styles from "./MenuSection.module.scss";
import flyingAssetOne from "@/assets/img/MenuSection/flying-asset-one.png";
import flyingAssetTwo from "@/assets/img/MenuSection/flying-asset-two.png";
import TabMenu from "@/components/TabMenu/TabMenu";
import AllMenu from "@/components/TabMenu/AllMenu/AllMenu";

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
              content: <>Food and Snack</>,
            },
            { key: "drink", label: "Drink", content: <>Drink</> },
            { key: "other", label: "Other", content: <>Other</> },
          ]}
        />
      </div>
    </div>
  );
};

export default MenuSection;
