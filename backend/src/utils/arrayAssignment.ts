import { Product } from '../data/products';

/**
 * Task: Implement a function that analyzes the products data.
 * 1. Filter products that belong to the "Electronics" category.
 * 2. Sort these electronics by price (High to Low).
 * 3. Return an array of the names of the top 3 most expensive electronics.
 */
export const analyzeProducts = (productList: Product[]): string[] => {
  // TODO: Implement logic here
  return [];
};

export const runArrayAnalysis = (products: Product[]) => {
  console.log('--- Module 7: Array Analysis ---');
  const topElectronics = analyzeProducts(products);
  console.log('Top 3 Electronics by Price:', topElectronics);
};
