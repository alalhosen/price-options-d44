import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/dashboard", name: "Dashboard" },
    ];
    return (
        <nav className="bg-yellow-200 p-6 text-black">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose />
                        : <AiOutlineMenu />
                }
            </div>
            <ul className={`absolute md:static md:flex duration-1000 ${open ?'top-16':'-top-60'} bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;