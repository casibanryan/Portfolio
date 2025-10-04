import '../css/services.css'
import ResponsiveIcon from './icons/ResponsiveIcon'
import FreshLayout from './icons/FreshLayout'
import SeoIcon from './icons/SeoIcon'
import WorkFlowIcon from './icons/WorkFlowIcon'
import ScrapingIcon from './icons/ScrappingIcon'
import SupportIcon from './icons/SupportIcon'

const Services = () => {
  const serviceList = [
    {
      title: 'Cross Platform',
      description:
        'Develop apps and websites for mobile, desktop, and tablets with a single codebase. Deliver seamless, responsive experiences everywhere and grow your audience with modern SPA solutions.',
      icon: <FreshLayout />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Fresh Layouts',
      description:
        'Modern, responsive layouts that look great on every device and reflect your brand. Engage visitors and convert them into loyal clients with a professional design.',
      icon: <ResponsiveIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Search Engine Optimization',
      description:
        'Boost your online presence and attract more clients with proven SEO strategies. Get found, build trust, and grow your business with expert optimization.',
      icon: <SeoIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Full Stack Development',
      description:
        'Build robust, scalable web applications from frontend to backend using modern frameworks. Launch your next big idea with secure, high-performance solutions tailored to your needs.',
      icon: <WorkFlowIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Web Scrapping',
      description:
        'Extract and organize valuable data from any website for research, automation, or business growth. Get reliable, custom web scraping solutions delivered securely and on time.',
      icon: <ScrapingIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Support 24/7',
      description:
        'Get expert help and friendly support whenever you need it, day or night. I’m here to solve your problems and keep your projects running smoothly.',
      icon: <SupportIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    }
  ]
  return (
    <>
      <section className="resume-section" id="services">
        <div className="resume-section-content">
          <h2 className="mb-5">Services</h2>
          <div className="row">
            {serviceList.map((service, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="card-customize service-wrapper rounded border-0 shadow p-4">
                  <div className={service.parentIconClass}>
                    <span className={service.iconClass}>{service.icon}</span>
                  </div>
                  <div className="content mt-4">
                    <h5 className="title">{service.title}</h5>
                    <p className="text-muted mt-3 mb-0">{service.description}</p>
                  </div>
                  {
                    <div className="big-icon h1 text-primary">
                      <span className={service.backgroundIconClass}>{service.icon}</span>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default Services
