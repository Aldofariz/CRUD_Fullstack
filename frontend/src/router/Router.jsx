import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import AddData from "../pages/AddData";
import EditData from "../pages/EditData";
import View from "../pages/ViewData";

const Router = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route exact path="/" element= { <Home /> } />
                        <Route path="/add" element= { <AddData /> } />
                        <Route path="/edit/:id" element= { <EditData /> } />
                        <Route path="/view" element= { <View /> } />
                  </Routes>
            </BrowserRouter>
      );
};

export default Router;