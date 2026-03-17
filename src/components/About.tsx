import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-content-wrapper">
          <div className="about-profile-container">
            <img
              src="/images/mayank-profile-bg.png"
              alt="Mayank Kumar"
              className="about-profile-img"
            />
            <span className="about-profile-badge">AVAILABLE FOR HIRE</span>
          </div>
          <div className="about-text-section">
            <p className="para">
              DevOps Engineer with 2+ years of experience in designing robustly scalable and reliable infrastructure.
              Proven expertise in streamlining deployment processes via robust CI/CD pipelines and ensuring
              comprehensive observability through advanced monitoring and logging. Adept at rapid troubleshooting
              and debugging to maintain high system availability and operational excellence.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
