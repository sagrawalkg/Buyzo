export const runEventLoopExample = () => {
  // EVENT LOOP EXERCISE
  console.log("1. Script Start");

  setTimeout(() => {
    console.log("2. Timeout");
  }, 0);

  Promise.resolve().then(() => {
    console.log("3. Microtask");
  });

  console.log("4. Script End");
};
