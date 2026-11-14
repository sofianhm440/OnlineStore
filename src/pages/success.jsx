import "./success.css";

function OrderSuccess({ onContinueShopping }) {
    return (
        <div className="success">
            <h1>Order Place Successfully!</h1>
            <p>Thank you for shopping at my store.</p>
            <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
    )
}

export default OrderSuccess;