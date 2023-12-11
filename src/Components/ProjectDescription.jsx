import React, { useContext } from "react";
import styles from "./ProjectDescription.module.css";
import NoProjectContent from "./NoProjectContent";
import NewProject from "./NewProject";
import ProjectInfo from "./ProjectInfo";
import { ListHandlingContext } from "../store/ListHandlingProvider";

const ProjectDescription = () => {
  const ctx = useContext(ListHandlingContext);

  let content;

  if (ctx.content === 0) {
    content = <NoProjectContent />;
  } else if (ctx.content === 1) {
    content = <NewProject />;
  } else {
    content = <ProjectInfo />;
  }

  return <div className={styles.mainContent}>{content}</div>;
};

export default ProjectDescription;
