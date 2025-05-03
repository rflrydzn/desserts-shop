import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav>
            <button onClick={toggleSidebar}>☰ MENU</button>
            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close " onClick={toggleSidebar}>×</button>
                <h1 className="text-7xl mb-5">Menu</h1>
                <ul className="text-2xl">
                    <li className="my-4"><a href="#">Home</a></li>
                    <li className="my-4"><a href="#">About</a></li>
                    <li className="my-4"><a href="#">Services</a></li>
                    <li className="my-4"><a href="#">Contact</a></li>
                </ul>
            </aside>
        </nav>
    )
}