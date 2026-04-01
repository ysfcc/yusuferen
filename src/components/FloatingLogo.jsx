import React from 'react';
import './FloatingLogo.css';

const FloatingLogo = ({ src, name, delay }) => {
  return (
    <div className={`floating-logo ${!src ? 'text-only' : ''}`} style={{ animationDelay: `${delay}s` }}>
      {src ? <img src={src} alt={name} title={name} /> : <span className="logo-text">{name}</span>}
    </div>
  );
};

export default FloatingLogo;
