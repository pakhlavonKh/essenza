
const catalogData = Array.from({ length: 136 }, (_, i) => {
  return {
    img: `/assets/cellImage_0_${i}.png`,
    nameKey: `catalog.cellImage_${i}.name`,
    descriptionKey: `catalog.cellImage_${i}.description`,
  };
});

export default catalogData;
