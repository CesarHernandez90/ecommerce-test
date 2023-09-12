import React from 'react';
import Axios from 'axios';

import ProductComponent from './ProductComponent';
import ProductDetailComponent from './ProductDetailComponent';
import { IProduct } from '../models/IProduct';

const ProductsListComponent = () => {

    const [db, setdb] = React.useState([]);
    React.useEffect(() => {
        Axios.get('https://fakestoreapi.com/products').then(res => {
            setdb(res.data);
        });
    }, []);

    const [selectedProduct, setSelectedProduct] = React.useState({});

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = (product: IProduct) => {
        setSelectedProduct(product);
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return <div>

        <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {db.map((product: IProduct, index) => (
                <div onClick={() => openModal(product)} key={index}>
                    <ProductComponent {...product}/>
                </div>
            ))}
        </div>

        <ProductDetailComponent modal={{modalIsOpen, openModal, closeModal}} product={selectedProduct}/>
    </div>
}

export default ProductsListComponent;