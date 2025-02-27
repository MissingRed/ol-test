import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Crear from "./components/Datos_generales";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/crear" element={<Crear />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
