import NavbarComponent from "../components/NavbarComponent";
import ProductListComponent from "../components/ProductListComponent";


const HomePage = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="max-w-6xl m-auto my-8">
                <ProductListComponent />
            </div>
        </div>
    );
}

export default HomePage;