import { Routes, Route } from "react-router-dom";
import {
  Login,
  Main,
  Profile,
  Register,
  RegisterSubmit,
  Search,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/submit" element={<RegisterSubmit />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
