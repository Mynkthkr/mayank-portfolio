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
  {
    title: "AI Pulse",
    category: "Autonomous News & AI Toolkit",
    tools: "Next.js, Supabase, Google Gemini 2.5 Flash, Resend, Node-Cron",
    image: "/images/aipulse.png",
    description: "An autonomous platform that filters, rewrites, and curates daily AI news via a scheduled backend pipeline.",
    flow: "Fetch RSS → Gemini 2.5 AI Rewrite → Save to Supabase DB → Send Email via Resend",
    useCase: "Keeping developers and enthusiasts fully up to date with zero manual scrolling.",
    url: "https://your-ai-pulse-domain.vercel.app"
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
                    
                    {/* Add conditional rendering for the extra fields */}
                    {project.description && (
                      <p className="project-desc" style={{ marginTop: '12px', fontSize: '0.95rem', color: '#b3b3b3', lineHeight: 1.5 }}>
                        {project.description}
                      </p>
                    )}
                    {project.flow && (
                      <p className="project-flow" style={{ marginTop: '8px', fontSize: '0.85rem', color: '#a78bfa' }}>
                        <strong style={{ color: '#c4b5fd' }}>Flow:</strong> {project.flow}
                      </p>
                    )}
                    {project.useCase && (
                      <p className="project-useCase" style={{ marginTop: '4px', fontSize: '0.85rem', color: '#34d399' }}>
                        <strong style={{ color: '#6ee7b7' }}>Use Case:</strong> {project.useCase}
                      </p>
                    )}

                    <div className="project-tools" style={{ marginTop: project.description ? '16px' : 'auto' }}>
                      <span className="tools-label">Tools & Features</span>
                      <p>{project.tools}</p>
                    </div>

                    {project.url && (
                      <div style={{ marginTop: '20px' }}>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{ 
                            textDecoration: 'none', 
                            color: '#000', 
                            background: '#ececec', 
                            padding: '10px 20px', 
                            borderRadius: '8px', 
                            fontSize: '0.85rem', 
                            fontWeight: 700,
                            display: 'inline-block',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.background = '#fff'}
                          onMouseOut={(e) => e.currentTarget.style.background = '#ececec'}
                        >
                          Visit Website ↗
                        </a>
                      </div>
                    )}
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
