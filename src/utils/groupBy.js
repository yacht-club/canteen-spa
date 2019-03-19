export default (items, key) => {
  const gbObject = items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

  return Object.keys(gbObject).map(k => ({ category: k, items: gbObject[k] }));
};
