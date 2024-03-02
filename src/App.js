import "./App.css";
import { Route, Routes } from "react-router-dom";
import { FoodForm } from "./components/foods/food-form/FoodForm";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import { FoodDetails } from "./components/foods/food-details/FoodDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<FoodForm/>} />
          <Route path="/details/:id" element={<FoodDetails/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
