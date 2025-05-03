import Navigation from "./Navigation"
import Cart from "./Cart"
import logo from "../assets/logo-1.png"

export default function Header() {
    return (
        <header className="flex justify-around items-center p-4">
         
            <Navigation />
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <Cart />
        </header>
    )
}