import React, { useContext } from "react";
import styles from "./ProjectAdderButton.module.css";
import { ListHandlingContext } from "../store/ListHandlingProvider";

const ProjectAdderButton = (props) => {
  const ctx = useContext(ListHandlingContext);

  const switchScene = (val) => {
    ctx.changeContent(val);
    ctx.setCurrentObject();
  };

  return (
    <button
      className={
        props.color === "addButton"
          ? styles.addButton
          : styles.createProjectButton
      }
      onClick={() => switchScene(1)}
    >
      {props.mainText}
    </button>
  );
};

export default ProjectAdderButton;
