import React from 'react';
import './projecttemplates.css';

const Templates = () => {
  return (
    <div className="project-templates">
      <h2>
        Project <span className="highlight">Templates</span>
      </h2>
      <p>
        Lobe will automatically select the right machine learning architecture
        for your project. Image classification is available now, with more
        templates coming soon.
      </p>
      <div className="template-cards">
        <div className="template-card">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="videos/section2icon4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3>Image Classification</h3>
          <p>Label an image based on its content.</p>
          <button className="available-now">AVAILABLE NOW</button>
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
          <button className="coming-soon">COMING SOON</button>
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
          <button className="coming-soon">COMING SOON</button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
