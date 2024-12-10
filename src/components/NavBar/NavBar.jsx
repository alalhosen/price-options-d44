
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
            {
                routes.map(route => <li key={route.id}><a href={`route.path`}>{route.name}</a></li>)
            }
        </nav>
    );
};

export default NavBar;