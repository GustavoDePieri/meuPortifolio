import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ submitted: true, success: false, message: 'Sending message...' });
    
    // In a real implementation, you would send the form data to a backend API
    // This is a simulated successful submission
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
    } catch (error) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again or contact me directly.'
      });
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Contact Me</h2>
          <p>Get in touch for opportunities or just to say hello</p>
        </div>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.profileSection}>
              <div className={styles.profileImage}>
                <Image
                  src="/profile.jpg"
                  alt="Gustavo De Pieri"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <h3>Email</h3>
              <a href="mailto:contact@gustavodepieri.com">contact@gustavodepieri.com</a>
            </div>
            
            <div className={styles.contactItem}>
              <h3>Location</h3>
              <p>São Paulo, Brazil</p>
            </div>
            
            <div className={styles.contactItem}>
              <h3>Social</h3>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com/in/gustavodepieri" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="https://github.com/gustavodepieri" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Your message here..."
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
              
              {submitStatus.submitted && (
                <div className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 