// CatalogItems.js
import React, { useState } from "react";
import catalogData from "./CatalogData";

const CatalogItems = ({ itemsPerPage = 12 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered items based on search
  const filteredItems = catalogData.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic works on filtered data
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset to page 1 if search term changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="catalog-search">
        <input
          type="text"
          placeholder="Search by brand, name, or description..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Catalog Items */}
      <div className="catalog-items">
        {currentItems.map((item, index) => (
          <div key={index} className="catalog-item">
            <img src={item.img} alt={item.name} className="catalog-image" />
            <h3 className="catalog-brand">{item.brand}</h3>
            <h4 className="catalog-label">{item.name}</h4>
            <p className="catalog-description">{item.description}</p>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <p className="no-results">No items found.</p>
        )}
      </div>

      {/* Pagination */}
      {filteredItems.length > 0 && (
        <div className="catalog-pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
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
