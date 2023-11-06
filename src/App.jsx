import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Posts from "./Pages/Posts/Posts";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DetailPost from "./Pages/DetailPost/DetailPost";
import {UserContextProvider} from "./Context/Usercontext"
import CreatePost from "./Pages/CreatePost/CreatePost";
import EditPost from "./Pages/EditPost/EditPost";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreatePost />}/>
            <Route path="/post/:id" element={<DetailPost/>}/>
            <Route path="/edit/:id" element={<EditPost/>}/>
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
