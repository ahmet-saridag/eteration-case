export async function getProducts(api: string) {
  const response = await fetch(api);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return resData;
}
