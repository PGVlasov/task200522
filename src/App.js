import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserListPage } from "./pages/UserListPage";
import { UserPage } from "./pages/UserPage";
import { PostListPage } from "./pages/PostListPage";
import { PostPage } from "./pages/PostPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<UserListPage />} path="/" />
            <Route element={<UserPage />} path="/userPage/:id" />
            <Route element={<PostListPage />} path="/postList" />
            <Route element={<PostPage />} path="/post/:id" />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
