import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import catalogData from "./CatalogData";

const CatalogItems = ({ itemsPerPage = 12 }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(catalogData.length / itemsPerPage);

  // Slice items for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = catalogData.slice(startIndex, endIndex);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <div className="catalog-items">
        {currentItems.map((item, index) => (
          <div key={index} className="catalog-item">
            <img src={item.img} alt={t(item.nameKey)} className="catalog-image" />
            <div className="catalog-label">{t(item.nameKey)}</div>
            <p className="catalog-description">{t(item.descriptionKey)}</p>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="catalog-pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CatalogItems;
