import styles from './HomeStyles.module.css';
import profilePicture from '../../assets/profilePicture.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Curriculo.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useState } from 'react';

function Home() {
  const { theme, toggleTheme } = useTheme();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const handlePopupToggle = () => setIsPopupOpen(!isPopupOpen);

  return (
    <section id="home" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profilePicture}
          className={styles.home}
          alt="Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Igor dos
          <br />
          Santos Rosa
        </h1>
        <h2>Análise de Dados</h2>
        <span>
          <a href="https://github.com/igordsrosa2" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/igordsrosa/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Transformando dados em decisões estratégicas e insights valiosos..
        </p>
        <div className={styles.buttons}>
        <button className="hover" onClick={handlePopupToggle}>
            Sobre Mim
          </button>
          <a href={CV} download>
            <button className="hover">Currículo</button>
          </a>
        </div>
      </div>

{/* Popup */}
{isPopupOpen && (
  <div className={styles.popupOverlay}>
    <div className={styles.popup}>
      <h3>Sobre Mim</h3>
      <div className={styles.popupContent}>
        <div className={styles.popupSection}>
          <h4>Nome</h4>
          <p>Igor dos Santos Rosa</p>
        </div>
        <div className={styles.popupSection}>
          <h4>Idade</h4>
          <p>25 anos</p>
        </div>
        <div className={styles.popupSection}>
          <h4>Formação</h4>
          <p>Curso superior de tecnologia em análise e desenvolvimento de Sistemas (JAN - 2023 / DEZ 2024) - Senai São Caetano</p><br />
          <p>Curso técnico em eletroeletrônica (JUN - 2017 / JUN 2019) - Senai Santo André</p>
        </div>
        <div className={styles.popupSection}>
          <h4>Experiência</h4>
          <p>Embora ainda não possua experiência profissional na área de TI, estou determinado a desenvolver habilidades práticas e adquirir conhecimento através de desafios e oportunidades no setor. Busco crescimento profissional e estou comprometido em contribuir ativamente para o sucesso de projetos e equipes.</p>
        </div>
      </div>
      <button onClick={handlePopupToggle} className={styles.closePopup}>
        Fechar
      </button>
    </div>
  </div>
)}
    </section>
  );
}

export default Home;
