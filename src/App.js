import Navbar from './include/Navbar';
import About from './include/About';
import Experience from './include/Experience';
import { Helmet } from 'react-helmet';



function App() {
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
        <script src="./js/scripts.js" type="text/javascript"></script>
      </Helmet>
    </div>
  );
}

export default App;
