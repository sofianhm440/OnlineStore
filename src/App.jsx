import { useState } from "react";

import Checkout from "./pages/checkout";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Cashier from "./components/cashier";
import OrderSuccess from "./pages/success";

function App() {
  // menyimpan daftar produk, mengubah isi keranjang
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) => item.id === product.id
          ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    })
  }

  function removeCart(index) {
    if (window.confirm("Are you sure want to remove this product?")) {
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    }
  }

  function inCrease(index) {
    setCart((prevCart) => prevCart.map((item, i) => i === index
      ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }

  function deCrease(index) {
    setCart((prevCart) => prevCart.map((item, i) => i === index && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 } : item
    ));
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

      {isSuccessOpen ? (
        <OrderSuccess
          onContinueShopping={() => {
            setIsSuccessOpen(false);
            setCart([]);
          }}
        />
      ) : isCheckoutOpen ? (
        <Checkout
          cartCount={totalItems}
          backHome={() => setIsCheckoutOpen(false)}
          cart={cart}
          onPlaceOrder={() => {
            setIsCheckoutOpen(false);
            setIsSuccessOpen(true);
          }}
        />
      ) : (
        <Home onAddToCart={addToCart} />
      )}

      {isCartOpen && (
        <Cashier
          onIncrease={inCrease}
          onDecrease={deCrease}
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeCart}
          onCheckout={() => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }}
        />
      )}
    </>
  )
}

export default App;