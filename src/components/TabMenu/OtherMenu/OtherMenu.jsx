import { useState } from "react";
import styles from "../TabMenu.module.scss";
import MenuCard from "@/components/Card/MenuCard";
import Pagination from "@/components/Pagination/Pagination";
import { otherMenuData } from "@/data/MenuCard";

const OtherMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = otherMenuData.slice(indexOfFirstItem, indexOfLastItem);

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
          {Math.min(indexOfLastItem, otherMenuData.length)} of{" "}
          {otherMenuData.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={otherMenuData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default OtherMenu;
