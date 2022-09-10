import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Protected } from "./pages/Protected";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/protected"
        element={
          <ProtectedRoute>
            <Protected />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
