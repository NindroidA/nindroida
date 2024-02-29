import React, { useState, ReactNode } from 'react';
import styles from '../styles/TemplatePage.module.css';

// Define the props type to include children
interface TemplatePageProps {
  children: ReactNode;
}

const TemplatePage: React.FC<TemplatePageProps> = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.navBar} ${navOpen ? styles.open : ''}`}>
        {/* Navigation links */}
        <a href="#" onClick={toggleNav}>Close</a>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <button onClick={toggleNav}>Menu</button>
          <h1>Header</h1>
        </div>
        {/* Here we render the children */}
        {children}
      </div>
    </div>
  );
};

export default TemplatePage;
