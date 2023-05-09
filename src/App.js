import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
