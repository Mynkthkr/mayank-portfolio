import "./styles/ToolsTech.css";

const toolCategories = [
    {
        title: "Cloud Platforms",
        icon: "☁️",
        color: "#FF9900",
        tools: [
            { name: "AWS", desc: "EC2, S3, Lambda, VPC, IAM, RDS, Route53, CloudFront" },
            { name: "AWS ECS / EKS", desc: "Container orchestration & managed Kubernetes" },
            { name: "DynamoDB", desc: "NoSQL database for scalable applications" },
            { name: "CloudWatch", desc: "Monitoring, logging & alerting" },
        ],
    },
    {
        title: "Containerization & Orchestration",
        icon: "🐳",
        color: "#2496ED",
        tools: [
            { name: "Docker", desc: "Container images, Dockerfiles, multi-stage builds" },
            { name: "Kubernetes", desc: "Deployments, Services, Ingress, ConfigMaps, Secrets" },
            { name: "Helm", desc: "Custom Helm charts for K8s deployments" },
            { name: "ECS / EKS", desc: "AWS managed container services" },
        ],
    },
    {
        title: "CI/CD & Automation",
        icon: "🔄",
        color: "#D24939",
        tools: [
            { name: "Jenkins", desc: "Shared libraries, multi-branch pipelines" },
            { name: "GoCD", desc: "Pipeline-based continuous delivery" },
            { name: "ArgoCD", desc: "GitOps-based continuous deployment for K8s" },
            { name: "SonarQube", desc: "Code quality & security analysis" },
        ],
    },
    {
        title: "Infrastructure as Code",
        icon: "🏗️",
        color: "#7B42BC",
        tools: [
            { name: "Terraform", desc: "Multi-cloud infrastructure provisioning" },
            { name: "CloudFormation", desc: "AWS-native IaC templates" },
            { name: "Helm Charts", desc: "Kubernetes package management" },
        ],
    },
    {
        title: "Monitoring & Observability",
        icon: "📊",
        color: "#F46800",
        tools: [
            { name: "Grafana", desc: "Dashboards & visualization" },
            { name: "Prometheus", desc: "Metrics collection & alerting" },
            { name: "ELK Stack", desc: "Elasticsearch, Logstash, Kibana for log analysis" },
            { name: "Fluentbit", desc: "Lightweight log forwarder" },
        ],
    },
    {
        title: "Scripting & SCM",
        icon: "💻",
        color: "#4EAA25",
        tools: [
            { name: "Python", desc: "Automation scripts & tooling" },
            { name: "Bash", desc: "Shell scripting for system operations" },
            { name: "Git / GitHub / GitLab", desc: "Version control & collaboration" },
        ],
    },
];

const ToolsTech = () => {
    return (
        <div className="tools-section" id="tools">
            <div className="tools-container section-container">
                <div className="tools-header">
                    <h5 className="tools-label-tag">// tools_and_technologies</h5>
                    <h2>
                        Tools <span>&</span>
                        <br />Technologies
                    </h2>
                </div>

                <div className="tools-grid">
                    {toolCategories.map((category, idx) => (
                        <div
                            className="tools-card"
                            key={idx}
                            style={{ "--card-color": category.color } as React.CSSProperties}
                        >
                            <div className="tools-card-header">
                                <span className="tools-card-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="tools-card-body">
                                {category.tools.map((tool, i) => (
                                    <div className="tools-item" key={i}>
                                        <span className="tools-item-name">{tool.name}</span>
                                        <span className="tools-item-desc">{tool.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToolsTech;
