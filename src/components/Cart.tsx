import BlackBasket from '../assets/shopping-basket-1.png'; //#5E5250
import PinkBasket from '../assets/shopping-basket-2.png'; //#FE6787
import { useState } from 'react';

export default function Cart() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="cart border-2 border-[#5E5250] hover:border-[#FE6787] rounded-full p-2 flex justify-center items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={isHovered ? PinkBasket : BlackBasket}
                alt="Cart"
                className="cart-icon"
                width={50}
            />
        </div>
    )
}