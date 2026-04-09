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
                <h4>B.E. in Electronics & Telecomm. (Honors in AI & ML)</h4>
                <h5>ST Francis Institute of Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Graduated with a Bachelor of Engineering in Electronics and Telecommunication.
              Completed an Honors program in Artificial Intelligence & Machine Learning, building a
              strong foundation in data science, predictive modeling, and analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Internship</h4>
                <h5>Internshala</h5>
              </div>
              <h3>JUL 2024</h3>
            </div>
            <p>
              Developed and evaluated machine learning models for classification and regression using real-world datasets and Scikit-learn. Performed data cleaning, feature engineering, and model validation to improve model accuracy and reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Executive</h4>
                <h5>Infinity Learn</h5>
              </div>
              <h3>DEC 2024</h3>
            </div>
            <p>
              Trained learners in Python, covering data preprocessing, EDA, and basic machine learning workflows. Applied Pandas, NumPy, Matplotlib, and Scikit-learn to analyze data, build basic models, and generate actionable insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
