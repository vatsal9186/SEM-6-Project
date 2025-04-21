import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Side from "./Components/Side";
import AddCategory from "./Components/All Category/AddCategory";
import Second from "./Components/All Category/Second";
import Sidebar from "./Components/SideBar/SideBar";

function App() {
  return (
    <>
      <Router>
        <Side />
        <Routes>
          <Route path="/addcategory" element={<AddCategory />} />
          <Route Path='/manageproduct' element={<Second/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;