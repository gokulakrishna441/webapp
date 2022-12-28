
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "./loginpage";

export default function Fblog() {
  return (
    <Router>
      <Routes>
        <Route exact path="/loginpage" element={<Login/>}></Route>
        <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}
