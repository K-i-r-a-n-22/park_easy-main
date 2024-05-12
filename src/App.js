import React from 'react';
import { BrowserRouter } from "react-router-dom";
import URLPaths from "./Components/routes";
import "./assets/css/styles.css"
import "./assets/fonts/ionicons.min.css";

function App() {
  return (
    <BrowserRouter> 
    <URLPaths class="container"/> 
    </BrowserRouter>
      );
}

export default App;
