
const About = () => {
    const firstName = "Resty";
    const lastName = "Ochea";
    const email = "restyochea@gmail.com";
    const address = "6015 Lapu-lapu City· Cebu Philippines";
    const mobileNumber = "09915466091"

    const careerSummary = `I'm a Full Stack Developer with 4 years of professional and freelance experience. I specialize in building web and mobile applications using PHP, Laravel, Express, Vue, React, Quasar, and Ionic. My expertise includes MySQL, PostgreSQL, Redis, NoSQL databases, Docker, and API development.

    I have hands-on experience integrating third-party services and APIs such as PayPal, Stripe, and social platforms, delivering secure and seamless user experiences.

    I enjoy turning ideas into engaging, reliable platforms—whether for startups or established businesses. Let's build something great together!`


    const socialLinks = [
        { platform: "LinkedIn", url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", iconClass: "fab fa-linkedin-in" },
        { platform: "GitHub", url: "https://github.com/casibanryan", iconClass: "fab fa-github" },
        { platform: "Twitter", url: "https://twitter.com/ochea_restituto", iconClass: "fab fa-twitter" },
        { platform: "Facebook", url: "https://www.facebook.com/TitsuKe", iconClass: "fab fa-facebook-f" }
    ];  
    return (
        <>
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    {firstName}
                    <span className="text-primary ms-3">{lastName}</span>
                </h1>
                <div className="subheading mb-5">
                    {address} · {mobileNumber} ·
                    <a href="mailto:restyochea.com">{email}</a>
                </div>
                <p className="lead mb-5">
                   {careerSummary}
                </p>
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

export default About;