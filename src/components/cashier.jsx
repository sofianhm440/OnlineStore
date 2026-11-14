import { useState } from "react";

import "./cashier.css"

function Cashier({ cart, onClose, onRemoveItem, onIncrease, onDecrease, cartCount, onCheckout }) {
    const totalPrice = cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0)

    const [isCheckout, setIsCheckout] = useState(false)
    return (
        <div className="cashier">
            <div className="cashier-content">

                <div className="cashier-header">
                    <h2>Your Bag</h2>
                    <button onClick={onClose}>Close</button>
                </div>
                <p className="cart-list">Jumlah produk: {cart.length} </p>

                <div className="cart-list">
                    {cart.map((product, index) => (
                        <div className="cart-item" key={`${product.id}-${index}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="cart-item-image"
                            />

                            <div className="cart-item-info">
                                <h3>{product.name}</h3>
                                <p>{product.category}</p>
                                <h4>Rp {product.price.toLocaleString("id-ID")}</h4>
                            </div>

                            <div>
                                <div className="quantity">
                                    <button onClick={() => onDecrease(index)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => onIncrease(index)}>+</button>
                                </div>
                                <button className="remove-btn" onClick={() => onRemoveItem(index)}>Remove</button>
                            </div>



                        </div>
                    ))}
                </div>

                <div className="cart-total">
                    <h3>Subtotal</h3>
                    <h3>Rp {totalPrice.toLocaleString("id-ID")}</h3>
                </div>

                <button className="button-checkout" onClick={onCheckout}>Checkout</button>

                {isCheckout && (
                    <div className="checkout-summary">
                        <h3>Order Summary</h3>
                        <p>Total Items: {cartCount}</p>
                        <h4>Total: Rp {totalPrice.toLocaleString("id-ID")}</h4>
                        <button onClick={() => setIsCheckout(false)}>Back to Cart</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cashier;