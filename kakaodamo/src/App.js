import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Handler from "./pages/Handler";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/signin" component={Signin} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/auth/kakao/callback" element={<Auth />} />
        {/* <Route path="/auth/kakao/callback" element={<Handler />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
