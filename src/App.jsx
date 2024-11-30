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
  const [cartItems, setCartItems] = useState([]); 

  
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (savedUsers) {
      setUsers(savedUsers);
    }
    setCartItems(savedCart);
  }, []);


  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };


  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); 
      return updatedItems;
    });
  };


  const userLoggedIn = currentUser !== null; 

  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
        <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />} />
        <Route path="/" element={<Principal currentUser={currentUser} />} />
        <Route path="/universitylist" element={<UniversityList currentUser={currentUser} />} />
        <Route path="/universidadpanamericana" element={<UniversidadP currentUser={currentUser} />} />
        
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





