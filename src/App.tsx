import { Footer } from "./components/footer";
import { Main } from "./components/main";
import { Nav } from "./components/nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
function App() {
  return (
 <Router>
      <div className="flex flex-col min-h-screen"> 
        <Nav />
        
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
