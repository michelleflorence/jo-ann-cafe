import { useState } from "react";
import styles from "../TabMenu.module.scss";
import MenuCard from "@/components/Card/MenuCard";
import Pagination from "@/components/Pagination/Pagination";
import { foodMenuData } from "@/data/MenuCard";

const FoodMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodMenuData.slice(indexOfFirstItem, indexOfLastItem);

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
          {Math.min(indexOfLastItem, foodMenuData.length)} of{" "}
          {foodMenuData.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={foodMenuData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default FoodMenu;
