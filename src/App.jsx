import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Principal from './components/Principal';
import AppNavbar from './components/Navbar';
import Profile from './components/Profile';
import Administrative from './components/Administrative';
import UniversityList from "./components/UniversityList";
import Engineering from './components/Engineering';
import Humanities from './components/Humanities';
import Medicine from './components/Medicine';
import Other from './components/Other';
import UniversidadP from "./components/UniversidadP";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]); // Estado del carrito

  // Recuperar usuarios y carrito de localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (savedUsers) {
      setUsers(savedUsers);
    }
    setCartItems(savedCart); // Cargar los productos del carrito desde localStorage
  }, []);

  // Función para agregar productos al carrito
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Guardar en localStorage
      return updatedItems;
    });
  };

  // Función para remover productos del carrito
  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Guardar en localStorage
      return updatedItems;
    });
  };

  // Determine if the user is logged in
  const userLoggedIn = currentUser !== null; // If currentUser is not null, user is logged in

  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
        <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />} />
        <Route path="/" element={<Principal currentUser={currentUser} />} />
        <Route path="/universitylist" element={<UniversityList currentUser={currentUser} />} />
        <Route path="/universidadpanamericana" element={<UniversidadP currentUser={currentUser} />} />
        
        {/* Pasa addToCart como prop a Administrative, junto con userLoggedIn */}
        <Route path="/careers/administrative" element={<Administrative addToCart={addToCart} userLoggedIn={userLoggedIn} />} />
        <Route path="/careers/engineering" element={<Engineering addToCart={addToCart} userLoggedIn={userLoggedIn}/>} />
        <Route path="/careers/humanities" element={<Humanities addToCart={addToCart} userLoggedIn={userLoggedIn}/>} />
        <Route path="/careers/medicine" element={<Medicine addToCart={addToCart} userLoggedIn={userLoggedIn}/>} />
        <Route path="/careers/other" element={<Other addToCart={addToCart} userLoggedIn={userLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;





