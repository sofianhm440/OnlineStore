import "./checkout.css"

function Checkout({ cart, onPlaceOrder, backHome, cartCount }) {
    const totalPrice = cart.reduce(
        (total, product) => total + product.price * product.quantity, 0)

    function placeOrder() {
        if (cart.length === 0) {
            alert("Your cart is empty!")
            return false;
        }
        alert("Your order has been placed!")
        return true;
    }

    return (
        <div className="checkout">
            <button className="back-btn" onClick={backHome}>Back Home</button>
            <h1>Checkout</h1>

            <div className="contents">
                <div className="products">
                    <h2>Your Items</h2>

                    {cart.map((product) => (
                        <div key={product.id} className="items">
                            <h3>{product.name}</h3>
                            <p>Quantity: {product.quantity}</p>
                            <p>Price: Rp {product.price.toLocaleString("id-ID")}</p>
                        </div>
                    ))}
                </div>


                <div className="orders">
                    <h2>Order Summary</h2>
                    <p className="p1">Total Items: {cartCount}</p>
                    <p className="p2">Subtotal: Rp {totalPrice.toLocaleString("id-ID")}</p>
                    <h3 className="total">
                        Total: Rp {totalPrice.toLocaleString("id-ID")}
                    </h3>
                    <button
                        onClick={() => {
                            if (placeOrder()) {
                                onPlaceOrder();
                            }
                        }}
                        className="order-btn">Payment</button>
                </div>
            </div>
        </div >
    )
}

export default Checkout