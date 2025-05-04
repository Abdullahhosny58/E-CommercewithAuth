
# Frontend Challenge – Minimal E-commerce Platform

A minimal e-commerce platform built with **Next.js**, **React**, and **TypeScript**. It includes user authentication (login and registration) and a fully responsive dashboard. The application features a clean UI, efficient state management, and a well-structured component architecture, ensuring scalability and maintainability for future enhancements.

## 🛠 Running Instructions

### 🔧 Install dependencies:
```bash
npm install
```

### ▶️ Start development server:
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### 📡 Run JSON server (for fake API):
```bash
json-server --watch db.json --port 5000
```
Available at [http://localhost:5000](http://localhost:5000).

### 🧪 Run tests:
```bash
npm run test
```

## 📁 Project Structure
<details> <summary>Click to view</summary>

```
├─ .eslintrc.json
├─ context
│  └─ ProvidersContext.tsx
├─ next.config.mjs
├─ package.json
├─ prisma
│  ├─ .env
│  └─ schema.prisma
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ auth, register
│  │  ├─ SignIn, SignUp, categories
│  │  ├─ layout.tsx, page.tsx
│  ├─ components
│  │  ├─ Layout, Inputs, FlashSales, HeaderNavbar
│  ├─ hooks, lib, providers, shared, theme
│  ├─ query, rtk, services
├─ public/images
└─ tsconfig.json
```

</details>

## 📦 Tech Stack & Libraries
- **Next.js** – React Framework with SSR
- **TypeScript** – Static typing for JavaScript
- **React Query** – Data fetching and caching
- **Redux Toolkit** – Global state management
- **Axios** – API communication
- **Ant Design** – UI component library
- **SASS (SCSS)** – CSS preprocessor for styling
- **Vitest** – Unit testing framework

## 🎨 Code Quality
- **ESLint** – Linting for consistent code quality
- **Prettier** – Automatic code formatting

## 🚀 Future Improvements
- ✅ Make it fully responsive across all devices
- ✅ Add GitHub Actions for CI/CD deployment
- ✅ Improve test coverage with unit and integration tests
