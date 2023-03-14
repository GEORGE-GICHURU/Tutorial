import './style/dark.scss';
import Home from "./pages/home/Home";





import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);



  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route/>
            <Route
               index
               element={
                <Home />
               } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

};



export default App;
