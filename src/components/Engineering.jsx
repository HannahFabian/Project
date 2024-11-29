import React, { useState } from 'react';
import './careers.css';

function Engineering({ addToCart, userLoggedIn }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAddToCart = (item) => {
    if (!userLoggedIn) {
      setErrorMessage("You must be logged in to add items to the cart.");  
      return;  
    }
    addToCart(item);  
    setErrorMessage("");
  };

  return (
    <div>
      <div className="card-container-career">
        <h2 className="card-title-career"><u> Engineering </u></h2>
        <div className="card-content-career">
          <p>" In the middle of difficulty lies opportunity. "</p>
          <p> - Albert Einstein </p>
        </div>
      </div>

      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(0)} 
          >
           Civil Engineering 
          </button>
          <div className={`accordion-content ${activeIndex === 0 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/CivilE.webp" alt="Civil engineering" className="accordion-image" />
              <div className="accordion-info">
                <p>Civil engineering, the profession of designing and executing structural works that serve the general public, such as: dams, bridges, 
                            aqueducts, canals, highways, power plants, sewerage systems, and other infrastructure.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Civil Engineering")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(1)} 
          >
            Industrial Engineering
          </button>
          <div className={`accordion-content ${activeIndex === 1 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/accountancyA.webp" alt="Industrial Engineering" className="accordion-image" />
              <div className="accordion-info">
              <p>Industrial engineering: application of engineering principles and techniques of scientific management to 
                            the maintenance of a high level of productivity at optimum cost in industrial enterprises.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart("Industrial Engineering")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(2)} 
          >
            Mechanical Engineering
          </button>
          <div className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/mecatronicsE.jpg" alt="MechanicalEngineering" className="accordion-image" />
              <div className="accordion-info">
                <p>Mechanical engineering: the branch of engineering concerned with the design, manufacture, installation, and operation of engines 
                        and machines and with manufacturing processes. It is particularly concerned with forces and motion.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Mechanical Engineering")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(3)} 
          >
           Innovation and Design Engineering
          </button>
          <div className={`accordion-content ${activeIndex === 3 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/innovationE.jpg" alt="InnovationDesign" className="accordion-image" />
              <div className="accordion-info">
                <p>Mechanical engineering: the branch of engineering concerned with the design, manufacture, installation, and operation of engines 
                            and machines and with manufacturing processes. It is particularly concerned with forces and motion.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Innovation and Design")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 4 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(4)}
          >
            Robotics Engineering
          </button>
          <div className={`accordion-content ${activeIndex === 4 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/roboticsE.webp" alt="Robotics" className="accordion-image" />
              <div className="accordion-info">
              <p>Robotics: design, construction, and use of machines (robots) to perform tasks done traditionally by human beings.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Robotics Engineering")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Engineering;
