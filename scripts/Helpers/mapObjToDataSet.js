export const objToDataSet = (obj, element) => {
  data = element.dataset;
  for (const key in obj) {
    data[key] = obj[key];
  }
};
