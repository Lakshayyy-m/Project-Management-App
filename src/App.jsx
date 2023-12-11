import SideBar from "./Components/SideBar";
import styles from "./App.module.css";
import ProjectDescription from "./Components/projectDescription";
import ListHandlingProvider from "./store/ListHandlingProvider";

function App() {
  return (
    <ListHandlingProvider>
      <main className={styles.main}>
        <SideBar />
        <ProjectDescription />
      </main>
    </ListHandlingProvider>
  );
}

export default App;
