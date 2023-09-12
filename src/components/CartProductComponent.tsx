import { ICartProduct } from '../models/ICartProduct';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartProductComponent = (product: ICartProduct) => {

    const onChange = (id: string, newValue: number) => {

    }

    return (
        <div className='flex flex-row border-[1px] p-8 bg-white justify-center md:justify-normal flex-wrap md:flex-nowrap'>
            
            <div className='min-w-[200px] flex align-middle justify-center'>
                <img className='max-h-36' src={product.image} alt={product.title} />
            </div>

            <div className='ml-0 md:ml-6 w-full mt-4 md:mt-0 flex-col'>
                <h2 className='text-xl text-center md:text-left text-amber-700'>{product.title}</h2>
                <div className='mt-4 text-center md:text-left'>
                    <input type="number" 
                        value={product.count}
                        // onChange={onInputChange}
                        className='w-24 decoration-transparent hover:outline-none' />
                    <button className='py-2 px-1 ml-1'>
                        <DeleteForeverIcon />
                    </button>
                </div>
                <p>Subtotal: {product.count * (product.price ?? 1)}</p>
            </div>
        </div>
        );
}

export default CartProductComponent;