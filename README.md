# React Custom useFetch Hook

A React project demonstrating a reusable `useFetch` custom hook for fetching API data while handling loading and error states.

## 🚀 Live Demo

https://react-hooks-asgn.netlify.app/

## 📌 Project Overview

The project uses a custom `useFetch` hook to simplify API data fetching.

The hook accepts a URL and returns:

- `data` — fetched API data
- `loading` — indicates whether the request is in progress
- `error` — stores any error that occurs

The fetched products are displayed using a simple responsive UI.

## ✨ Features

- Reusable `useFetch` custom hook
- API data fetching using `fetch`
- Loading state handling
- Error state handling
- Responsive product cards
- Image fallback handling

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- CSS
- Fetch API

## 🌐 API Used

```text
https://api.escuelajs.co/api/v1/products
```

## 📁 Project Structure

```text
src/
├── components/
│   └── ProductList.jsx
│
├── hooks/
│   └── useFetch.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## ⚙️ How to Run

Clone the repository:

```bash
git clone https://github.com/arpitsingh39/react-custom-hook
```

Navigate to the project:

```bash
cd react-custom-hook
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## 🏗️ Production Build

```bash
npm run build
```

## 🌍 Netlify Deployment

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

Live URL:

https://react-hooks-asgn.netlify.app/

## 🧠 Implementation Overview

The `useFetch` hook uses:

- `useState` to manage `data`, `loading`, and `error`
- `useEffect` to trigger the API request
- `useCallback` to memoize the fetch function

The API logic is separated from the UI so that the same hook can be reused with different API endpoints.

## 👨‍💻 Author

**Arpit Singh**
