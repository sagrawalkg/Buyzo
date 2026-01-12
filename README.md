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

## 🎓 Intentional "Gaps" for Learning

### 📝 JavaScript Internship Assignment
We have a dedicated module for JavaScript core concepts (Hoisting, Closures, Event Loop, etc.).
👉 **[Open Assignment Instructions](./JAVASCRIPT_ASSIGNMENT.md)**

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

Happy coding! 🚀
