import React from "react";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/headers/Headers";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Recipes from "./pages/recipes/Recipes";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login";
import Product from "./pages/home/Product";
import Not_Fount from "./pages/not_fount/Not_Fount";
import RecipesDetailes from "./pages/recipes/RecipesDetailes";
import UsersDetailer from "./pages/users/UsersDetailer";


function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path={"/recipes"} element={<Recipes />} />
          <Route path={"/recipe/:id"} element={<RecipesDetailes />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/user/:id"} element={<UsersDetailer />} />
          <Route path={"/product/:id"} element={<Product/>} />
          <Route path={"*"} element={<Not_Fount/>} />
        </Route>
          <Route path={"/sign-in"} element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
