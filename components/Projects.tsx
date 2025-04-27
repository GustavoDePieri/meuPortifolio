import { useState } from 'react';
import styles from './Projects.module.css';

// Project data based on Gustavo's experience
const projectsData = [
  {
    id: 1,
    title: 'Automation Workflows',
    description: 'Developed automation workflows for client onboarding and process optimization using n8n and Power Automate, significantly reducing manual tasks and improving efficiency.',
    image: '/images/automation.jpg',
    tags: ['n8n', 'Power Automate', 'Workflow Automation'],
    liveLink: '#',
    githubLink: '',
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    description: 'A responsive portfolio website built with Next.js and React that showcases my projects and skills. Features smooth animations, responsive design, and a contact form.',
    image: '/images/portfolio.jpg',
    tags: ['Next.js', 'React', 'CSS Modules', 'TypeScript'],
    liveLink: '#',
    githubLink: 'https://github.com/gustavodepieri/meuPortifolio',
  },
  {
    id: 3,
    title: 'Go Backend API',
    description: 'A RESTful API built with Go that implements clean architecture principles and efficient database operations. Features middleware for authentication, logging, and error handling.',
    image: '/images/golang.jpg',
    tags: ['Go', 'REST API', 'Clean Architecture'],
    liveLink: '#',
    githubLink: 'https://github.com/GustavoDePieri/goBackendAPI',
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Projects
        </h2>
        <p className={styles.sectionDescription}>
          Here are some of my recent projects. Each showcases different skills and technologies I've worked with.
        </p>
        
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectImageContainer}>
                  <div className={styles.projectImage} style={{ backgroundImage: `url(${project.image})` }} />
                  <div className={`${styles.projectOverlay} ${hoveredId === project.id ? styles.showOverlay : ''}`} />
                </div>
                
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.projectLinks}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                        GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 