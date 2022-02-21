import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Routes
import Login from './pages/Login'
import MyApp from './pages/MyApp'

// Auth
import { getUser } from './services/auth.service'

function App() {

  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    if (!getUser()) return <Navigate to="/login" />
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/myapp" element={<PrivateRoute><MyApp /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
