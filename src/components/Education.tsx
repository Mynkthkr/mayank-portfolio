import "./styles/Education.css";

const Education = () => {
    return (
        <div className="edu-section" id="education">
            <div className="edu-container section-container">
                <div className="edu-header">
                    <h5 className="edu-label">// education_and_certifications</h5>
                    <h2>
                        Education <span>&</span>
                        <br />Certifications
                    </h2>
                </div>

                <div className="edu-grid">
                    <div className="edu-card edu-card-main">
                        <div className="edu-card-badge">DEGREE</div>
                        <h3>B.Tech in Computer Science Engineering</h3>
                        <h4>ABESIT College of Engineering</h4>
                        <span className="edu-year">2018 — 2022</span>
                    </div>

                    <div className="edu-card">
                        <div className="edu-card-badge edu-badge-cert">CERTIFICATION</div>
                        <h3>AWS Certified Solutions Architect – Associate</h3>
                        <h4>Amazon Web Services</h4>
                        <span className="edu-year">Oct 2023 — Oct 2026</span>
                        <div className="edu-cert-badge">
                            <span>✓</span> Verified & Active
                        </div>
                    </div>

                    <div className="edu-card">
                        <div className="edu-card-badge edu-badge-training">TRAINING</div>
                        <h3>Industry Relevant AWS Training Program</h3>
                        <h4>Professional Cloud Training</h4>
                        <span className="edu-year">Apr 2022 — Present</span>
                    </div>

                    <div className="edu-card">
                        <div className="edu-card-badge edu-badge-school">SCHOOL</div>
                        <h3>Intermediate School</h3>
                        <h4>Priyanka Modern Sr. Sec. School</h4>
                        <span className="edu-year">2015 — 2017</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
