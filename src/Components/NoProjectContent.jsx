import React from "react";
import styles from "./NoProjectContent.module.css";
import noProjects from "../assets/no-projects.png";
import ProjectAdderButton from "./ProjectAdderButton";

const NoProjectContent = () => {
  return (
    <div className={styles.wrapper}>
      <img src={noProjects} />
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <ProjectAdderButton
        mainText="Create New Project"
        color="createNewProject"
      />
    </div>
  );
};

export default NoProjectContent;
