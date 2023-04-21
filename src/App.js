import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import ForgetPassword from './pages/auth/forget-password/ForgetPassword';
import ResetPassword from './pages/auth/reset-password/ResetPassword';
import Todo from './components/todo/Todo';
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
import ProductListing from './components/ecommerce/ProductListing';
import ProductDetail from './components/ecommerce/ProductDetail';
import ListGroup from './components/ListGroup';
import Todos, { createTodo, initialTodos } from './components/custom-todos/Todos';
import LiftingStateUp from './components/lifting-state-up/LiftingStateUp';

const App = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar />
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path='/product/:productId' exact Component={ProductDetail} />
        <Route path='/list-group' Component={ListGroup} />
        <Route path='/custom-todo' Component={Todos} />
        <Route path='/lifting-state-up' Component={LiftingStateUp} />
      </Routes>
    </>
  );
}

export default App;
