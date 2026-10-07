import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">React Assignment</p>

          <h1>
            Custom <span>useFetch</span> Hook
          </h1>

          <p className="hero-description">
            A reusable React custom hook for handling API requests,
            loading states, and errors.
          </p>
        </div>
      </header>

      <main>
        <ProductList />
      </main>

      <footer>
        <p>
          Built with React, Vite & Custom Hooks
        </p>
      </footer>
    </div>
  );
}

export default App;