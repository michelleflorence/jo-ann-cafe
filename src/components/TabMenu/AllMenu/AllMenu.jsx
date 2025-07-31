import { useEffect, useRef, useState } from "react";
import styles from "./AllMenu.module.scss";
import MenuCard from "../../Card/MenuCard";
import Pagination from "../../Pagination/Pagination";
import { allMenuData } from "../../../data/MenuCard";

const AllMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const scrollRef = useRef(null);

  // Handle responsive items per page
  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 600) {
      setItemsPerPage(6); // Mobile: 1 kolom × 4 baris
    } else if (width <= 900) {
      setItemsPerPage(6); // Tablet: 2 kolom × 3 baris
    } else {
      setItemsPerPage(6); // Desktop: 3 kolom × 2 baris
    }
  };

  // 1. Jalankan saat ukuran layar berubah
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Validasi currentPage setelah itemsPerPage berubah
  useEffect(() => {
    const totalPages = Math.ceil(allMenuData.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages); // Fix lompat halaman
    }
  }, [itemsPerPage, currentPage]);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allMenuData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles["container"]}>
      <div ref={scrollRef} className={styles["scroll-target"]}></div>

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
          onPageChange={(page) => setCurrentPage(page)}
          onAfterPageChange={() => {
            if (scrollRef.current) {
              const top =
                scrollRef.current.getBoundingClientRect().top +
                window.scrollY -
                100;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
        />
      </div>
    </div>
  );
};

export default AllMenu;
