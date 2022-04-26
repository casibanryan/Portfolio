import '../css/styles.css';
import profile from '../assets/img/profile.png';
import Scrollspy from 'react-scrollspy'

const Navbar = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Resty Ochea</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2"
                    src={profile} alt="profile" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                    className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">


                <ul className="navbar-nav">
                    <Scrollspy items={['about', 'services', 'experience', 'education', 'skills', 'interests', 'portfolio']} currentClassName="isCurrent" >
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                    </Scrollspy>
                </ul>
            </div>
        </nav>
    </>
)

export default Navbar;