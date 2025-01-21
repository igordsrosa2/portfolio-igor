import React from 'react';
import styles from './ProjectsStyles.module.css';

// Importe as imagens dos projetos
import ucl from '../../assets/logoucl.png';

const projects = [
  {
    id: 1,
    name: "UEFA CHAMPIONS LEAGUE",
    image: ucl,
    description: "Análise e exploração dos dados da UCL 21/22",
    link: "https://github.com/igordsrosa2/ucl22-analysis",
  },
  {
    id: 2,
    name: "UEFA CHAMPIONS LEAGUE",
    image: ucl,
    description: "Análise e exploração dos dados da UCL 21/22",
    link: "https://github.com/igordsrosa2/ucl22-analysis",
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.sectionTitle}>Meus Projetos</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.name} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Acessar o repositório
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
