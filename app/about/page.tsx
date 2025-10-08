// app/about/page.tsx
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>About This Project</h1>
      <p><strong>Name:</strong> Stefanus Hendryan Widjaja</p>
      <p><strong>Student Number:</strong> 22081507</p>

      <h2>How to Use This Website</h2>
      <video width="100%" controls>
      <source src="/tutorial.mp4" type="video/mp4" />
    
      </video>
        
      
    </div>
  );
};

export default AboutPage;