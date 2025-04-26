import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.experienceSection}>
          <div className={styles.titleContainer}>
            <h3>Education</h3>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Bachelor's Degree / Systems Analysis and Development</h4>
              <span className={styles.experiencePeriod}>02/2018 – 12/2019</span>
            </div>
            <p>IFSC - Instituto Federal de Santa Catarina</p>
          </div>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Bachelor's Degree / Information Systems</h4>
              <span className={styles.experiencePeriod}>02/2016 – 12/2017</span>
            </div>
            <p>UDESC - Universidade do Estado de Santa Catarina</p>
          </div>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Bachelor's Degree / Systems Analysis and Development</h4>
              <span className={styles.experiencePeriod}>09/2024 – present</span>
            </div>
            <p>UNIP - Universidade Paulista</p>
          </div>
        </div>
        
        <div className={styles.experienceSection}>
          <div className={styles.titleContainer}>
            <h3>Professional Experience</h3>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Customer Service, Quiker</h4>
              <span className={styles.experiencePeriod}>12/2024 – present</span>
            </div>
            <p>São Paulo, Brazil</p>
            <p>
              I am responsible for onboarding major clients, such as LATAM, BOSCH, Weidmüller, 
              B3, and NESTLÉ, onto the innovation program management platform. I provide 
              continuous support to these clients, ensuring an excellent user experience, and 
              collaborate with the team in developing automation solutions to optimize processes.
            </p>
          </div>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Summer Exchange Program - Work Experience, Lakeside Beach Grill</h4>
              <span className={styles.experiencePeriod}>04/2024 – 09/2024</span>
            </div>
            <p>California, US</p>
            <p>Server/Bartender</p>
          </div>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Winter Exchange Program - Work Experience, Vail Resorts</h4>
              <span className={styles.experiencePeriod}>2019, 2023, 2024</span>
            </div>
            <p>California, US</p>
            <p>Lift Operator</p>
          </div>
        </div>
        
        <div className={styles.skills}>
          <div className={styles.titleContainer}>
            <h3>Skills</h3>
          </div>
          <div className={styles.skillTags}>
            <span className={styles.skillTag}>GO</span>
            <span className={styles.skillTag}>AI automation</span>
            <span className={styles.skillTag}>n8n automations</span>
            <span className={styles.skillTag}>Git</span>
            <span className={styles.skillTag}>JavaScript</span>
            <span className={styles.skillTag}>React</span>
            <span className={styles.skillTag}>Fluent English</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 