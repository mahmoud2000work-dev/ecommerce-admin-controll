export const getProducts = async () => {
  const res = await fetch("/db.json");
  const data = await res.json();
  return data.products;
};

export const getProduct = async (id) => {
  const res = await fetch("/db.json");
  const data = await res.json();
  return data.products.find((p) => p.id === id);
};

export const createProduct = () => {
  throw new Error("Cannot create product on Netlify without backend");
};

export const updateProduct = () => {
  throw new Error("Cannot update product on Netlify without backend");
};

export const deleteProduct = () => {
  throw new Error("Cannot delete product on Netlify without backend");
};
