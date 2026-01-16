# TypeScript Intern Assignment [OPTIONAL] - Buyzo E-commerce

Welcome to the Buyzo TypeScript assignment! This assignment is designed to test your understanding of TypeScript fundamentals and your ability to work with a real-world codebase.

**Duration:** 3-4 hours
**Prerequisites:** Basic JavaScript knowledge, familiarity with Node.js and React concepts

---

## Part 1: TypeScript Fundamentals (Theory)

### Question 1.1: Type Inference
Look at the following code snippet and answer the questions below:

```typescript
const price = 99.99;
let productName = "Wireless Headphones";
const categories = ["Electronics", "Clothing", "Books"];
```

a) What type does TypeScript infer for `price`?
b) What type does TypeScript infer for `productName`?
c) What type does TypeScript infer for `categories`?
d) If we change `const categories` to `const categories as const`, what would the type become?

---

### Question 1.2: Interfaces vs Types
Explain the difference between `interface` and `type` in TypeScript. When would you prefer one over the other?

Look at `backend/src/data/products.ts:1-8` for reference:

```typescript
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
```

a) Rewrite this `interface` as a `type` alias.
b) Can you extend an interface? Show an example by creating a `DiscountedProduct` interface that extends `Product`.
c) Can you extend a type? Show the equivalent for types.

---

### Question 1.3: Union and Intersection Types
Given the existing `Product` interface, create the following types:

a) A union type called `ProductCategory` that only allows: `"Electronics" | "Clothing" | "Home & Garden" | "Books" | "Sports"`

b) An intersection type called `ProductWithStock` that combines `Product` with stock information:
```typescript
{ inStock: boolean; quantity: number }
```

c) What is the difference between union (`|`) and intersection (`&`) types?

---

### Question 1.4: Generics
Look at the following API response pattern:

```typescript
// Current implementation in backend returns data directly
res.json(products);
res.json({ message: 'Order placed successfully', orderId: orders.length });
```

a) Create a generic `ApiResponse<T>` type that wraps any data with success status:
```typescript
{
  success: boolean;
  data: T;
  error?: string;
}
```

b) What would `ApiResponse<Product[]>` resolve to?

c) Create a generic function `wrapResponse<T>(data: T): ApiResponse<T>` that wraps any data in the ApiResponse format.

---

## Part 2: Working with the Codebase (Practical)

### Question 2.1: Fix Type Issues
Look at `frontend/src/context/CartContext.tsx:26`:

```typescript
const addToCart = (product: any) => {
```

a) Why is using `any` considered bad practice in TypeScript?
b) Replace `any` with a proper type. What type should `product` be?
c) Create a new type `AddToCartProduct` with only the necessary fields for adding to cart (hint: look at what fields are used in the function).

---

### Question 2.2: Create Type Guards
The backend stores orders without proper typing (`backend/src/index.ts:12`):

```typescript
const orders: any[] = [];
```

a) Create an `Order` interface based on how orders are created (lines 49-64):
```typescript
interface Order {
  // Define the properties here
}
```

b) Create a type guard function `isValidOrder(obj: unknown): obj is Order` that checks if an object has all required Order properties.

c) Why are type guards useful? Give an example scenario.

---

### Question 2.3: Utility Types
Using TypeScript's built-in utility types, create the following:

a) A type `ProductPreview` that only includes `id`, `name`, `price`, and `image` from `Product` (use `Pick`)

b) A type `ProductWithoutDescription` that includes everything except `description` (use `Omit`)

c) A type `PartialProduct` where all fields are optional (use `Partial`)

d) A type `RequiredProduct` where all fields are required, even if they were optional (use `Required`)

e) When would you use `Readonly<Product>`?

---

## Part 3: Backend Development (Coding)

### Question 3.1: Add Input Validation Types
The order creation endpoint (`backend/src/index.ts:49`) accepts any data without validation.

Create a file `backend/src/types/order.ts` with:

a) An interface `CreateOrderInput` that defines what the client should send:
```typescript
interface CreateOrderInput {
  items: OrderItem[];
  customer: CustomerInfo;
  shippingAddress: Address;
}
```

b) Define the `OrderItem`, `CustomerInfo`, and `Address` interfaces appropriately.

c) Create a type `OrderStatus` as a union of valid statuses: `"Processing" | "Shipped" | "Delivered" | "Cancelled"`

---

### Question 3.2: Implement a New Endpoint
Add a new endpoint `GET /api/products/category/:category` that:

a) Returns all products for a given category
b) Returns a proper typed response
c) Returns 404 with a typed error response if category doesn't exist

Write the complete implementation with proper TypeScript types.

---

### Question 3.3: Create a Validation Middleware
Create a middleware function in `backend/src/middleware/validate.ts`:

```typescript
import { Request, Response, NextFunction } from 'express';

// Implement this function
function validateOrder(req: Request, res: Response, next: NextFunction) {
  // Validate that req.body matches CreateOrderInput
  // Return 400 with error message if validation fails
  // Call next() if validation passes
}
```

---

## Part 4: Frontend Development (Coding)

### Question 4.1: Improve Context Types
The `AuthContext` (`frontend/src/context/AuthContext.tsx`) is very basic.

Enhance it with proper types:

a) Create a `User` interface:
```typescript
interface User {
  id: string;
  email: string;
  name: string;
}
```

b) Update `AuthContextType` to include the user object and loading state:
```typescript
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}
```

c) Implement the updated context with proper typing.

---

### Question 4.2: Create a Custom Hook with Types
Create a custom hook `useProducts` in `frontend/src/hooks/useProducts.ts`:

```typescript
interface UseProductsOptions {
  category?: string;
  searchQuery?: string;
}

interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

function useProducts(options?: UseProductsOptions): UseProductsReturn {
  // Implement the hook
}
```

The hook should:
- Fetch products from the API
- Support filtering by category and search
- Handle loading and error states
- Return a refetch function

---

### Question 4.3: Component Props Types
Create a reusable `ProductCard` component with proper TypeScript props:

a) Define the props interface:
```typescript
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  showDescription?: boolean;
  className?: string;
}
```

b) Implement the component with proper prop destructuring and default values.

c) What is the difference between `showDescription?: boolean` and `showDescription: boolean | undefined`?

---

## Part 5: Advanced Concepts

### Question 5.1: Mapped Types
Create a mapped type that makes all properties of an object nullable:

```typescript
type Nullable<T> = {
  // Your implementation
}

// Usage:
type NullableProduct = Nullable<Product>;
// Should allow: { id: number | null, name: string | null, ... }
```

---

### Question 5.2: Conditional Types
Create a conditional type that extracts the return type if a type is a function, otherwise returns the type itself:

```typescript
type UnwrapFunction<T> = // Your implementation

// Examples:
type A = UnwrapFunction<() => string>; // string
type B = UnwrapFunction<(x: number) => Product>; // Product
type C = UnwrapFunction<string>; // string
```

---

### Question 5.3: Template Literal Types
Create a type for API endpoints using template literal types:

```typescript
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiVersion = 'v1' | 'v2';
type Resource = 'products' | 'orders' | 'users';

// Create a type that generates all possible endpoint strings
// e.g., "GET /api/v1/products", "POST /api/v2/orders", etc.
type ApiEndpoint = // Your implementation
```

---

## Part 6: Debugging & Problem Solving

### Question 6.1: Fix the Type Errors
The following code has type errors. Identify and fix them:

```typescript
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, "0"); // Error here
}

function addItem(cart: CartItem[], newItem: CartItem): void {
  const existing = cart.find(item => item.id === newItem.id);
  if (existing) {
    existing.quantity += newItem.quantity;
  } else {
    cart = [...cart, newItem]; // Error here - explain why this doesn't work
  }
}
```

---

### Question 6.2: Strict Mode Issues
With `strict: true` in tsconfig.json, explain what errors would occur and how to fix them:

```typescript
function getProductName(product: Product | undefined) {
  return product.name; // What's wrong?
}

function processItems(items: string[]) {
  const first = items[0];
  console.log(first.toUpperCase()); // What's wrong?
}
```

---

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- Project Files:
  - `backend/src/index.ts` - Backend API implementation
  - `backend/src/data/products.ts` - Product data and types
  - `frontend/src/context/` - React context implementations

Good luck!
