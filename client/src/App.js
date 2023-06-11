import NavBar from "./components/NavBar/NavBar";
import { Landing, Home, Detail, Form } from "./views";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";


function App() {

  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/create" element={<Form />} />        
      </Routes>
    </div>
  );
}



export default App;
