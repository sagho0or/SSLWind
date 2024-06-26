export default function removeEmptyKeys(data: any) {
  Object.keys(data).forEach((key) => {
    if ((data[key] === '' || data[key] == null || data[key].length === 0)) {
      delete data[key];
    }
  });
  return data;
}