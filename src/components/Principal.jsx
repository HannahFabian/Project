import React from 'react';
import './principal.css';

function Principal(){
  return (
    <div className="bodyarrange">
      <div className="titleMain">
        <h1><b> University Searching Fair </b></h1>
        <hr/>

      </div>

      <div className="containerElCubo">
          <div className="elTexto">
          <h2> <b>Objective</b></h2>
          <p>
              Our objetive is to help anyone who are interested in continuing their studies to get to know different programmes
              around a diverse list of universities around the area. 
              We want to help students have a more comfortable approach to their university life and still have fun getting to know their dream career 
              as well as extending their horizons.
          </p>
          <p> As the creators of this WebTool come from Univesidad Panamaricana, we decided to show all of you what our University has to offer :D.
              Also, you can click on the images to learn more about the ONU objetive!
          </p>
          </div>
      </div>

        <a href="https://www.un.org/sustainabledevelopment/education/" target="_blank">
        <img src="/img/ONU4.PNG" alt="ONU goal" className="goal"/>
        <img src="https://ec.europa.eu/eurostat/documents/4187653/14185661/09-SDGS-EDUCATION.png/1fcc6baa-388b-0db2-df96-995588f3766f?t=1661525377601" alt="Info" id="info" />
        </a>
</div>
  );
}

export default Principal;
