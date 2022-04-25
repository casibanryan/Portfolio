
import '../css/styles.css';


const Education = () => (

    <>
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Cordova Public College</h3>
                        <div className="subheading mb-3">Bachelor of Science Information Technology</div>
                        <div>Programming and Web Development Track</div>
                        <p>GPA: 2</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">August 2019 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Bayan Academy</h3>
                        <div className="subheading mb-3">Advance Front-End Web Development</div>
                        <p>Bootcamp in React JS</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">April 2022 - May 2022</span></div>
                </div>
            </div>
        </section>
        <hr className="m-0" />
    </>
)

export default Education;