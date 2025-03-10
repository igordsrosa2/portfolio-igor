import React from "react";
import styles from "./SkillsStyles.module.css";

import pandasIcon from "../../assets/pandas.svg";
import pythonIcon from "../../assets/python.svg";
import powerBIIcon from "../../assets/powerbi.svg";
import sqlIcon from "../../assets/sql.svg";
import excelIcon from "../../assets/excel.svg";
import numpyIcon from "../../assets/numpy.svg";
import matplotlibIcon from "../../assets/matplotlib.svg";
import seabornIcon from "../../assets/seaborn.svg";
import gitIcon from "../../assets/git.svg";
import githubIcon from "../../assets/github.svg";
import scikitylearn from "../../assets/scikit-learn.svg";
import java from "../../assets/java.svg";
import node from "../../assets/node.svg";
import react from "../../assets/reactt.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import ts from "../../assets/ts.svg";

const skills = [
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: java },
  { name: "Node", icon: node },
  { name: "React", icon: react },
  { name: "HTML", icon: html },
  { name: "Css", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "SQL", icon: sqlIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Power BI", icon: powerBIIcon },
  { name: "Excel", icon: excelIcon },
  { name: "Pandas", icon: pandasIcon },
  { name: "NumPy", icon: numpyIcon },
  { name: "Matplotlib", icon: matplotlibIcon },
  { name: "Seaborn", icon: seabornIcon },
  { name: "Scikit-Learn", icon: scikitylearn },
];

function Skills() {
  return (
    <section id="skills">
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.container}>
        <ul className={styles.skillList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className={styles.icon}
              />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
