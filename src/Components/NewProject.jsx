import React, { useContext, useRef } from "react";
import styles from "./NewProject.module.css";
import { ListHandlingContext } from "../store/ListHandlingProvider";
import Project from "../store/ProjectObject";

const NewProject = () => {
  const ctx = useContext(ListHandlingContext);

  const titleRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();

  const saveList = () => {
    if (
      titleRef.current.value.trim() === "" ||
      dateRef.current.value.trim() === "" ||
      descriptionRef.current.value.trim() === ""
    ) {
      alert("Kindly fill all the details to save the project.");
    } else {
      let newProject = new Project(
        titleRef.current.value.trim(),
        dateRef.current.value.trim(),
        descriptionRef.current.value.trim(),
        []
      );
      ctx.add(newProject);
      ctx.changeContent(0);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button className={styles.cancel} onClick={() => ctx.changeContent(0)}>
          Cancel
        </button>
        <button className={styles.save} onClick={saveList}>
          Save
        </button>
      </div>
      <div className={styles.inputs}>
        <label>TITLE</label>
        <input ref={titleRef} />
      </div>
      <div className={styles.inputs}>
        <label>DESCRIPTION</label>
        <textarea ref={descriptionRef} />
      </div>
      <div className={styles.inputs}>
        <label>DATE</label>
        <input type="date" ref={dateRef} />
      </div>
    </div>
  );
};

export default NewProject;
