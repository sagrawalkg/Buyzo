# Buyzo - E-commerce Starter Boilerplate (Learning Edition)

Welcome to **Buyzo**! This is a starter project designed for learning modern full-stack development. It contains intentional "gaps" and unoptimized code to serve as a base for future lessons on performance, validation, and advanced state management.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

1. **Clone the repository** (or copy these files).
2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The backend will run on `http://localhost:5001`.

3. **Setup Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

## 🛠 Tech Stack
- **Frontend**: React (Vite), TypeScript, Plain CSS (CSS Modules).
- **Backend**: Node.js, Express, TypeScript.
- **State Management**: React Context API.

## 📂 Folder Structure
```
buyzo/
├── frontend/             # React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── context/      # State management (Auth, Cart)
│   │   ├── pages/        # Page components (Home, Product, etc.)
│   │   └── styles/       # Global and component styles
├── backend/              # Express API
│   ├── src/
│   │   ├── data/         # Mock database (JSON/Array)
│   │   └── index.ts      # Server entry point
└── README.md
```

## TODOS
- Verify existing APIs using Postman / curl
- Explore about Stream chaining with pipe()
- Copy a file using createReadStream().pipe(createWriteStream()) and print progress percentage using file size
- Build a simple logger that:, Writes log messages to a file, Adds a timestamp to each log, Emits an event whenever a log is written

Expected Usage:
const Logger = require("./logger");

const logger = new Logger();

logger.on("log", () => {
  console.log("Log written successfully");
});

logger.log("Server started");
logger.log("User logged in");


### Day 2 Assignment
- 
- Products API Improvements

 Add pagination support to GET /api/products
 Accept query params:
page
limit

 Apply pagination after search and category filtering
 Return response in the format:

{
  "data": [],
  "page": 1,
  "limit": 20,
  "totalItems": 1000,
  "totalPages": 50
}
 Provide default values for pagination params
 Handle invalid query params gracefully

- User & Auth Setup

 Create in-memory users store
 Add POST /api/auth/register
 Hash passwords using bcrypt
 Add POST /api/auth/login
 Generate JWT on successful login
 Store JWT secret in .env

Auth Middleware

 Create JWT authentication middleware
 Extract user from token
 Return 401 for invalid or missing token

Route Protection

 Protect POST /api/orders
 Protect POST /api/payments

- Order Status Management

 Add status field to orders:

PROCESSING
PAID
SHIPPED
DELIVERED
 Set default status on order creation
 Add endpoint:

PATCH /api/orders/:id/status

 Validate allowed status transitions
 Prevent invalid status updates
- implement a backend payment service (POST /api/payments)
Request Body: {
  "orderId": number,
  "amount": number,
  "paymentMethod": "CARD"
}

When a user places an order, they must complete a payment.
A successful payment requires the following steps to be executed in order:

Validate the payment request
Charge the payment provider
Update the order status to Paid
Each step is asynchronous and may fail.

Functional Requirements
1️⃣ Validate Payment

Check if the order exists
Ensure the order is not already paid
Ensure the amount is greater than 0
Reject invalid requests

2️⃣ Charge Payment Provider

Simulate an external payment gateway
Introduce a delay (e.g. using setTimeout)
Return a mock transactionId

3️⃣ Update Order Status

Update the order status from Processing → Paid
Persist the change in memory
Error Handling Requirements

Your API must handle the following cases:

Invalid or missing request fields
Order not found
Order already paid
Payment gateway failure

All errors should:
Return appropriate HTTP status codes
Include a clear error message

- Use Logger (created in assignment 1) to log all api requests with their timestamps
-  Refactor backend into:

src/
├── routes/
├── controllers/
├── services/
├── middleware/
├── data/

Happy coding! 🚀
