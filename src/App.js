import Home from "./pages/home/Home";
import HomeAdmin from "./pages/homeAdmin/HomeAdmin";
import NewPost from "./pages/newPost/NewPost";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleAdmin from "./pages/singleAdmin/SingleAdmin";
import Categories from "./pages/categories/Categories";
import CategoriesAdmin from "./pages/categoriesAdmin/CategoriesAdmin";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home></Home>}></Route>
      <Route path="/admin" exact element={<HomeAdmin></HomeAdmin>}></Route>
      <Route path="/admin/novo-post" exact element={<NewPost></NewPost>}></Route>
      <Route path="/admin/post/:postId" exact element={<SingleAdmin></SingleAdmin>}></Route>
      <Route path="/post/:postId" exact element={<Single></Single>}></Route>

      <Route path="/categorias/:category" exact element={<Categories></Categories>}></Route>
      <Route path="/categorias/" exact element={<Categories></Categories>}></Route>


      <Route path="/admin/categorias" exact element={<CategoriesAdmin></CategoriesAdmin>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
