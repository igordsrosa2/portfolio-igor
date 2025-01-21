import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './ContactStyles.module.css';

const Contact = () => {
  const { theme } = useTheme(); // Acessando o tema atual

  return (
    <div className={styles.contactCard}>
      <h2>Contato</h2>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <h3>Email</h3>
          <p>igordsrosaa@gmail.com</p>
        </div>
        <div className={styles.infoItem}>
          <h3>Telefone</h3>
          <p>+55 11 96832-6487</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
