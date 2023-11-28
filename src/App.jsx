import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/SignIn";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/signin" element={<SignIn />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
