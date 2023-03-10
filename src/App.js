import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCvzvC8dIoOmKvqBZdWpWHcvV2PHsrj7Q8",
    authDomain: "blessed-main.firebaseapp.com",
    projectId: "blessed-main",
    storageBucket: "blessed-main.appspot.com",
    messagingSenderId: "533261897520",
    appId: "1:533261897520:web:140fe9badd0a3a037782f5"
  };
  const app = initializeApp(firebaseConfig);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
