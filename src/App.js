/* eslint-disable array-callback-return */
import Navbar from './include/Navbar'
import About from './include/About'
import Experience from './include/Experience'
import Education from './include/Education'
import Skills from './include/Skills'
import Interest from './include/Interest'
import Portfolio from './include/Portfolio'
import Services from './include/Services'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const navbarToggler = document.body.querySelector('.navbar-toggler')
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'))
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click()
        }
      })
    })
  }, [])

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
        <title>Resty Ochea | Full Stack Developer in Cebu, Philippines</title>
        <meta name="title" content="Resty Ochea | Full Stack Developer in Cebu, Philippines" />
        <meta
          name="description"
          content="Full Stack Developer with 5 years of experience specializing in Laravel, Vue.js, and React.js. Building scalable web and mobile solutions in Cebu, Philippines."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Cebu, Philippines, Laravel, PHP, React, Resty Ochea, Web Developer Philippines"
        />
        <meta name="author" content="Resty Ochea" />
        <meta name="robots" content="index, follow" />

        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />

        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </Helmet>
    </div>
  )
}

export default App
