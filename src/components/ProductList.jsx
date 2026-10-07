import useFetch from "../hooks/useFetch";

const API_URL = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const { data, loading, error } = useFetch(API_URL);

  if (loading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="products-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Custom Hook Demo</p>
          <h2>Products</h2>
        </div>

        <span className="product-count">
          {data?.length || 0} Products
        </span>
      </div>

      <div className="product-grid">
        {data?.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="image-container">
              <img
                src={product.images?.[0]}
                alt={product.title}
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x400?text=No+Image";
                }}
              />
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>

              <p className="category">
                {product.category?.name || "Uncategorized"}
              </p>

              <div className="product-footer">
                <span className="price">${product.price}</span>

                <button>View Product</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductList;