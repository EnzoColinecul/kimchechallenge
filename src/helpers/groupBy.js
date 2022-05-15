export const groupByContinent = (objectArray, property) => objectArray.reduce((acc, obj) => {
  const key = obj.continent[property];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(obj);
  return acc;
}, {});

export const groupByLanguages = (objectArray, property) => objectArray.reduce((acc, obj) => {
  obj.languages.forEach((language) => {
    const key = language[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
  });
  return acc;
}, {});
