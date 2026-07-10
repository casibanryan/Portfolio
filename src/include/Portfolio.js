import { useState } from 'react'
import artManagemnt from '../assets/img/art-management.png'
import lafang from '../assets/img/lafang.png'
import onlineVoting from '../assets/img/online-voting.png'

const projectData = [
  {
    id: 1,
    title: 'Living Art',
    subtitle: 'Art Management System',
    description:
      'Living Art is a management system for online art galleries that allows buyers to purchase paintings, scriptures, and other artwork online using PHP.',
    github: 'https://github.com/casibanryan/Living-Art',
    features: ['Customer login', 'Admin login', 'Payment processing', 'CRUD inventory', 'Contact messaging'],
    tools: ['PHP', 'Bootstrap', 'Axios', 'jQuery', 'HTML/CSS/JS', 'MySQL', 'XAMPP'],
    gallery: [artManagemnt, onlineVoting, lafang],
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  },
  {
    id: 2,
    title: 'C P C',
    subtitle: 'Online Voting System',
    description:
      'A secure voting platform built to help schools conduct elections online with separate student and admin flows, vote tracking, and results management.',
    github: 'https://github.com/casibanryan/voting-system',
    features: ['Student login', 'Admin login', 'Vote casting', 'Election management', 'Contact form'],
    tools: ['PHP', 'Bootstrap', 'Axios', 'jQuery', 'HTML/CSS/JS', 'MySQL', 'XAMPP'],
    gallery: [onlineVoting, artManagemnt, lafang],
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  },
  {
    id: 3,
    title: 'Lafang',
    subtitle: 'Restaurant Online Reservation',
    description:
      'Lafang helps restaurant staff manage reservations and guest details in one place, improving responsiveness and keeping reservation data centralized.',
    github: 'https://github.com/casibanryan/voting-system',
    features: [
      'Reservation request',
      'Admin dashboard',
      'Automated email notifications',
      'CRUD bookings',
      'Customer contact'
    ],
    tools: ['PHP', 'Bootstrap', 'Axios', 'jQuery', 'HTML/CSS/JS', 'MySQL', 'XAMPP'],
    gallery: [lafang, artManagemnt, onlineVoting, onlineVoting],
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  }
]

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null)

  const openModal = project => setActiveProject(project)
  const closeModal = () => setActiveProject(null)

  return (
    <>
      <section className="resume-section" id="portfolio">
        <div className="resume-section-content">
          <h2 className="mb-5">Portfolio</h2>
          <div className="container bootstrap snippets bootdey">
            <div className="row">
              {projectData.map(project => (
                <div className="media" key={project.id}>
                  <div className="row">
                    <div className="media-img col-sm-4 col-md-3 col-lg-3">
                      <div className="img-overlay">
                        <button type="button" className="btn btn-primary" onClick={() => openModal(project)}>
                          <i className="fa-solid fa-arrow-right"></i> Read more
                        </button>
                      </div>
                      <img className="port-image" src={project.gallery[0]} alt={project.title} />
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-9">
                      <h3>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          {project.title}
                        </a>
                      </h3>
                      <h6>
                        <span className="Newsletter">{project.subtitle}</span>
                      </h6>
                      <p>{project.description}</p>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 me-md-3">
                          <span className="text-primary">System Functionalities</span>
                          {project.features.map((feature, index) => (
                            <p className="mb-0" key={index}>
                              {String.fromCharCode(97 + index)}. {feature}
                            </p>
                          ))}
                        </div>
                        <div className="col-md-5 col-sm-5">
                          <span className="text-primary">Tools</span>
                          {project.tools.map((tool, index) => (
                            <p className="mb-0" key={index}>
                              {tool}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="project-modal open"
          role="dialog"
          aria-modal="true"
          onClick={event => event.target.classList.contains('project-modal') && closeModal()}
        >
          <div className="project-modal-content">
            <button
              className="project-modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close project details"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="project-modal-header">
              <div>
                <span className="project-modal-label">Project Preview</span>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.subtitle}</p>
              </div>
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light project-modal-code-btn"
              >
                View code
              </a>
            </div>
            <div className="project-modal-body">
              <div className="project-modal-section">
                <h4>Features</h4>
                <ul className="project-feature-list">
                  {activeProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-modal-section">
                <h4>Gallery</h4>
                <div className="project-gallery">
                  {activeProject.gallery.map((src, index) => (
                    <div className="project-gallery-item" key={index}>
                      <img src={src} alt={`${activeProject.title} screenshot ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-modal-section project-video-section">
                <h4>Video Demo</h4>
                <div className="project-video-wrapper">
                  <iframe
                    title={`${activeProject.title} demo`}
                    src={activeProject.videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio
