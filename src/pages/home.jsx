import "./home.css";
import ProductList from "../components/productList";
import About from "./about";
import Footer from "../components/footer";

function Home({ onAddToCart }) {
    return (
        <>
            <section className="hero">
                <div className="hero-content" id="home">
                    <p>NEW COLLECTION 2026</p>

                    <h1>
                        Discover Your
                        <br />
                        Own Style.
                    </h1>

                    <p>
                        Explore our latest fashion collection and find the perfect
                        style for you
                    </p>

                    <button>Shop Now</button>
                </div>

                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1523398002811-999ca8dec234"
                        alt="Streetwear Collection"
                    />
                </div>
            </section>

            <ProductList onAddToCart={onAddToCart} /> 
            <About />
            <Footer />
        </>

    )
}

export default Home;