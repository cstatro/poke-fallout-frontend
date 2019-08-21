export const objToDataSet = (obj, element) => {
  for (const key in obj) {
    element.dataset[key] = obj[key];
  }
};
