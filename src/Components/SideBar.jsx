import React from "react";
import styles from "./SideBar.module.css";
import ProjectAdderButton from "./ProjectAdderButton";
import ProjectList from "./ProjectList";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.inner}>
        <h2>YOUR PROJECTS</h2>
        <ProjectAdderButton mainText="+ Add Project" color="addButton" />
        <ProjectList />
      </div>
    </div>
  );
};

export default SideBar;
