import { useEffect, useRef, useState } from 'react'
import projectData from '../helper/projectData'
import '../css/zoom-modal.css'

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [zoomImage, setZoomImage] = useState(null)
  const galleryRef = useRef(null)

  const openModal = project => {
    setActiveProject(project)
    setGalleryIndex(0)
    setZoomImage(null)
  }

  const closeModal = () => {
    setActiveProject(null)
    setZoomImage(null)
  }

  const openZoom = src => {
    setZoomImage(src)
  }

  const closeZoom = () => {
    setZoomImage(null)
  }

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

  // Handle ESC key: close zoom first, then gallery
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        if (zoomImage) {
          e.stopPropagation()
          closeZoom()
        } else if (activeProject) {
          closeModal()
        }
      }
    }

    if (activeProject) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject, zoomImage])

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
                      <img className="port-image" src={project.highLight || project.gallery[0]} alt={project.title} />
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-9">
                      <h3>
                        <a
                          href={project.github ? project.github : '#None'}
                          target={project.github ? '_blank' : undefined}
                          rel="noreferrer"
                        >
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
                              • {tool}
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

      {/* Project Modal (Gallery) */}
      {activeProject && (
        <div
          className={`project-modal open ${zoomImage ? 'project-modal-blurred' : ''}`}
          role="dialog"
          aria-modal="true"
          onClick={event => {
            if (!zoomImage && event.target.classList.contains('project-modal')) {
              closeModal()
            }
          }}
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
            </div>
            <div className="project-modal-body">
              <div className="project-modal-section">
                <h4>Features</h4>
                <div className="row">
                  {activeProject.features.map((feature, index) => (
                    <div className="col-6" key={index}>
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-modal-section">
                <h4>Gallery</h4>
                <div className="project-gallery-slider-wrapper">
                  <div className="project-gallery-slider" ref={galleryRef} onScroll={handleGalleryScroll}>
                    {activeProject.gallery.map((src, index) => (
                      <div className="project-gallery-slide" key={index} onClick={() => openZoom(src)}>
                        <img src={src} alt={`${activeProject.title} screenshot ${index + 1}`} loading="lazy" />
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

      {/* Zoom Modal (Overlay on top of Gallery) */}
      {zoomImage && (
        <div className="zoom-modal" onClick={closeZoom}>
          <div className="zoom-modal-backdrop" />
          <div className="zoom-modal-content" onClick={e => e.stopPropagation()}>
            <button className="zoom-modal-close" type="button" onClick={closeZoom} aria-label="Close zoom">
              ✕
            </button>
            <img className="zoom-modal-image" src={zoomImage} alt="Zoomed view" />
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio
