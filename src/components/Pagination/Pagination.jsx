import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles["pagination"]}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles["button-arrow"]}
      >
        <ChevronLeft />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            className={currentPage === pageNum ? styles["active"] : ""}
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum.toString().padStart(2, "0")}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles["button-arrow"]}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
