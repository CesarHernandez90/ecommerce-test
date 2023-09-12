import { Star } from '@mui/icons-material';
import { IProduct } from '../models/IProduct';

const ProductComponent = (product: IProduct) => {

    return (
    <div className='flex flex-col justify-between border-[1px] p-4 bg-white hover:cursor-pointer h-full'>
        <div className='flex items-center justify-center p-6 h-full'>
            <img className='max-h-36' src={product.image} alt={product.title} />
        </div>
        <h2 className='text-sm text-center hover:text-amber-700'>{product.title}</h2>
        <div className='flex justify-between items-center mt-4'>
            <span className='text-center text-2xl'>$ {product.price}</span>
            <div className='flex align-middle'>
                <Star />
                <span className='ml-2'>{product.rating?.rate}</span>
            </div>
        </div>
    </div>
    );
}

export default ProductComponent;