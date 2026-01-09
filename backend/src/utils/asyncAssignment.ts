// --- LEGACY CODE (Do not change these simulation functions) ---
const getUser = (id: number, cb: (u: any) => void) =>
  setTimeout(() => cb({ id, name: "User" }), 500);
const getOrders = (userId: number, cb: (o: any[]) => void) =>
  setTimeout(() => cb(["Order1", "Order2"]), 500);
const sendEmail = (email: string, cb: (s: boolean) => void) =>
  setTimeout(() => cb(true), 500);

// --- ASSIGNMENT ---
export function runLegacy() {
  console.log("Starting Callback Hell...");
  getUser(1, (user) => {
    console.log("Got user:", user);
    getOrders(user.id, (orders) => {
      console.log("Got orders:", orders);
      sendEmail(user.name, (sent) => {
        console.log("Email sent:", sent);
      });
    });
  });
}

// TODO: 1. Promisify the helper functions above (create wrappers if needed)
// TODO: 2. Implement this function using async/await to achieve the same flow
export async function runRefactored() {
  console.log("Starting Async/Await...");
  // WRITE YOUR CODE HERE
}
