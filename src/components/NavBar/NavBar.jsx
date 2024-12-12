
const NavBar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/dashboard", name: "Dashboard" },
    ];
    return (
        <nav>
            <ul className="flex">
                {
                    routes.map(route => <li className="mr-12" key={route.id}><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;