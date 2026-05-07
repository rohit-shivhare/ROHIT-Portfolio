import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bench Sales Recruiter</h4>
                <h5>Grey Rock Technology</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Spearheaded client engagement initiatives by presenting tailored marketing strategies and value propositions to diverse audiences. Orchestrated end-to-end resume and LinkedIn profile optimization to maximize ATS scores and visibility for top-tier recruiters. Executed targeted email marketing campaigns and strategic resume marketing initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech, Computer Science</h4>
                <h5>J. G. University</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology in Computer Science. Building a strong foundation in Full-Stack Development, AI applications, databases, and network security. Actively engaged in developing hands-on projects to bridge the gap between academic theory and practical software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
