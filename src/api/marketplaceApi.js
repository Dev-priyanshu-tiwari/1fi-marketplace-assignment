import { categories, products, getProductById } from "../data/products";

// This module stands in for 1Fi's real product/EMI service.
// Every function returns a Promise and can fail, so consuming hooks
// must handle loading + error states rather than assume success.
// Swapping this for `fetch("/api/marketplace/...")` later requires
// no change on the component side.

const NETWORK_DELAY_MS = 550;
const RANDOM_FAILURE_RATE = 0.06; // small chance, so error UI is reachable but not annoying

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function maybeFail() {
  if (Math.random() < RANDOM_FAILURE_RATE) {
    throw new Error("Network error. Please check your connection and try again.");
  }
}

export async function fetchCategories() {
  await delay(NETWORK_DELAY_MS);
  maybeFail();
  return categories;
}

export async function fetchProducts({ categoryId } = {}) {
  await delay(NETWORK_DELAY_MS);
  maybeFail();
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

export async function fetchProductDetail(productId) {
  await delay(NETWORK_DELAY_MS);
  maybeFail();
  const product = getProductById(productId);
  if (!product) {
    throw new Error("This product is no longer available.");
  }
  return product;
}
