import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add(styles.animate);
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 ref={titleRef} className={styles.title}>
            <span className={styles.name}>Gustavo De Pieri</span>
            <span className={styles.role}>Full Stack Developer</span>
          </h1>
          
          <p className={styles.description}>
              I am currently looking for my first position as a developer. So far, I have only gained experience through 
              academic and personal projects. In my current job, I have created some automation workflows using n8n and 
              Power Automate. Regarding web development, I have built a few landing pages for family members.
            </p>
            <p className={styles.description}>
              I have extensive experience working in teams and in diverse environments. I adapt quickly, I am fluent in 
              English, and I am currently studying the programming language Golang in depth. I have spent a long time 
              studying JavaScript and frontend development, but now I feel it is time to invest my efforts in the backend.
            </p>
            <p className={styles.description}>
              I am highly motivated and determined to build my career, and for that reason, I am asking for an opportunity 
              to learn in a professional environment. I can guarantee that I will give my best.
            </p>
          
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 