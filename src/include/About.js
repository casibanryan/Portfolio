const About = () => {
  const firstName = 'Resty'
  const lastName = 'Ochea'
  const email = 'restyochea@gmail.com'
  const address = 'Lapu-lapu City· Cebu Philippines'
  const mobileNumber = '09915466091'
  const numExperience = 5

  const careerSummary = `I'm a Full Stack Developer dedicated to building high-performance web and mobile solutions. Over the past ${numExperience} years, I’ve specialized in developing secure APIs, managing diverse database architectures, and turning startup ideas into reliable platforms. I believe in functional design, efficient code, and seamless user journeys.`

  const socialLinks = [
    {
      platform: 'Linkedin',
      url: 'https://www.linkedin.com/in/resty-ochea-a873b3236/',
      iconClass: 'fab fa-linkedin-in'
    },
    { platform: 'GitHub', url: 'https://github.com/casibanryan', iconClass: 'fab fa-github' },
    { platform: 'Facebook', url: 'https://www.facebook.com/TitsuKe', iconClass: 'fab fa-facebook-f' }
  ]
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            {firstName}
            <span className="text-primary ms-3">{lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {address} · {mobileNumber} ·<a href="mailto:restyochea.com">{email}</a>
          </div>
          <p className="lead mb-5">{careerSummary}</p>
          <div className="social-icons">
            {socialLinks.map(link => (
              <a key={link.platform} className="social-icon" href={link.url} target="_blank" rel="noreferrer">
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default About
