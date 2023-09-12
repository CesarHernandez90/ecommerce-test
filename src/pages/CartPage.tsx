import NavbarComponent from "../components/NavbarComponent";
import CartListComponent from '../components/CartListComponent';

const CartPage = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="max-w-6xl m-auto my-8">
                <CartListComponent />
            </div>
        </div>
    );
}

export default CartPage;