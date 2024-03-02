import "./App.css";
import { Route, Routes } from "react-router-dom";
import { FoodForm } from "./components/foods/food-form/FoodForm";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<FoodForm/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
