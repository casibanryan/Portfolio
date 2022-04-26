import Navbar from './include/Navbar';
import About from './include/About';
import Experience from './include/Experience';
import Education from './include/Education';
import Skills from './include/Skills';
import Interest from './include/Interest';
import Portfolio from './include/Portfolio';
import Services from './include/Services';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "./js/scripts.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  // useEffect(() => {
  //   const sideNav = document.body.querySelector('#sideNav');
  //   if (sideNav) {
  //     new bootstrap.ScrollSpy(document.body, {
  //       target: '#sideNav',
  //       offset: 74,
  //     });
  //   };

  //   const navbarToggler = document.body.querySelector('.navbar-toggler');
  //   const responsiveNavItems = [].slice.call(
  //     document.querySelectorAll('#navbarResponsive .nav-link')
  //   );
  //   responsiveNavItems.map(function (responsiveNavItem) {
  //     responsiveNavItem.addEventListener('click', () => {
  //       if (window.getComputedStyle(navbarToggler).display !== 'none') {
  //         navbarToggler.click();
  //       }
  //     });
  //   });

  // }, [])

  window.addEventListener('DOMContentLoaded', event => {

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
      new bootStrap.ScrollSpy(document.body, {
        target: '#sideNav',
        offset: 74,
      });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });

  });



  return (
    <div id="page-top" className="container-fluid p-0">
      <Navbar />
      <About />
      <Services />
      <Experience />
      <Education />
      <Skills />
      <Interest />
      <Portfolio />

      <Helmet>
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet"
          type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
