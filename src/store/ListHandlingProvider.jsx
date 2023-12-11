import React, { useRef, useState } from "react";
import Project from "./ProjectObject";

export const ListHandlingContext = React.createContext({});

//!0 is no project
//!1 is new project
//!2 is project information

//!!On closing the project info window list of projects mein selected nahi rehna chaihiye

const ListHandlingProvider = (props) => {
  const [mainList, setMainList] = useState([]);
  const [content, setContent] = useState(0);
  const [currentObject, setCurrentObject] = useState();

  const adder = (project) => {
    setMainList((prev) => {
      prev.push(project);
      return [...prev];
    });
  };

  const remover = (project) => {
    setMainList((prev) => {
      prev.splice(prev.indexOf(project), 1);
      return [...prev];
    });
  };

  const taskEditor = (task, choice) => {
    //0 is add and 1 is remove
    setMainList((prev) => {
      if (choice === 0) {
        prev[prev.indexOf(currentObject)].tasks.push(task);
      } else if (choice === 1) {
        prev[prev.indexOf(currentObject)].tasks.splice(
          prev[prev.indexOf(currentObject)].tasks.indexOf(task),
          1
        );
      }

      return [...prev];
    });
    console.log(mainList[mainList.indexOf(currentObject)]);
  };

  const changeContent = (value) => {
    setContent(value);
  };

  return (
    <ListHandlingContext.Provider
      value={{
        mainList: mainList,
        add: adder,
        remove: remover,
        taskEdit: taskEditor,
        content: content,
        changeContent: changeContent,
        currentObject: currentObject,
        setCurrentObject: setCurrentObject,
      }}
    >
      {props.children}
    </ListHandlingContext.Provider>
  );
};

export default ListHandlingProvider;
