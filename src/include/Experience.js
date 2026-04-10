const Experience = () => {
  const experienceList = [
    {
      title: 'Full Stack Developer',
      company: 'Cubic Solutions',
      description:
        'Built and maintained custom web applications for logistics and business management. Worked closely with clients to deliver scalable, secure, and user-friendly solutions tailored to their needs.',
      date: '2023 - 2026'
    },

    {
      title: 'Full Stack Developer',
      company: 'Muramoto Philippines',
      description:
        'Developed internal web tools and automated business processes for manufacturing operations. Collaborated with cross-functional teams to deliver solutions that improved efficiency and reporting.',
      date: '2022 - 2023'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Online Platforms & Referrals',
      description:
        'Delivered high-quality websites and web apps to clients worldwide through online platforms, and personal referrals. Built a strong reputation for solving problems, collaborating remotely, and earning repeat business from satisfied clients.',
      date: '2020 - 2022'
    }
  ]
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>

          {experienceList.map((exp, idx) => (
            <div key={idx} className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">{exp.title}</h3>
                <div className="subheading mb-3">{exp.company}</div>
                <p>{exp.description}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="m-0" />
    </>
  )
}

export default Experience
