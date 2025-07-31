import { useEffect, useState } from "react";
import styles from "./TabMenu.module.scss";

const TabMenu = ({ defaultActive, tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  useEffect(() => {
    setActiveTab(defaultActive);
  }, [defaultActive]);

  const handleClick = (key) => {
    setActiveTab(key);
    if (onTabChange) onTabChange(key);
  };

  return (
    <div className={styles["tab-container"]}>
      <div className={styles["tab-header"]}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles["tab"]} ${
              activeTab === tab.key ? styles["active"] : ""
            }`}
            onClick={() => handleClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles["tab-content"]}>
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabMenu;
