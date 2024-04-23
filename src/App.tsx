import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
// import Dashboard from './pages/dashboard';
import OrderForm from './pages/orderForm'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderForm />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


