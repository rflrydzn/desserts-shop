import Navigation from "./Navigation"
import Cart from "./Cart"
import logo from "../assets/logo.jpg"
import { useState, useEffect } from "react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
            
    return (
        <header
            className={`sticky top-0 z-10 bg-white shadow-md transition-all duration-300 flex justify-around items-center ${
                isScrolled ? "py-2" : "py-6"
            }`}
        >
            <Navigation />
            <div className="logo">
                <img
                    src={logo}
                    alt="Logo"
                    width={isScrolled ? 100 : 150}
                    className="transition-all duration-300"
                />
            </div>
            <Cart />
        </header>
    )
}