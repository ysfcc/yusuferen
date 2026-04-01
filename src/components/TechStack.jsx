import React from 'react';
import './TechStack.css';

const techGroups = [
  [
    { name: "MSSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ],
  [
    { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "ASP.NET MVC", url: "" },
    { name: ".NET Core", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Go", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
  ],
  [
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "jQuery", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
  ],
  [
    { name: "Razor", url: "" },
    { name: "Vue 3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" }
  ]
];

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container glass-panel">
        {techGroups.map((rowItems, rowIndex) => (
          <div className="tech-row" key={rowIndex} style={{ animationDelay: `${0.2 + rowIndex * 0.15}s` }}>
            {rowItems.map((tech, i) => (
              <div className="tech-badge" key={i}>
                {tech.url ? <img src={tech.url} alt={tech.name} className="tech-icon" title={tech.name} /> : <div className="tech-icon-placeholder" />}
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
