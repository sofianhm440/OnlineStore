import "./productCard.css";

function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />

            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <h4>Rp {product.price.toLocaleString("id-ID")}</h4>
                <button onClick={() => onAddToCart(product)} >Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;