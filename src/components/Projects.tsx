function Projects() {
  return (
    <div>
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="skill-card">
                <h5 className="fw-800 mb-4">Backend & Cloud</h5>
                <div className="d-flex flex-wrap">
                  <span className="tech-pill">Node.js</span>{" "}
                  <span className="tech-pill">Express</span>
                  <span className="tech-pill">Java (Spring Boot)</span>
                  <span className="tech-pill">REST APIs</span>
                  <span className="tech-pill">AWS (EC2/S3)</span>{" "}
                  <span className="tech-pill">Nginx</span>
                  <span className="tech-pill">MySQL</span>{" "}
                  <span className="tech-pill">MS SQL</span>
                  <span className="tech-pill">Core PHP</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">
                <h5 className="fw-800 mb-4">Frontend & Mobile</h5>
                <div className="d-flex flex-wrap">
                  <span className="tech-pill">React Native</span>
                  <span className="tech-pill">React.js</span>
                  <span className="tech-pill">Flutter</span>{" "}
                  <span className="tech-pill">JavaScript (ES6+)</span>
                  <span className="tech-pill">HTML5/CSS3</span>{" "}
                  <span className="tech-pill">Bootstrap</span>
                  <span className="tech-pill">Swig Templates</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">
                <h5 className="fw-800 mb-4">AI & Advanced Tech</h5>
                <div className="d-flex flex-wrap">
                  <span className="tech-pill">LLM Integration</span>{" "}
                  <span className="tech-pill">AI Chatbots</span>
                  <span className="tech-pill">Advanced Analytics</span>{" "}
                  <span className="tech-pill">Automation</span>
                  <span className="tech-pill">Performance Optimization</span>
                  <span className="tech-pill">Socket.io</span>{" "}
                  <span className="tech-pill">Cloud APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Strategic Impact & Major Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="project-card shadow-sm">
                <span className="impact-badge mb-3 d-inline-block">
                  65% Performance Boost
                </span>
                <h4 className="fw-bold">LMS Global Platforms (Multi-Market)</h4>
                <p className="text-secondary small">
                  <strong>Stack:</strong> Node.js, Express, React, MySQL, AWS |{" "}
                  <strong>Scale:</strong> 1,000+ Concurrent Users
                </p>
                <p className="text-secondary small">
                  Unified learning management ecosystem serving multiple markets
                  with AI-powered recommendations, video streaming with
                  transcription, interactive quizzes, ePortfolio systems, and
                  real-time notifications. Optimized queries reduced processing
                  by 90%.
                </p>
                <p className="text-secondary small mt-2">
                  <strong>Key Implementations:</strong>
                </p>
                <ul className="text-secondary small">
                  <li>
                    <strong>eLearning:</strong> Multi-language support
                    (English/Hungarian) with AI chatbots. Advanced features with
                    speech recognition and accessibility
                  </li>
                  <li>
                    <strong>MIS:</strong> Enterprise management with e-commerce
                    and CRM. Multi-site assessment with Google Workspace
                    integration
                  </li>
                  <li>
                    <strong>Admissions:</strong> Document automation and
                    application workflows
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card shadow-sm">
                <span className="impact-badge mb-3 d-inline-block">
                  AI Integration
                </span>
                <h4 className="fw-bold">AssessPro (US Market)</h4>
                <p className="text-secondary small">
                  <strong>Client:</strong> US-based EdTech |{" "}
                  <strong>Stack:</strong> Node.js, Express, MySQL, AWS
                </p>
                <p className="text-secondary small">
                  Multi-organization assessment platform with efficiency
                  optimization. Reduced high-volume result generation from hours
                  to minutes using automated node-cron pipelines. Handles
                  complex assessment workflows with advanced analytics and
                  reporting.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card shadow-sm">
                <span className="impact-badge mb-3 d-inline-block">
                  AI-Powered Property
                </span>
                <h4 className="fw-bold">AI Letting Rental (Dubai)</h4>
                <p className="text-secondary small">
                  <strong>Market:</strong> Middle East | <strong>Stack:</strong>{" "}
                  React Native, Node.js, AWS
                </p>
                <p className="text-secondary small">
                  Comprehensive property management application featuring
                  AI-driven ROI insights, multilingual support, secure document
                  handling, real-time property analytics, and intelligent
                  investment recommendations for global property investors.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card shadow-sm">
                <span className="impact-badge mb-3 d-inline-block">
                  AI-Powered SaaS
                </span>
                <h4 className="fw-bold">BeasyBot AI Chat Platform</h4>
                <p className="text-secondary small">
                  <strong>Stack:</strong> Node.js, React, Cloud APIs
                </p>
                <p className="text-secondary small">
                  Embeddable, cross-domain AI chatbot SaaS with secure tokenized
                  access, multi-client support, real-time conversations, and
                  enterprise integration capabilities for diverse business use
                  cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
