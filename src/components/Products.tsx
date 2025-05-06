import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import Button from './Button';
const ProductItems = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: '$10.00',
        image: Product1,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: '$20.00',
        image: Product2,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        price: '$30.00',
        image: Product3,
    },
];
export default function Products() {
    return (
        <div className="flex flex-col px-48 py-24 bg-[#fbf6f4] items-center">
            <h2 className='text-6xl '>Products</h2>
            <div className='flex'>
            {ProductItems.map((product) => (
                <div key={product.id} className="w-1/3 mx-7 my-12 flex flex-col items-center gap-6 bg-white p-6 py-10">
                    <img src={product.image} alt={product.name}/>
                    <h3 className='text-4xl'>{product.name}</h3>
                    <p className='text-[#acacab] font-semibold text-[1.2rem]'>{product.price}</p>
                    <Button text='Select Options'/>
                </div>
            ))}
            </div>
               
        </div>
    )
}