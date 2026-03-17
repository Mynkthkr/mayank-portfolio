import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Intern</h4>
                <h5>Rapid Innovation</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Designed secure 3-tier architecture on AWS ECS. Built and optimized CI/CD pipelines using Jenkins, reducing deployment time by ~50%. Provisioned cloud infrastructure using AWS CloudFormation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>To The New</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and implemented CI/CD pipelines using Jenkins. Implemented Kubernetes for scaling containerized apps. Managed Databricks infra with Terraform, and configured ELK/Grafana monitoring, improving incident response times by 20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
