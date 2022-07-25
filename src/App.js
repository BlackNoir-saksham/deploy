
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import { BrowserRouter, Router, Switch, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <div className="App">
         
         <Switch>
           <Route path="/">
             <Home />
           </Route>
           <Route path="/contact">
             <Contact />
           </Route>
           <Route path="/about">
             <About />
           </Route>
         </Switch>
       </div>
     </BrowserRouter>
     <h4>saksham srivastava</h4>
    </div>
  );
}

export default App;
