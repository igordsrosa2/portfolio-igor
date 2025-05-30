import React from "react";
import styles from "./ProjectsStyles.module.css";

// Importe as imagens dos projetos
import logoUefa from "../../assets/logouefa.png";
import nike from "../../assets/logonike.png";
import logoTEF from "../../assets/logoTEF.png";

const projects = [
  {
    id: 1,
    name: "UEFA CHAMPIONS LEAGUE",
    image: logoUefa,
    description:
      "Análise e exploração do conjunto de dados que contém as principais estatísticas dos jogadores da temporada 2021-22 da Liga dos Campeões da UEFA .",
    link: "https://github.com/igordsrosa2/ucl22-analysis",
    link2:
      "https://app.powerbi.com/view?r=eyJrIjoiYzM0MmViNzItMzU5NC00OWMwLTk1MjQtOTM3NDhmYTRlZTZmIiwidCI6IjdjZDc0M2Y4LTA5MTgtNGU2OC04NGU5LTlkY2Q4MmU0ODBhZiJ9",
  },
  {
    id: 2,
    name: "Nike Global Sales",
    image: nike,
    link: "https://github.com/igordsrosa2/nike-analysis",
    link2:
      "https://app.powerbi.com/view?r=eyJrIjoiNzkyYmY1NjQtMmYyOC00YWZkLTkyYzAtODI4ZmYxYzc4YzNkIiwidCI6IjdjZDc0M2Y4LTA5MTgtNGU2OC04NGU5LTlkY2Q4MmU0ODBhZiJ9",
    description:
      "Análise dos dados de vendas da Nike no ano de 2024, com o objetivo de entender o desempenho da marca em diferentes mercados e identificar tendências de consumo.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.sectionTitle}>Projetos</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.projectImage}
            />
            <div className={styles.projectInfo}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <h3 className={styles.desenvolvimento}>{project.sub}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Acessar o repositório
              </a>
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
