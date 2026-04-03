/**
 * Portfolio Index Page
 * Main entry point for the portfolio website
 * Contains all sections: Hero, About, Skills, Projects, Contact, Footer
 */

import { Helmet } from 'react-helmet-async';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>DevPortfolio | Aspiring Fullstack Developer</title>
        <meta 
          name="description" 
          content="Portfolio of an aspiring fullstack developer specializing in React, Laravel, and Java Spring Boot. View my projects, skills, and get in touch." 
        />
        <meta name="keywords" content="fullstack developer, react, laravel, java spring boot, web developer, portfolio" />
        <meta property="og:title" content="DevPortfolio | Aspiring Fullstack Developer" />
        <meta property="og:description" content="Portfolio showcasing projects and skills in React, Laravel, and Java Spring Boot." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Main Layout */}
      <div className="relative min-h-screen bg-background">
        {/* Fixed Navigation Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section - Full viewport height animated intro */}
          <Hero />

          {/* About Section - Bio and technologies */}
          <About />

          {/* Skills Section - Technical skills with progress bars */}
          <Skills />

          {/* Projects Section - Grid of project cards with modal */}
          <Projects />

          {/* Contact Section - Form and social links */}
          {/* <Contact /> */}
        </main>

        {/* Footer - Separate from header navigation */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Index;
