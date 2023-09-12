import React from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { Star } from '@mui/icons-material';
import { IModal } from '../models/IModal';
import { IProduct } from '../models/IProduct';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const ProductDetailComponent = ({modal, product}: {modal: IModal, product: IProduct}) => {

    const [count, setCount] = React.useState(1);
    const onAddToCart = (value: number) => {

        if(value <= 0) {
            return;
        }

        setCount(value);

        let storage = sessionStorage.getItem('ecommerce_cart');
        let cart: any = {};

        if(storage) {
            cart = JSON.parse(storage);
        } 

        const getTotal = cart[`${product.id}`] ?? 0;
        cart[`${product.id}`] = parseInt(getTotal, 10) + count;

        sessionStorage.setItem('ecommerce_cart', JSON.stringify(cart));

        if(count === 1) {
            toast(`El producto se agregó al carrito`);
        } else {
            toast(`Se agregaron ${count} productos al carrito`);
        }

        modal.closeModal();
    }

    const onInputChange = (event: any) => {
        setCount(Number(event.target.value))
    }

    return (
        <div>
            <Modal
                isOpen={modal.modalIsOpen}
                onRequestClose={modal.closeModal}
                onAfterOpen={() => setCount(1)}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className='p-4 flex flex-wrap md:flex-nowrap max-w-5xl'>
                    <div className='mr-8 flex w-full md:w-auto mb-10 justify-center md:border-r-2 border-0'>
                        <img className='max-w-[210px] mr-0 md:mr-10' src={product.image} alt={product.title} />
                    </div>
                    <div className=''>
                        <h1 className='text-lg font-semibold'>{product.title}</h1>
                        <div className='flex flex-row'>
                            <span className='text-base capitalize text-red-600 mr-4'>{product.category}</span>
                            <div className='flex align-middle'>
                                <Star />
                                <span className='ml-1'>{product.rating?.rate}</span>
                            </div>
                        </div>
                        <p className='my-4'>{product.description}</p>
                        <span className='text-3xl'>$ {product.price}</span>
                        <div className='mt-6'>
                            <input type="number" value={count}
                                onChange={onInputChange}
                                className='mr-1 w-14 decoration-transparent hover:outline-none' />
                            <button onClick={() => onAddToCart(count)}
                                className='bg-blue-600 py-2 px-4 text-white ml-3'>
                                Añadir al carrito
                            </button>
                            <p className='mt-2 text-gray-500'>quedan {product.rating?.count}</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProductDetailComponent;