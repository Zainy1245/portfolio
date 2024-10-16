import React from 'react';
import './projecttemplates.css';

const Templates = () => {
  return (
    <div className="project-templates">
      <h2>
        MY <span className="highlight">WORK</span>
      </h2>
      <p>
        Recent Projects i have done using my skills in React 
      </p>
      <div className="template-cards">
        <div className="template-card">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="videos/section2icon4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3>Constra</h3>
          <p>Constra is a construction company with a vast netork around the globe. this is a Blog website with rich colors and beautiful design.</p>
          
        </div>

        <div className="template-card">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="videos/section2icon5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3>Object Detection</h3>
          <p>Locate an object inside of an image.</p>
          
        </div>

        <div className="template-card">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="videos/section2icon6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3>Data Classification</h3>
          <p>Label data in a table based on its content.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Templates;
