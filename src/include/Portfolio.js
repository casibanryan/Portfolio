import { useEffect, useRef, useState } from 'react'
import artManagemnt from '../assets/img/art-management.png'
import lafang from '../assets/img/lafang.png'
import onlineVoting from '../assets/img/online-voting.png'
import comingSoonBanner from '../assets/img/coming-soon-banner.png'

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
    gallery: [artManagemnt, comingSoonBanner, comingSoonBanner],
    videoUrl: 'https://www.youtube.com/embed/Hfm94aHAbYQ?si=6Z7UHCJZU37PpSvt'
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
    gallery: [onlineVoting, comingSoonBanner, comingSoonBanner],
    videoUrl: 'https://www.youtube.com/embed/Hfm94aHAbYQ?si=6Z7UHCJZU37PpSvt'
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
    gallery: [lafang, comingSoonBanner, comingSoonBanner],
    videoUrl: 'https://www.youtube.com/embed/Hfm94aHAbYQ?si=6Z7UHCJZU37PpSvt'
  }
]

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const galleryRef = useRef(null)

  const openModal = project => {
    setActiveProject(project)
    setGalleryIndex(0)
  }

  const closeModal = () => setActiveProject(null)

  const getGallerySlideSize = () => {
    if (!galleryRef.current || !galleryRef.current.firstElementChild) return 0
    const slideRect = galleryRef.current.firstElementChild.getBoundingClientRect()
    const style = window.getComputedStyle(galleryRef.current)
    const gap = parseFloat(style.gap || style.columnGap || '0') || 0
    return slideRect.width + gap
  }

  const scrollGalleryTo = index => {
    if (!galleryRef.current) return
    const slideSize = getGallerySlideSize()
    if (!slideSize) return

    galleryRef.current.scrollTo({
      left: slideSize * index,
      behavior: 'smooth'
    })
  }

  const handleGalleryScroll = () => {
    if (!galleryRef.current || !activeProject) return
    const slideSize = getGallerySlideSize()
    if (!slideSize) return

    const { scrollLeft, scrollWidth, offsetWidth } = galleryRef.current
    const projectCount = activeProject.gallery.length

    let newIndex = Math.round(scrollLeft / slideSize)
    if (scrollLeft + offsetWidth >= scrollWidth - 2) {
      newIndex = projectCount - 1
    }

    const clampedIndex = Math.min(Math.max(newIndex, 0), projectCount - 1)
    if (clampedIndex !== galleryIndex) {
      setGalleryIndex(clampedIndex)
    }
  }

  useEffect(() => {
    if (activeProject && galleryRef.current) {
      galleryRef.current.scrollTo({ left: 0 })
      setGalleryIndex(0)
    }
  }, [activeProject])

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
              {/* <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light project-modal-code-btn"
              >
                Live preview
              </a> */}
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
                <div className="project-gallery-slider-wrapper">
                  <div className="project-gallery-slider" ref={galleryRef} onScroll={handleGalleryScroll}>
                    {activeProject.gallery.map((src, index) => (
                      <div className="project-gallery-slide" key={index}>
                        <img src={src} alt={`${activeProject.title} screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <div className="project-gallery-dots">
                    {activeProject.gallery.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`project-gallery-dot ${galleryIndex === index ? 'active' : ''}`}
                        onClick={() => scrollGalleryTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
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
