import React from 'react';
import styles from './ProjectsStyles.module.css';

// Importe as imagens dos projetos
import ucl from '../../assets/logoucl.svg';
import nike from '../../assets/nike.svg';

const projects = [
  {
    id: 1,
    name: "UEFA CHAMPIONS LEAGUE",
    sub: "⠀",
    image: ucl,
    description: "Análise e exploração do conjunto de dados que contém as principais estatísticas dos jogadores da temporada 2021-22 da Liga dos Campeões da UEFA .",
    link: "https://github.com/igordsrosa2/ucl22-analysis",
    link2: "https://app.powerbi.com/view?r=eyJrIjoiYzM0MmViNzItMzU5NC00OWMwLTk1MjQtOTM3NDhmYTRlZTZmIiwidCI6IjdjZDc0M2Y4LTA5MTgtNGU2OC04NGU5LTlkY2Q4MmU0ODBhZiJ9"
  },
  {
    id: 2,
    name: "Nike Global Sales",
    sub: "Em Desenvolvimento ",
    image: nike,
    description: "Projeto em construção para análise e exploração das tendências globais de vendas da Nike em todas as regiões e categorias em 2024.",
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.sectionTitle}>Projetos</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.name} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3>{project.name}</h3>
              <h3 className={styles.desenvolvimento}>{project.sub}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Acessar o repositório
              </a>
              <br /><br />
              <a href={project.link2} target="_blank" rel="noopener noreferrer2">
                Acessar o dashboard
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
