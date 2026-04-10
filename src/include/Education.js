const list = [
  {
    school: 'Cordova Public College',
    degree: 'Bachelor of Science Information Technology',
    track: 'Programming and Web Development Track',
    details: ['Best in research', 'Class president', 'Innovation Olympics representative'],
    date: 'August 2019 - June 2023'
  },
  {
    school: 'Bayan Academy',
    degree: 'Advance Front-End Web Development',
    track: 'Bootcamp in React JS',
    date: 'April 2022 - May 2022'
  }
]
const Education = () => (
  <>
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        {list.map((item, idx) => (
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{item.school}</h3>
              <div className="subheading mb-3">{item.degree}</div>
              <div>{item.track}</div>
              {item.details && item.details.map((detail, idx) => <div key={idx}> • {detail}</div>)}
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    <hr className="m-0" />
  </>
)

export default Education
