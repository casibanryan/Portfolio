const list = [
  {
    title: 'frontend',
    items: [
      {
        class: 'fab fa-react',
        name: 'React'
      },
      {
        class: 'fab fa-vuejs',
        name: 'Vue'
      },
      {
        class: 'fab fa-html5',
        name: 'HTML'
      },
      {
        class: 'fab fa-css3',
        name: 'CSS'
      },
      {
        class: 'fab fa-sass',
        name: 'Sass'
      },
      {
        class: 'fab fa-bootstrap',
        name: 'Bootstrap'
      },
      {
        class: 'ri-tailwind-css-fill',
        name: 'Tailwind'
      },
      {
        class: 'fab fa-js-square',
        name: 'Javascript'
      }
    ]
  },
  {
    title: 'backend',
    items: [
      {
        class: 'fab fa-laravel',
        name: 'Laravel'
      },
      {
        class: 'fab fa-node',
        name: 'Node'
      },
      {
        class: 'fab fa-python',
        name: 'Python'
      },
      {
        class: 'fab fa-php',
        name: 'PHP'
      }
    ]
  }
]

const workFlows = [
  'Mobile-First & Adaptive Architectures',
  'Agile Collaboration & Technical Leadership',
  'Legacy Refactoring & UI/UX Modernization'
]

const Skills = () => (
  <>
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        {list.map((skill, i) => (
          <div key={i}>
            <div className="subheading mb-3">{skill.title}</div>
            <ul className="list-inline dev-icons">
              {skill.items.map((item, index) => (
                <li className="list-inline-item" key={index}>
                  <i className={item.class}></i>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          {workFlows.map((flow, i) => (
            <li key={i}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {flow}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
)

export default Skills
