import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-6xl m-auto flex justify-between">
                <div className="flex flex-wrap justify-between p-4">
                    
                    <Link to="/"
                        className='flex items-center'>
                        <img src="./store_icon.png" alt="Ecommerce Store" className="w-14"/>
                        <span className='text-4xl font-roboto text-purple-700'>ecommerce</span>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <Link to="/cart"
                        className='bg-purple-700 py-3 px-4 text-white'>
                        <ShoppingCartIcon />    
                        <span className='ml-1'>Carrito</span>
                    </Link>

                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;