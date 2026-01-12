Welcome to the Buyzo JavaScript Internship Assignment! This assignment focuses on **core JavaScript concepts**. We have prepared skeleton files for you to work on.

**Goal:** Complete the logic in the provided files.

---

## Module 1: Hoisting & Scoping (Backend)
**File:** [backend/src/utils/hoistingAssignment.ts](./backend/src/utils/hoistingAssignment.ts)

1. Open [backend/src/index.ts](./backend/src/index.ts) and uncomment the line `// checkDiscount();`.
2. Go to [backend/src/utils/hoistingAssignment.ts](./backend/src/utils/hoistingAssignment.ts).
3. The `checkDiscount` function is broken due to `var` hoisting.
4. **Task:** Refactor it to use `let`/`const` and fix the scope so the console logs print the correct values.

---

## Module 2: Closures (Frontend)
**File:** [frontend/src/context/CartContext.tsx](./frontend/src/context/CartContext.tsx)

1. Open [frontend/src/context/CartContext.tsx](./frontend/src/context/CartContext.tsx).
2. Locate the `createActionTracker` function skeleton inside `CartProvider`.
3. **Task:** Complete the closure implementation:
   - It should maintain a private `count` variable.
   - It should return a function that increments the count and logs: `Action ${count}: ${actionName}`.
4. Verify it works by adding/removing items from the cart.
   - *Check your work:* The count should increment (1, 2, 3...) and persist across different clicks.

---

## Module 3: Callback Hell to Promises (Backend)
**File:** [backend/src/utils/asyncAssignment.ts](./backend/src/utils/asyncAssignment.ts)

1. Open [backend/src/index.ts](./backend/src/index.ts) and uncomment `// runLegacy();` to see the "Callback Hell" in action (console logs).
2. Go to [backend/src/utils/asyncAssignment.ts](./backend/src/utils/asyncAssignment.ts).
3. **Task:** 
   - Promisify the helper functions (`getUser`, `getOrders`, `sendEmail`).
   - Implement `runRefactored` using `async/await` to achieve the same result as `runLegacy`.
4. Uncomment `// runRefactored();` in `index.ts` to verify your solution.

---

## Module 4: Event Loop (Frontend)
**File:** [frontend/src/utils/eventLoopAssignment.ts](./frontend/src/utils/eventLoopAssignment.ts)

1. Open [frontend/src/main.tsx](./frontend/src/main.tsx) and uncomment `// runEventLoopExample();`.
2. Open [frontend/src/utils/eventLoopAssignment.ts](./frontend/src/utils/eventLoopAssignment.ts) and read the code.
3. Check the browser console to see the order of logs.
4. **Task:** Create a text file `EVENT_LOOP.txt` and explain **why** the logs appear in that specific order (Microtasks vs Macrotasks).

---

## Module 5: Debouncing (Frontend)
**File:** [frontend/src/pages/Home/Home.tsx](./frontend/src/pages/Home/Home.tsx)

1. Open [frontend/src/pages/Home/Home.tsx](./frontend/src/pages/Home/Home.tsx).
2. Locate the `debounce` function skeleton and `handleSearchChange`.
3. **Task:** Implement the custom debounce logic (using `setTimeout` and closures).
4. Use your `debounce` function to create a debounced version of `console.log` inside `handleSearchChange`.
5. **Goal:** Even though the UI updates immediately, the "Debounce Search:" log should only appear after the user stops typing for 500ms.
   - *Industry insight:* Debouncing is crucial for limiting expensive operations like API calls or heavy computations during high-frequency events.

---

## Module 6: DOM Manipulation (Frontend)
**File:** [frontend/src/utils/domAssignment.ts](./frontend/src/utils/domAssignment.ts)

1. Open [frontend/src/main.tsx](./frontend/src/main.tsx) and uncomment `// showBanner("Welcome to Buyzo!");`.
2. Open [frontend/src/utils/domAssignment.ts](./frontend/src/utils/domAssignment.ts).
3. **Task:** Implement `showBanner` using **only native DOM APIs** (no React).
   - Create a fixed red banner at the top of the screen.
   - Add a close functionality (remove element on click).

---

## Module 7: Array Methods (Backend)
**File:** [backend/src/utils/arrayAssignment.ts](./backend/src/utils/arrayAssignment.ts)

1. Open [backend/src/index.ts](./backend/src/index.ts) and uncomment `// runArrayAnalysis();`.
2. Go to [backend/src/utils/arrayAssignment.ts](./backend/src/utils/arrayAssignment.ts).
3. **Task:** Implement `analyzeProducts`:
   - It receives the full `products` array.
   - **Filter** for products in the "Electronics" category.
   - **Sort** them by price in descending order.
   - **Map** to return only the names of the top 3 most expensive products.
4. Verify the output in your terminal matches the expected result.

---

All the best!!
