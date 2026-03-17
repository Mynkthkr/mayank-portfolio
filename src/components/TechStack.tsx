import Marquee from "react-fast-marquee";

const devopsTools = [
  { name: "AWS", color: "#FF9900" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Docker", color: "#2496ED" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "Jenkins", color: "#D24939" },
  { name: "Grafana", color: "#F46800" },
  { name: "Prometheus", color: "#E6522C" },
  { name: "ELK Stack", color: "#00BFB3" },
  { name: "Helm", color: "#0F1689" },
  { name: "GoCD", color: "#94399E" },
  { name: "ArgoCD", color: "#EF7B4D" },
  { name: "CloudFormation", color: "#FF9900" },
  { name: "Python", color: "#3776AB" },
  { name: "Bash", color: "#4EAA25" },
  { name: "Git", color: "#F05032" },
  { name: "Linux", color: "#FCC624" },
  { name: "Fluentbit", color: "#49BDA5" },
  { name: "ECS / EKS", color: "#FF9900" },
  { name: "SonarQube", color: "#4E9BCD" },
  { name: "DynamoDB", color: "#4053D6" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>

      {/* First row - left to right */}
      <div style={{ marginBottom: "20px" }}>
        <Marquee
          gradient={true}
          gradientColor="#0a0e17"
          gradientWidth={100}
          speed={40}
          pauseOnHover={true}
        >
          {devopsTools.slice(0, 10).map((tool, i) => (
            <div
              key={i}
              style={{
                padding: "14px 32px",
                margin: "0 12px",
                border: `1px solid ${tool.color}30`,
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                background: `${tool.color}08`,
                color: tool.color,
                letterSpacing: "1px",
                fontWeight: 500,
                transition: "all 0.3s ease",
                cursor: "default",
                whiteSpace: "nowrap",
              }}
            >
              {tool.name}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second row - right to left */}
      <div>
        <Marquee
          gradient={true}
          gradientColor="#0a0e17"
          gradientWidth={100}
          speed={35}
          direction="right"
          pauseOnHover={true}
        >
          {devopsTools.slice(10).map((tool, i) => (
            <div
              key={i}
              style={{
                padding: "14px 32px",
                margin: "0 12px",
                border: `1px solid ${tool.color}30`,
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                background: `${tool.color}08`,
                color: tool.color,
                letterSpacing: "1px",
                fontWeight: 500,
                transition: "all 0.3s ease",
                cursor: "default",
                whiteSpace: "nowrap",
              }}
            >
              {tool.name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
