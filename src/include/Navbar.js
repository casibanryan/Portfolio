import '../css/styles.css'
import profile from '../assets/img/profile2.png'
import Scrollspy from 'react-scrollspy'

const Navbar = () => {
  const navList = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Interests', href: '#interests' },
    { name: 'Portfolio', href: '#portfolio' }
  ]

  const mapNames = navList.map(nav => nav.href.replace('#', ''))
  const name = 'Resty Ochea'

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{name}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="profile" />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <Scrollspy items={mapNames} currentClassName="isCurrent" className="ps-0">
              {navList.map((nav, idx) => (
                <li key={idx} className="nav-item">
                  <a className="nav-link js-scroll-trigger" href={nav.href}>
                    {nav.name}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
