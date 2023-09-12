import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/cart" element={<CartPage />}/>
			</Routes>
		</BrowserRouter>
        
        <ToastContainer />
    </div>
  );
}

export default App;
