import React, { useContext, useState } from "react";
import { ListHandlingContext } from "../store/ListHandlingProvider";
import styles from "./ProjectList.module.css";

const ProjectList = () => {
  
  const ctx = useContext(ListHandlingContext);

  const projectOpener = (currVal) => {
    ctx.setCurrentObject(currVal);
    ctx.changeContent(2);
  
  };
  return (
    
    <ul className={styles.wrapper}>
      {ctx.mainList.map((currVal) => {
        return (
          <li
            key={Math.random()}
            className={`${styles.listItem} ${
              ctx.currentObject !== undefined &&
              ctx.currentObject.title.trim() === currVal.title.trim()
                ? styles.listItemSelected
                : ""
            }`}
            onClick={() => projectOpener(currVal)}
          >
            {currVal.title}
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
