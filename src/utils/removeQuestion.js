/** @format */

//clear last item
export const currentStep = (idStep, ArrayExcept) => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];

  const updateDataStep = listDataSubmit.filter((item) => item.id <= idStep);
  window.localStorage.setItem("listDataSubmit", JSON.stringify(updateDataStep));
  // clear stores
  removeAllItemStorage(ArrayExcept);
};

const removeAllItemStorage = (ArrayExcept) => {
  const allItems = Object.keys(localStorage);
  for (const item of allItems) {
    if (ArrayExcept.includes(item)) continue;
    localStorage.removeItem(item);
  }
};
