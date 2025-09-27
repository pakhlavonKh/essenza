import React from "react";

// Generate array of URLs directly from public folder
const imageUrls = Array.from({ length: 136 }, (_, i) => `/assets/cellImage_0_${i + 2}.png`);

const CatalogItems = () => {
  return (
    <div className="catalog-items">
      {imageUrls.map((src, idx) => (
        <div className="catalog-item" key={idx}>
          <img src={src} alt={`catalog-${idx}`} className="catalog-image" />
        </div>
      ))}
    </div>
  );
};

export default CatalogItems;
