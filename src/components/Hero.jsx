import React from 'react';
import FloatingLogo from './FloatingLogo';
import './Hero.css';

const techLogos = [
  { name: "MSSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "ASP.NET MVC", url: "" },
  { name: ".NET Core", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Go", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Razor", url: "" },
  { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Vue 3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
  { name: "Clean Architecture", url: "" },
  { name: "Vertical Slice", url: "" },
  { name: "OpenAPI", url: "" },
  { name: "FastEndpoint", url: "" },
  { name: "RESTful", url: "" },
  { name: "SOAP", url: "" }
];

const getScatteredPosition = (index, side, totalItems) => {
  // 1. Dikeyde (Vertical) homojen dağılım: Alanı eşit parçalara bölüyoruz (%10 ile %90 arasına yayarak)
  const segmentHeight = 80 / totalItems; 
  const topPercent = 10 + (index * segmentHeight);
  
  // 2. Yatayda (Horizontal) organik ama kontrollü bir dalgalanma (zigzag) yaratmak için:
  const isEven = index % 2 === 0;
  
  // Elemanları deterministik olarak biraz sağa/sola kaydırmak için sinüs kullanıyoruz (-10 ile +10)
  const wave = Math.sin(index * 2) * 10; 
  
  // Çift numaralı logolar kenara, tek numaralı logolar daha içe doğru itilir
  let xPosition;
  if (isEven) {
    xPosition = 15 + wave; // %5 ile %25 arası
  } else {
    xPosition = 50 + wave; // %40 ile %60 arası
  }

  return {
    top: `${topPercent}%`,
    [side]: `${xPosition}%`,
    position: 'absolute'
  };
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="gradient-blob shape-1"></div>
      <div className="gradient-blob shape-2"></div>
      
      <div className="hero-content">
        <div className="profile-container glass-panel">
          <div className="profile-image-wrapper">
            <img src="/pp3.jpeg" alt="Yusuf Eren" className="profile-image" />
          </div>
          <h1 className="hero-name">Yusuf Eren</h1>
          <h2 className="hero-titles">Software Engineer | Project Manager | Team Leader</h2>
          <p className="hero-summary">
            13+ years of experience in end-to-end web and mobile application development. 
            Passionate about Clean Architecture, Team Management, and creating impactful solutions.
          </p>
        </div>
      </div>

      <div className="floating-container left">
        {techLogos.slice(0, 11).map((tech, i) => (
          <div key={i} style={getScatteredPosition(i, 'left', 11)} className="scattered-logo-wrapper">
            <FloatingLogo src={tech.url} name={tech.name} delay={i * 0.3} />
          </div>
        ))}
      </div>
      
      <div className="floating-container right">
        {techLogos.slice(11).map((tech, i) => (
          <div key={11 + i} style={getScatteredPosition(i, 'right', 10)} className="scattered-logo-wrapper">
            <FloatingLogo src={tech.url} name={tech.name} delay={1.5 + i * 0.3} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
