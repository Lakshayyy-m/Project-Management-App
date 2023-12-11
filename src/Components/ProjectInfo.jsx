import React, { useContext, useRef } from "react";
import styles from "./ProjectInfo.module.css";
import { ListHandlingContext } from "../store/ListHandlingProvider";

const ProjectInfo = () => {
  const ctx = useContext(ListHandlingContext);
  const taskRef = useRef();
  let content;

  const deleter = () => {
    ctx.remove(ctx.currentObject);
    ctx.changeContent(0);
  };

  const addTask = () => {
    if (taskRef.current.value.trim() === "") {
      alert("Kindly enter a task title to add the task");
    } else {
      ctx.taskEdit(taskRef.current.value.trim(), 0);
    }
    taskRef.current.value = "";
  };

  const clearTask = (task) => {
    ctx.taskEdit(task, 1);
  };

  if (ctx.currentObject.tasks.length === 0) {
    content = "";
  } else {
    console.log(ctx.currentObject);
    content = ctx.currentObject.tasks.map((currTask) => {
      return (
        <li className={styles.taskItem}>
          <span className={styles.taskTitle}>{currTask}</span>{" "}
          <button
            className={styles.taskClear}
            onClick={() => {
              clearTask(currTask);
            }}
          >
            Clear
          </button>
        </li>
      );
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.first}>
        <h1>{ctx.currentObject.title}</h1>
        <button onClick={deleter}>Delete</button>
      </div>
      <div className={styles.second}>
        <p className={styles.date}>{ctx.currentObject.date}</p>
        <br />
        <p className={styles.description}>{ctx.currentObject.description}</p>
      </div>
      <hr className={styles.division} />
      <div className={styles.taskAdder}>
        <h2>Tasks</h2>
        <input ref={taskRef} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className={styles.tasks}>{content}</div>
    </div>
  );
};

export default ProjectInfo;
