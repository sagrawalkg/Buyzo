export function checkDiscount() {
  // TODO: This logic is broken because of hoisting.
  // Refactor it to use 'let'/'const' and fix the scope so the console.log prints the correct value inside the block,
  // and variable leakage is prevented.

  if (true) {
    var discount = 10;
    var finalPrice = 100 - discount;
  }

  console.log("Discount:", discount); // Should not be accessible here!
  console.log("Final:", finalPrice);
}
