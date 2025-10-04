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
      title: 'Fully Responsive',
      description:
        'Your website will look and perform flawlessly on any device. Impress your visitors and keep them engaged with a seamless experience everywhere.',
      icon: <ResponsiveIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Fresh Layouts',
      description:
        'Stand out with modern, consistent layouts that reflect your brand. Every page is designed to captivate and convert your audience.',
      icon: <FreshLayout />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Search Engine Optimization',
      description:
        'Get discovered online with proven SEO strategies that drive traffic and build trust. Let your business rise above the competition and attract more clients.',
      icon: <SeoIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Full Stack Development',
      description:
        'From frontend to backend, I build secure, scalable web apps tailored to your goals. Launch your next big idea with expert full stack solutions.',
      icon: <WorkFlowIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Web Scrapping',
      description:
        'Unlock valuable insights with custom web scraping for research, automation, and growth. Get accurate, actionable data delivered securely and on time.',
      icon: <ScrapingIcon />,
      iconClass: 'header-uim-svg',
      parentIconClass: 'icon text-center text-primary h1 shadow rounded bg-services',
      backgroundIconClass: 'uim-svg'
    },
    {
      title: 'Support 24/7',
      description:
        "Are you looking for friendly code buddy?, if yes contact me I'm happy to serve you also helping other to solve with their bugs or problems is my name calling.",
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
