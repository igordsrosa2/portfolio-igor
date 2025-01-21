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
    link2: "https://app.powerbi.com/reportEmbed?reportId=6e3d3e58-12e6-495f-9c6c-3f1ede6fa3a4&autoAuth=true&ctid=7cd743f8-0918-4e68-84e9-9dcd82e480af"
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
