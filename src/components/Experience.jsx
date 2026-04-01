import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Full-Stack Developer | Project Manager | Freelance Software Developer",
    company: "Freelance – Ankara, Turkey",
    date: "10/2024 - Current",
    details: [
      "Created an order pricing module running on Logo Software DB (CRM+ERP). Tech stack: MSSQL, .Net Core API, Vue3.",
      "Developed an insurance application utilizing Magdeburger Insurance Company API.",
      "Built apartment management system (.Net Core and Vue3) and three mobile applications (Flutter, Go API).",
      "Contributed to volunteer open-source projects, including an AI-supported skill-card generating project."
    ]
  },
  {
    role: "Team Leader | Project Manager | Full-Stack Developer",
    company: "Alternatif Enerji – İstanbul",
    date: "05/2023 - 10/2024",
    details: [
      "Managed a team of 5 developers for settlement applications under Unlicensed Electricity Producers Regulation.",
      "Integrated National Remote Meter Reader systems with .Net Core 10 and Vue frontend.",
      "Utilized Clean Architecture, Vertical Slice Architecture, OpenAPI, and Fast Endpoint.",
      "Reduced process time from 100 man-days to under 5 minutes.",
      "Established structured documentation process for project tracking and Jira usage practices."
    ]
  },
  {
    role: "Team Leader | Project Manager | Full-Stack Developer",
    company: "Bordo Yazılım – Ankara",
    date: "12/2013 - 04/2023",
    details: [
      "Developed various web applications including buzzfile.com, proficyclops.com, and click2refund.com.",
      "Started as Junior Front-end Developer, progressed to Team Leader & Project Manager.",
      "Architected Code-First databases, created Amazon.com integration layers, and managed crawling layers.",
      "Led development teams ranging from 4 to 9 members using Agile-Scrum methods.",
      "Served as project manager and team leader, improving soft skills like team motivation and customer relations."
    ]
  },
  {
    role: "Assistant Software Specialist",
    company: "Infoline Bilgi Teknolojileri – Ankara",
    date: "09/2013 - 12/2013",
    details: [
      "Worked in the R&D Department of the Informatics Sector and developed a native Android application for disaster management.",
      "Enabled rapid emergency coordination significantly accelerating first aid response times."
    ]
  },
  {
    role: "Software Engineer",
    company: "Albaraka Türk Bankası – İstanbul",
    date: "03/2013 - 08/2013",
    details: [
      "Developed Windows Phone applications during an internship to digitize the credit application documentation process.",
      "Reduced the documentation process time from approximately one week to under 1 hour."
    ]
  },
  {
    role: "Computer Engineer",
    company: "İstanbul Üniversitesi – İstanbul",
    date: "11/2012 - 06/2013",
    details: [
      "Developed a mobile version of the official university website using MSSQL, .NET, and jQuery Mobile.",
      "Implemented data access using LINQ and performed SQL query optimizations."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Career History</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item glass-panel" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
