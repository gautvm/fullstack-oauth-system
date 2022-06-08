import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  console.log(user)
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
    path="/private"
    element={(
      <PrivateWrapper>
        <Private />
      </PrivateWrapper>
    )}
  />
    </Routes>
  );
}

const Private = () => {
  return (
    <div>
      this should be protected
    </div>
  )
}

export default App;
