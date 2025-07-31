import { useState } from "react";
import styles from "./AllMenu.module.scss";
import MenuCard from "../../Card/MenuCard";
import Pagination from "../../Pagination/Pagination";
import { allMenuData } from "../../../data/MenuCard";

const AllMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allMenuData.slice(indexOfFirstItem, indexOfLastItem);

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
          {Math.min(indexOfLastItem, allMenuData.length)} of{" "}
          {allMenuData.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={allMenuData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllMenu;
