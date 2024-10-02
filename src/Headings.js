import React, { useState, useEffect } from 'react';
import './App.css';
const Heading = () => {
  const [highlightText, setHighlightText] = useState('Frontend developer');
  const texts = ['Frontend Developer', 'Software Engineer'];
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setHighlightText(texts[index]);
      index = (index + 1) % texts.length;
    }, 2000);
    
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <section className="hero">
      <div className="text-content">
        <h1>
          I am Zain-ul-Abdeen <br />
          <span className="highlight">{highlightText}</span>
        </h1>
        <p>Enthusiastic and fresh mind indulging in the vast sea of React</p>
        <div className="buttons">
          <button className="download-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Heading;
