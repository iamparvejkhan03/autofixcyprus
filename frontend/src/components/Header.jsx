import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container, LanguageSwitcher } from "./";
import { useEffect, useState } from "react";
import { closeIcon, menuIcon } from "../assets";
import { useSelector } from "react-redux";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const language = useSelector(state => state.language);

    const navLinks = [
        { name: `${language === 'en' ? 'Home' : 'Αρχική'}`, href: '/' },
        { name: `${language === 'en' ? 'Request Repair' : 'Αίτημα Επισκευής'}`, href: '/request-repair' },
        { name: `${language === 'en' ? 'Contact' : 'Επικοινωνία'}`, href: '/contact' },
        { name: `${language === 'en' ? 'FAQs' : 'Συχνές Ερωτήσεις'}`, href: '/faqs' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        setIsScrolled(pathname !== '/');

        pathname === '/' && window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname])
    return (
        <header className="w-full fixed top-0 left-0 z-40">
            <Container className={`flex justify-between py-5 ${isScrolled && 'shadow-lg bg-white'}`}>
                <Link to='/' className="flex gap-2 z-50">
                    <div data-lov-id="src/components/Navbar.tsx:24:12" data-lov-name="div" data-component-path="src/components/Navbar.tsx" data-component-line="24" data-component-file="Navbar.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20bg-blue-600%20rounded-lg%20flex%20items-center%20justify-center%22%7D" className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car w-4 h-4 sm:w-5 sm:h-5 text-white" data-lov-id="src/components/Navbar.tsx:25:14" data-lov-name="Car" data-component-path="src/components/Navbar.tsx" data-component-line="25" data-component-file="Navbar.tsx" data-component-name="Car" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20text-white%22%7D"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
                    </div>

                    <h2 className="text-lg lg:text-2xl font-bold">AutoFix Cyprus</h2>
                </Link>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-7">
                        {
                            navLinks.map(link => (
                                <li className="relative py-1" key={link.name}>
                                    <NavLink className={({ isActive }) => `${isActive && 'text-blue-600 after:bg-blue-600'} ${!isScrolled && !isActive ? 'text-black after:bg-black' : 'text-black after:bg-black'} after:w-0 after:rounded after:h-0.5 after:absolute after:bottom-0 after:left-0 after:content-[""] hover:after:w-full after:transition-all after:duration-150`} to={link.href}>{link.name}</NavLink>
                                </li>
                            ))
                        }
                        <LanguageSwitcher />
                        <li>
                            <Link to='tel:+35799777281' className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4 mr-2" data-lov-id="src/components/Navbar.tsx:44:14" data-lov-name="Phone" data-component-path="src/components/Navbar.tsx" data-component-line="44" data-component-file="Navbar.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>

                                +357 99 777281
                            </Link>
                        </li>

                    </ul>
                </nav>

                {/* Navlinks for smaller screens */}
                <nav onClick={() => setIsMenuOpen(false)} className={`lg:hidden bg-white absolute top-0 left-0 min-h-screen w-0 transition-all duration-200 overflow-hidden text-center flex items-center justify-center ${isMenuOpen && 'w-full'} z-40`}>
                    <ul className="">
                        {
                            navLinks.map(link => (
                                <li key={link.name} className="relative mx-5 py-2">
                                    <NavLink className={({ isActive }) => `${isActive && 'text-blue-600 after:bg-blue-600'} ${!isScrolled && !isActive ? 'text-black after:bg-black' : 'text-black after:bg-black'} after:w-0 after:rounded after:h-0.5 after:absolute after:bottom-0 after:left-0 after:content-[""] hover:after:w-full after:transition-all after:duration-150`} to={link.href}>{link.name}</NavLink>
                                </li>
                            ))
                        }
                        <li className="py-2">
                            <Link to='tel:+35799777281' className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4 mr-2" data-lov-id="src/components/Navbar.tsx:44:14" data-lov-name="Phone" data-component-path="src/components/Navbar.tsx" data-component-line="44" data-component-file="Navbar.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>

                                +357 99 777281
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="lg:hidden z-50 flex items-center gap-5">
                    <LanguageSwitcher />
                    {
                        isMenuOpen ? (<img onClick={() => setIsMenuOpen(!isMenuOpen)} src={closeIcon} alt="menu icon" className={`h-7 cursor-pointer invert-25 z-50 ${isScrolled}`} />) : (<img onClick={() => setIsMenuOpen(!isMenuOpen)} src={menuIcon} alt="menu icon" className={`h-5 cursor-pointer invert`} />)
                    }
                </div>
            </Container>
        </header>
    );
}

export default Header;