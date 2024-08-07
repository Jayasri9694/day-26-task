import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Nav"
import All from "./All"
import Career from "./Career"
import CyberSecurity from "./CyberSecurity"
import DataScience from "./DataScience"
import FullStackDevelopment from "./FullStackDevelopment"
//import {BrowserRouter,Router,Route,Routes} from "react-router-dom"//

function App() {
    return (
      <div>
        <Nav></Nav>
        <All/>
        <Career/>
        <CyberSecurity/>
        <DataScience/>
        <FullStackDevelopment/>
        
      </div>
    )
  }
export default App
