import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import catalogData from "./CatalogData";

const CatalogItems = ({ itemsPerPage = 12 }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = catalogData.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="catalog-search">
        <input
          type="text"
          placeholder={t("catalog.searchPlaceholder")}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="catalog-items">
        {currentItems.map((item, index) => (
          <div key={index} className="catalog-item">
            <img src={item.img} alt={item.name} className="catalog-image" loading="lazy"/>
            <h3 className="catalog-brand">{item.brand}</h3>
            <h4 className="catalog-label">{item.name}</h4>
            <p className="catalog-description">{t("catalog.qualityLabel")}: {item.description}</p>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <p className="no-results">{t("not-found")}</p>
        )}
      </div>

      {filteredItems.length > 0 && (
        <div className="catalog-pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            {t("pagination.prev")}
          </button>
          <span>
            {t("pagination.pageInfo", { current: currentPage, total: totalPages })}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            {t("pagination.next")}
          </button>
        </div>
      )}
    </div>
  );
};

export default CatalogItems;



// import React from "react";import catalogData from "./CatalogData";

// const CatalogItems = () => {
//   return (
//     <div>
//       <div className="catalog-items">
//         {catalogData.map((item, index) => (
//           <div key={index} className="catalog-item">
//             <img
//               src={item.img}
//               alt={item.name}
//               className="catalog-image"
//             />
//             <h3 className="catalog-brand">{item.brand}</h3>
//             <h4 className="catalog-label">{item.name}</h4>
//             <p className="catalog-description">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatalogItems;
