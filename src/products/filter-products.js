export default function filterProducts(filter, products) {
  if (!filter) { return products; }

  return products.filter((p) => p.category === filter);
}
