import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { motion } from "motion/react";
function App() {
  return (
    <>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Header />
      </motion.div>

      <motion.div>
        <MainBody />
      </motion.div>
    </>
  );
}

export default App;
