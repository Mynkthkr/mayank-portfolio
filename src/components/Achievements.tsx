import "./styles/Achievements.css";

const achievements = [
    {
        icon: "⭐",
        title: "Star Performance of the Month",
        desc: "Recognized for outstanding achievements in April 2024 and October 2023, demonstrating exceptional dedication and contributions to the client.",
        date: "Apr 2024 & Oct 2023",
    },
    {
        icon: "🏅",
        title: "Most Impactful Team Award",
        desc: "Awarded the Team Award for significant contributions to the success of the Most Impactful Team during Q4 FY'23.",
        date: "Q4 FY'23",
    },
    {
        icon: "🎖️",
        title: "Multiple REAP Awards",
        desc: "Reward, Earn, Acknowledge, Praise — Multiple recognitions from team members for consistent high-quality contributions and collaboration.",
        date: "Ongoing",
    },
    {
        icon: "📜",
        title: "AWS Certified Solutions Architect",
        desc: "Earned the AWS Solutions Architect – Associate certification, validating expertise in designing distributed systems on AWS.",
        date: "Oct 2023 – Oct 2026",
    },
];

const Achievements = () => {
    return (
        <div className="achieve-section" id="achievements">
            <div className="achieve-container section-container">
                <div className="achieve-header">
                    <h5 className="achieve-label">// achievements_and_awards</h5>
                    <h2>
                        Achievements <span>&</span>
                        <br />Awards
                    </h2>
                </div>

                <div className="achieve-grid">
                    {achievements.map((item, idx) => (
                        <div className="achieve-card" key={idx}>
                            <div className="achieve-card-top">
                                <span className="achieve-icon">{item.icon}</span>
                                <span className="achieve-date">{item.date}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
