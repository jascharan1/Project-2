let bottles = [
  { id: 1, name: "Chardonnay", price: 20 },
  { id: 2, name: "Merlot", price: 25 },
  { id: 3, name: "Cabernet Sauvignon", price: 30 },
  { id: 4, name: "Pinot Noir", price: 35 },
];

const updateBottle = (id, newData) => {
  const index = bottles.findIndex(bottle => bottle.id === id);
  if (index !== -1) {
      bottles[index] = { ...bottles[index], ...newData };
      return true;
  }
  return false;
};

module.exports = { bottles, updateBottle };
