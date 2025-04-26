import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gustavo De Pieri | Full Stack Developer</title>
        <meta name="description" content="Gustavo De Pieri - Full Stack Developer portfolio showcasing projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
} 