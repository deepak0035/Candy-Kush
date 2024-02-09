export const getProducts = async () => {
  const response = await fetch(`/api/products`);
  const json = await response.json();
  return json;
};


export const getSliderImages = async () => {
  const response = await fetch(`api/slider`);
  const json = await response.json();
  return json;
};