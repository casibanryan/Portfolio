import Navbar from './include/Navbar';
import About from './include/About';
import Experience from './include/Experience';
import Education from './include/Education';
import Skills from './include/Skills';
import { Helmet } from 'react-helmet';
import React from 'react';




function App() {

  return (
    <div id="page-top" className="container-fluid p-0">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills />

      <Helmet>
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet"
          type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
      </Helmet>
    </div>
  );
}

export default App;
