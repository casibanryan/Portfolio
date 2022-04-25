import '../css/styles.css';

const Experience = () => (
    <>
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>

                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Freelancer</h3>
                        <div className="subheading mb-3">Facebook</div>
                        <p>Building website for low price but high quality.</p>
                        <p>Helping other's with their error (QA)</p>

                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">January 2021 - Present</span></div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Associate Web Developer</h3>
                        <div className="subheading mb-3">NeoDocto Inc.</div>
                        <p>Created a program that has been used by the company for 6 months and building websites,
                            After 1 month I was promoted as a group leader of web scrapping team python.</p>
                        <p>Guiding other interns on how to web scrap data using python and how to automate websites.</p>
                        <p>Customizing wordpress templates and updating website content.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">September 2021 - March 2022</span></div>
                </div>
            </div>
        </section>
        <hr className="m-0" />
    </>
)

export default Experience;