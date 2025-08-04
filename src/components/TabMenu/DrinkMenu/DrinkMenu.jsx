import { useState } from "react";
import styles from "../TabMenu.module.scss";
import MenuCard from "@/components/Card/MenuCard";
import Pagination from "@/components/Pagination/Pagination";
import { drinkMenuData } from "@/data/MenuCard";

const DrinkMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = drinkMenuData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles["container"]}>
      <div className={styles["card-grid"]}>
        {currentItems.map((item) => (
          <MenuCard key={item.id} data={item} />
        ))}
      </div>

      <div className={styles["pagination-container"]}>
        <p>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, drinkMenuData.length)} of{" "}
          {drinkMenuData.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={drinkMenuData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DrinkMenu;
