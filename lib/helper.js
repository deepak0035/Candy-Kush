export const getProducts = async () => {
  const response = await fetch(`api/products`);
  const json = await response.json();
  return json;
};
