import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import ForgetPassword from './pages/auth/forget-password/ForgetPassword';
import ResetPassword from './pages/auth/reset-password/ResetPassword';
import Todo from './components/todo/Todo';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
