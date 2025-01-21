import styles from './HomeStyles.module.css';
import profilePicture from '../../assets/profilePicture.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Home() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="home" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profilePicture}
          className={styles.home}
          alt="Profile picture "
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
        <a href={CV} download>
          <button className="hover">Curriculo</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
