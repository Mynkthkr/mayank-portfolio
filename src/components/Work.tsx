import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Quantum Gaming",
    category: "Game Platform Infrastructure",
    tools: "GoCD, AWS API Gateway, Cognito, DynamoDB, Databricks",
    image: "/images/Solidx.png",
  },
  {
    title: "Newer's Worlds",
    category: "Microservices Architecture",
    tools: "AWS ECS, Jenkins, Helm charts, Google Chat Webhooks, ELK, Grafana",
    image: "/images/radix.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-content">
                <div className="project-info">
                  <div className="project-number">
                    <h3>0{index + 1}</h3>
                  </div>
                  <div className="project-details">
                    <h4>{project.title}</h4>
                    <p className="project-category">{project.category}</p>
                    <div className="project-tools">
                      <span className="tools-label">Tools & Features</span>
                      <p>{project.tools}</p>
                    </div>
                  </div>
                </div>
                <div className="project-image-wrapper">
                  <WorkImage image={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
