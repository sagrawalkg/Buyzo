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


# Day 2 Assignment – Backend Enhancements

This assignment focuses on improving an existing backend application by adding pagination, authentication, authorization, order lifecycle management, and a simulated payment service. It also requires refactoring the project into a clean, modular structure.

---

## 🗂️ Project Structure

Refactor your backend into the following structure:

```
src/
├── routes/
├── controllers/
├── services/
├── middleware/
├── data/
├── app.js
├── server.js
```

---

## 🛒 Products API Improvements

### Endpoint
```
GET /api/products
```

### Query Parameters

| Param | Type   | Description           | Default |
|------|--------|-----------------------|---------|
| page | number | Page number (1-based) | 1       |
| limit| number | Items per page        | 20      |

### Response Format

```json
{
  "data": [],
  "page": 1,
  "limit": 20,
  "totalItems": 1000,
  "totalPages": 50
}
```

---

## 👤 User & Authentication Setup

### Register
```
POST /api/auth/register
```

### Login
```
POST /api/auth/login
```

- Passwords must be hashed using bcrypt
- JWT must be generated on successful login
- JWT secret must be stored in `.env`

---

## 🔐 Authentication Middleware

- Verify JWT
- Attach user to request
- Return 401 for invalid or missing token

---

## 🔒 Protected Routes

- POST /api/orders
- POST /api/payments

---

## 📦 Order Status Management

Statuses:
- PROCESSING (default)
- PAID
- SHIPPED
- DELIVERED

```
PATCH /api/orders/:id/status
```

---

## 💳 Payment Service

```
POST /api/payments
```

```json
{
  "orderId": 1,
  "amount": 500,
  "paymentMethod": "CARD"
}
```

Payment flow:
1. Validate payment
2. Charge provider (simulated async)
3. Update order status to PAID

---

## ❌ Error Handling

- Invalid requests
- Order not found
- Order already paid
- Payment gateway failure

Return proper HTTP status codes and error messages.

---

## 📋 Logging

Log all API requests with method, route, and timestamp using the Logger created earlier.

---

Happy coding! 🚀
