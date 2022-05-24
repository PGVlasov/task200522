import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UserListPage } from "./pages/UserListPage";
import { UserPage } from "./pages/UserPage";
import { PostPage } from "./pages/PostPage";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { NotFound404 } from "./pages/NotFound404";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<UserListPage />} path="/" />
            <Route element={<UserPage />} path="/userPage/:id" />
            <Route element={<PostPage />} path="users/:userId/posts/:postId" />
            <Route element={<NotFound404 />} path="*" />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
