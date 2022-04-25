import Navbar from './include/Navbar';
import About from './include/About';
import Experience from './include/Experience';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { appendScript } from './js/appendScript';




function App() {

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', event => {
      const sideNav = document.body.querySelector('#sideNav');
      if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
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

  }, [])

  return (
    <div id="page-top" className="container-fluid p-0">
      <Navbar />
      <About />
      <Experience />

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
