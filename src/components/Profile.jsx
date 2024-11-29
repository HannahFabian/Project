import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import './Profile.css';

function Profile({ currentUser, setCurrentUser, cartItems, setCartItems, removeFromCart }) {
  const navigate = useNavigate();

  // Función para remover un artículo del carrito
  const handleRemoveFromCart = (index) => {
    removeFromCart(index); // Llama a la función pasada por props
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Profile</h2>
        {currentUser ? (
          <>
            <p>Welcome, {currentUser.username}!</p>
            <h3>Your Shopping Cart</h3>
            {cartItems.length > 0 ? (
              <ul className="cart-list">
                {cartItems.map((item, index) => (
                  <li className="cart-item" key={index}>
                    <span>{item}</span>
                    {/* Botón de remover */}
                    <button className="cart-button" onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-cart-message">Your cart is empty.</p>
            )}
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;


