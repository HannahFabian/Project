import React, { useState } from 'react';
import './UniversidadP.css';

function UniversidadP() {
    const [currentIndexEngineering, setCurrentIndexEngineering] = useState(0);
    const [currentIndexHumanities, setCurrentIndexHumanities] = useState(0);
    const [currentIndexAdministrative, setCurrentIndexAdministrative] = useState(0);
    const [currentIndexMedicine, setCurrentIndexMedicine] = useState(0);


  const boxes = [
    {
      image: "../img/CivilE.webp",
      title: "Civil Engineering",
      description: "Civil engineering is the branch of engineering that designs, builds, and maintains the infrastructure of modern society. From roads, bridges, and dams to buildings and water systems, civil engineers ensure the safety, functionality, and sustainability of these essential structures. It combines technical expertise with creativity to shape the environment in which we live.",
      quote1: "I love knowing that my projects will have a lasting impact on communities.",
      quote2: "The structural analysis classes are tough, but seeing my designs come to life is worth it.",
      link: "https://movil.up.edu.mx/gdl/ingenieria-civil-y-administracion"
    },
    {
      image: "../img/industrialE.jpg",
      title: "Industrial Engineering",
      description: "Industrial engineering focuses on the optimization of complex systems and processes. This field bridges engineering and management, aiming to enhance productivity, reduce waste, and improve quality. Industrial engineers work in various sectors, including manufacturing, healthcare, logistics, and service industries, using innovative solutions to solve real-world challenges.",
      quote1: "I enjoy solving real-world problems and seeing how my ideas boost productivity.",
      quote2: "It's great to learn both technical and management skills in one program!",
      link: "https://movil.up.edu.mx/gdl/ingenieria-industrial-e-innovacion-de-negocios"
    },
    {
        image: "../img/mecatronicsE.jpg",
        title: "Mechatronics Engineering",
        description: "Mechatronics engineering integrates principles of mechanical, electrical, and computer systems to develop innovative technologies and automation solutions. It is at the forefront of fields like robotics, intelligent systems, and advanced manufacturing. Students gain skills in hardware design, control systems, and programming, preparing them to tackle multifaceted engineering challenges.",
        quote1: "The mix of robotics and programming keeps every semester exciting.",
        quote2: "I love working on projects that combine hardware and software to solve problems.",
        link: "https://movil.up.edu.mx/gdl/ingenieria-mecatronica"
    },
    {
        image: "../img/innovationE.jpg",
        title: " Innovation and Design ",
        description: "Innovation and design engineering combines engineering principles with creativity and business strategies to develop groundbreaking products and solutions. It emphasizes human-centered design, sustainability, and problem-solving. Graduates are equipped to lead innovation in various industries, from product development to system design.",
        quote1: "Brainstorming unique ideas and turning them into prototypes is so rewarding.",
        quote2: "This program inspires me to think outside the box every day.",
        link: "https://movil.up.edu.mx/gdl/ingenieria-en-innovacion-y-diseno"
    },
    {
        image: "../img/roboticsE.webp",
        title: " Robotics Engineering ",
        description: "Robotics engineering specializes in the design, creation, and programming of robots and intelligent machines. This career encompasses various fields, including artificial intelligence, control systems, and mechanical design. Robotics engineers play a crucial role in advancing automation, improving efficiency, and developing cutting-edge technologies for industries ranging from manufacturing to healthcare.",
        quote1: "Seeing a robot I built actually move is the best feeling!",
        quote2: "The future is robotic, and I'm thrilled to be part of it.",
        link: "https://mkt.up.edu.mx/ingenieria-mecanica"
    },
    {
        image: "../img/architectureO.jpg",
        title: "Architecture",
        description: " Architecture is a multidisciplinary field that combines art, science, and technology to design spaces where people live, work, and interact. Architects create structures that are functional, sustainable, and aesthetically pleasing, addressing environmental, social, and cultural considerations. It’s a field where creativity meets technical expertise to shape the physical world.",
        quote1: "Late nights are worth it when you see your designs come to life in models.",
        quote2: "Balancing creativity with functionality is such an exciting challenge.",
        link: "https://movil.up.edu.mx/gdl/licenciatura-en-arquitectura"
    }
    // Agrega los demás objetos para las otras cajas
  ];

  const boxesH =[
    {
        image: "../img/musicalS.png",
        title: "Musical Studies",
        description: "Musical studies offer an in-depth exploration of performance, composition, music theory, and history. This field nurtures creativity and technical proficiency, preparing students for careers in music education, performance, production, or composition. Students develop their unique artistic voice while mastering their chosen instrument or musical discipline.",
        quote1: "Every rehearsal feels like a step closer to mastering my craft.",
        quote2: "I love how music lets me express emotions words can't describe.",
        link: "https://eba.up.edu.mx/"

    },
    {
        image: "../img/comunicationH.png",
        title: "Communication Studies",
        description: " Communication studies examine how people create, deliver, and interpret messages across various media and social contexts. This field prepares students for careers in public relations, media production, corporate communication, and more. It focuses on understanding human interaction and leveraging technology to inform, persuade, and connect.",
        quote1: "Learning how media influences society is fascinating.",
        quote2: "The practical projects make it easy to connect theory to the real world.",
        link: "https://movil.up.edu.mx/gdl/licenciatura-en-comunicacion-opinion-publica"

    },
    {
        image: "../img/journalingH.webp",
        title: "Journaling",
        description: "Journaling focuses on the art and practice of storytelling, reporting, and documenting events. It equips students with skills in writing, interviewing, and fact-checking, preparing them for careers in journalism and media. Emphasis is placed on ethics, critical thinking, and adapting to the evolving digital landscape.",
        quote1: "Interviewing people and sharing their stories feels so meaningful.",
        quote2: "Every day is different when you're covering the latest news.",
        link: "https://movil.up.edu.mx/gdl/periodismo"

    },
    {
        image: "../img/audiovisualH.jpg",
        title: "Audiovisual",
        description: "Audiovisual studies delve into the production and creation of multimedia content, blending technical and artistic skills. Students learn to work with cameras, sound equipment, and editing software to produce films, commercials, and digital media. It’s a dynamic field for those passionate about visual storytelling.",
        quote1: "It's amazing to see a story come alive through visuals and sound.",
        quote2: "I feel like I'm learning the art of modern storytelling.",
        link: "https://movil.up.edu.mx/gdl/licenciatura-en-creacion-y-produccion-audiovisual"

    },
    {
        image: "../img/animacion.jpg",
        title: "Digital Art / Animation ",
        description: " Digital animation combines technology and art to create engaging visual content for entertainment, education, and marketing. Students learn the fundamentals of character design, motion graphics, and 3D modeling using industry-standard tools. This career is perfect for creative minds with a passion for storytelling and innovation.",
        quote1: "Bringing characters to life is the most fulfilling part of my studies.",
        quote2: "Learning industry tools like Maya and Houdini has been incredible.",
        link: "https://movil.up.edu.mx/gdl/ingenieria-en-animacion-digital"

    },
    {
        image: "../img/leyes.png",
        title: " Law Studies ",
        description: "  Law studies prepare students to understand legal systems, think critically, and advocate effectively. This field provides a foundation in legal theory, ethics, and practical skills. Graduates can pursue careers as lawyers, judges, or legal consultants, ensuring justice and fairness in society.",
        quote1: "I feel empowered knowing I can make a difference through law.",
        quote2: "Debating in class has sharpened my reasoning skills.",
        link: "https://movil.up.edu.mx/gdl/licenciatura-en-derecho"

    },
    {
        image: "../img/philosophyO.jpg",
        title: "Philosophy ",
        description: " Philosophy explores fundamental questions about existence, knowledge, and ethics, fostering critical and abstract thinking. Students analyze historical and contemporary ideas, honing their reasoning and argumentation skills. This field encourages intellectual curiosity and provides a strong foundation for various careers.",
        quote1: "Exploring life's big questions is both challenging and rewarding.",
        quote2: "This degree has taught me how to think deeply and critically",
        link: "https://mkt.up.edu.mx/licenciatura-en-filosofia"

    },
    {
        image: "../img/gastronomicO.webp",
        title: "Gastronomic Business",
        description: " Gastronomic business merges culinary arts with business management, equipping students to thrive in the food and hospitality industry. This field emphasizes creativity in the kitchen, entrepreneurship, and operational excellence, preparing graduates to lead restaurants, catering services, or food innovation ventures.",
        quote1: "It's amazing to combine creativity in the kitchen with business skills.",
        quote2: "I dream of opening my own restaurant someday!",
        link: "https://movil.up.edu.mx/gdl/licenciatura-direccion-negocios-gastronomicos"

    }
  ];

  const boxesA = [
    {
      image: "../img/marketingA.jpg",
      title: " Marketing",
      description: " Marketing focuses on understanding consumer behavior and creating strategies to promote products and services. Students learn about branding, advertising, and digital tools to craft impactful campaigns. This career blends creativity with analytical skills, preparing graduates to excel in diverse industries.",
      quote1: "Learning how to create impactful campaigns is so exciting.",
      quote2: "The mix of creativity and analytics keeps things interesting.",
      link: "https://movil.up.edu.mx/gdl/licenciatura-marketing-and-data-strategy"
    },
    {
      image: "../img/accountancyA.webp",
      title: "Accountancy",
      description: "Accountancy teaches the principles of financial recording, reporting, and analysis. This field ensures businesses maintain transparency and compliance with regulations. Students develop skills in auditing, taxation, and financial management, becoming indispensable in corporate and public sectors.",
      quote1: "I love diving into the numbers to solve financial puzzles.",
      quote2: "It’s satisfying knowing my skills are essential for any business.",
      link: "https://movil.up.edu.mx/gdl/licenciatura-en-contaduria"
    },
    {
      image: "../img/financesA.jpeg",
      title: "Finances",
      description: "Finance focuses on managing investments, analyzing markets, and helping individuals and organizations achieve financial stability. Students explore topics like corporate finance, portfolio management, and risk assessment, preparing them for influential roles in banking, investment, and consulting.",
      quote1: "Learning about stocks and markets has been eye-opening.",
      quote2: "This program prepares you to make big decisions confidently.",
      link: "https://movil.up.edu.mx/gdl/licenciatura-en-administracion-y-finanzas"
    },
    {
      image: "../img/internationalBusinessA.png",
      title: "International Business",
      description: " International business focuses on global trade, market analysis, and cross-cultural management. Students learn how to navigate complex global markets, develop strategies for multinational operations, and understand international trade laws and economics. This program prepares graduates for roles in export management, international marketing, and global supply chain logistics.",
      quote1: "Understanding how businesses operate globally is fascinating and challenging.",
      quote2: "I love learning about different cultures and their impact on business strategies.",
      link: "https://movil.up.edu.mx/gdl/licenciatura-en-administracion-y-negocios-internacionales"
    }
  ];

  const boxesM = [
    {
      image: "../img/psychologyM.jpg",
      title: "Psychology",
      description: "Psychology is the study of the human mind and behavior. It explores topics like cognitive processes, emotional regulation, and social interaction. Students learn to analyze, research, and apply psychological principles to help individuals and communities. Graduates can work in therapy, counseling, research, or organizational psychology.",
      quote1: "Understanding why people think and act the way they do is eye-opening.",
      quote2: "The courses have helped me develop empathy and critical thinking skills.",
      link: "https://movil.up.edu.mx/gdl/licenciatura-psicologia"

    }, 
    {
      image: "../img/medicineM.jpg",
      title: " Medicine",
      description: "Medicine is a rigorous field dedicated to diagnosing, treating, and preventing diseases. Students gain a deep understanding of the human body, medical ethics, and cutting-edge treatments. This career prepares individuals for various specialties, such as surgery, pediatrics, or internal medicine, to improve and save lives.",
      quote1: "It’s demanding but worth every effort when you see lives change for the better.",
      quote2: "Learning about the human body’s complexity is endlessly fascinating.",
      link: "https://mkt.up.edu.mx/licenciatura-en-medicina"
    },
    {
      image: "../img/nursingM.webp",
      title: "Nursing",
      description: "Nursing is a healthcare profession dedicated to patient care and advocacy. It equips students with the knowledge and practical skills needed to assess, diagnose, and treat patients while promoting overall health and wellness. Nursing students study subjects like anatomy, pharmacology, and patient management, preparing them for compassionate and effective healthcare delivery.",
      quote1: "Helping patients through their toughest moments is incredibly rewarding.",
      quote2: "The hands-on experience during clinical rotations has been invaluable.",
      link: "https://mkt.up.edu.mx/licenciatura-en-enfermeria"
    },
  ];


  // Función para actualizar el carrusel
  const updateCarouselEngineering = (index) => {
    setCurrentIndexEngineering(index);
  };

  // Función para actualizar el carrusel de humanidades
  const updateCarouselHumanities = (index) => {
    setCurrentIndexHumanities(index);
  };

   // Función para actualizar el carrusel de Finanzas
   const updateCarouselAdministrative = (index) => {
    setCurrentIndexAdministrative(index);
  };

   // Función para actualizar el carrusel de Finanzas
   const updateCarouselMedicine = (index) => {
    setCurrentIndexMedicine(index);
  };

  return (
    <div>
      <div className="rounded-box">
        <img src="../img/fair1.png" alt="FairPNG" />
        <h1 className = "titlePage">UPanamericana Career Fair</h1>
        <img src="../img/fair2.png" alt="FairPNG" />
      </div>

      <div className="page-container">
        <div id="bodyUP" className="container">
          <h2 className="card-container">Engineering</h2>
          <div className="carousel">
            <button className="prev" onClick={() => updateCarouselEngineering(currentIndexEngineering === 0 ? boxes.length - 1 : currentIndexEngineering - 1)}>←</button>
            <div className="carousel-container">
              <div className="box">
                <img src={boxes[currentIndexEngineering].image} alt={boxes[currentIndexEngineering].title} />
                <h2 className="CareerTitle">{boxes[currentIndexEngineering].title}</h2>
                <p>{boxes[currentIndexEngineering].description}</p>

                <h3>What UPcians said:</h3>
                <p>"{boxes[currentIndexEngineering].quote1}"</p>
                <p>"{boxes[currentIndexEngineering].quote2}"</p>

                <a href={boxes[currentIndexEngineering].link} target="_blank" rel="noopener noreferrer">Study Plan</a>
              </div>
            </div>
            <button className="next" onClick={() => updateCarouselEngineering(currentIndexEngineering === boxes.length - 1 ? 0 : currentIndexEngineering + 1)}>→</button>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="bodyUP" className="container">
          <h2 className="card-container">Humanities</h2>
          <div className="carousel">
            <button className="prev" onClick={() => updateCarouselHumanities(currentIndexHumanities === 0 ? boxesH.length - 1 : currentIndexHumanities - 1)}>←</button>
            <div className="carousel-container">
              <div className="box">
                <img src={boxesH[currentIndexHumanities].image} alt={boxesH[currentIndexHumanities].title} />
                <h2 className="CareerTitle">{boxesH[currentIndexHumanities].title}</h2>
                <p>{boxesH[currentIndexHumanities].description}</p>

                <h3>What UPcians said:</h3>
                <p>"{boxesH[currentIndexHumanities].quote1}"</p>
                <p>"{boxesH[currentIndexHumanities].quote2}"</p>

                <a href={boxesH[currentIndexHumanities].link} target="_blank" rel="noopener noreferrer">Study Plan</a>
              </div>
            </div>
            <button className="next" onClick={() => updateCarouselHumanities(currentIndexHumanities === boxesH.length - 1 ? 0 : currentIndexHumanities + 1)}>→</button>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="bodyUP" className="container">
          <h2 className="card-container"> Administrative </h2>
          <div className="carousel">
            <button className="prev" onClick={() => updateCarouselAdministrative(currentIndexAdministrative === 0 ? boxesA.length - 1 : currentIndexAdministrative - 1)}>←</button>
            <div className="carousel-container">
              <div className="box">
                <img src={boxesA[currentIndexAdministrative].image} alt={boxesA[currentIndexAdministrative].title} />
                <h2 className="CareerTitle">{boxesA[currentIndexAdministrative].title}</h2>
                <p>{boxesA[currentIndexAdministrative].description}</p>

                <h3>What UPcians said:</h3>
                <p>"{boxesA[currentIndexAdministrative].quote1}"</p>
                <p>"{boxesA[currentIndexAdministrative].quote2}"</p>

                <a href={boxesA[currentIndexAdministrative].link} target="_blank" rel="noopener noreferrer">Study Plan</a>
              </div>
            </div>
            <button className="next" onClick={() => updateCarouselAdministrative(currentIndexAdministrative === boxesA.length - 1 ? 0 : currentIndexAdministrative + 1)}>→</button>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="bodyUP" className="container">
          <h2 className="card-container">Medicine</h2>
          <div className="carousel">
            <button className="prev" onClick={() => updateCarouselMedicine(currentIndexMedicine === 0 ? boxesM.length - 1 : currentIndexMedicine - 1)}>←</button>
            <div className="carousel-container">
              <div className="box">
                <img src={boxesM[currentIndexMedicine].image} alt={boxesM[currentIndexMedicine].title} />
                <h2 className="CareerTitle">{boxesM[currentIndexMedicine].title}</h2>
                <p>{boxesM[currentIndexMedicine].description}</p>

                <h3>What UPcians said:</h3>
                <p>"{boxesM[currentIndexMedicine].quote1}"</p>
                <p>"{boxesM[currentIndexMedicine].quote2}"</p>

                <a href={boxesM[currentIndexMedicine].link} target="_blank" rel="noopener noreferrer">Study Plan</a>
              </div>
            </div>
            <button className="next" onClick={() => updateCarouselMedicine(currentIndexMedicine === boxesM.length - 1 ? 0 : currentIndexMedicine + 1)}>→</button>
          </div>
        </div>
      </div>

    </div>

  );
}

export default UniversidadP;
