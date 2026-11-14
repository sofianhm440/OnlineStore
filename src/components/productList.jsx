import Products from "../data/product";
import ProductCard from "./productCard";
import "./productList.css";

function ProductList({ onAddToCart }) {
    return (
        <section className="product-section" id="shop">
            <h2>Our Products</h2>

            <div className="product-list">
                {Products.map((product) => (
                    <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductList;