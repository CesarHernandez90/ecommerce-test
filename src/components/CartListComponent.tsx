import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react';
import Axios from 'axios';
import { IProduct } from '../models/IProduct';

const CartListComponent = () => {

    const [db, setdb] = React.useState([]);
    React.useEffect(() => {
        Axios.get('https://fakestoreapi.com/products').then(res => {
            setdb(res.data);
        });
    }, []);

    let storage = sessionStorage.getItem('ecommerce_cart');
    let cart: any = [];
    let cart_total = 0;

    const api: any = {};
    db.forEach((product: IProduct) => {
        api[`${product.id}`] = product;
    });

    if(storage) {
        const json = JSON.parse(storage);
        
        for(let key in json) {
            const data = {...api[key], ...{count: json[key]}};
            cart.push(data);
            cart_total += (data.price * data.count);
        } 
    }

    const onInputChange = (e: any, index: number) => {
        
    }

    return (
        <div>
            {cart.map((product: any, index: number) => (
                <div className='flex flex-row border-[1px] p-8 bg-white justify-center md:justify-normal flex-wrap md:flex-nowrap' key={index}>
                    <div className='min-w-[200px] flex align-middle justify-center'>
                        <img className='max-h-36' src={product.image} alt={product.title} />
                    </div>
        
                    <div className='ml-0 md:ml-6 w-full mt-4 md:mt-0 flex flex-col'>
                        <h2 className='text-xl text-center md:text-left text-amber-700'>{product.title}</h2>
                        <span className='text-lg text-center md:text-left'>$ {product.price}</span>
                        <div className='mt-4 text-center md:text-left'>
                            <input type="number" 
                                value={product.count}
                                onChange={(e) => onInputChange(e, index)}
                                className='w-24 decoration-transparent hover:outline-none' />
                            <button className='py-2 px-1 ml-1'>
                                <DeleteForeverIcon />
                            </button>
                        <p className='mt-3'>Subtotal: ${product.count * (product.price ?? 1)}</p>
                        </div>
                    </div>
                    
                </div>
            ))}

            <div className='mt-10 bg-white border-[1px] flex justify-between p-4 items-center'>
                <span className='text-2xl'>Total: ${cart_total}</span>
                <button className='py-3 px-4 bg-purple-700 text-white'>Confirmar orden</button>
            </div>
        </div>
    );
}

export default CartListComponent;