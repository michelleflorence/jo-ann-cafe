import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onAfterPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles["pagination"]}>
      <button
        type="button"
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
            onAfterPageChange?.();
          }
        }}
        disabled={currentPage === 1}
        className={styles["button-arrow"]}
      >
        <ChevronLeft />
      </button>

      {/* Page number loop */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNum = index + 1;
        return (
          <button
            type="button"
            key={pageNum}
            className={currentPage === pageNum ? styles["active"] : ""}
            onClick={() => {
              onPageChange(pageNum);
              onAfterPageChange?.(); 
            }}
          >
            {pageNum.toString().padStart(2, "0")}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
            onAfterPageChange?.();
          }
        }}
        disabled={currentPage === totalPages}
        className={styles["button-arrow"]}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
