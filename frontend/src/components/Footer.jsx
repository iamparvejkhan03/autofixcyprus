import { Link, NavLink } from "react-router-dom";
import Container from "./Container";

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Request Repair', href: '/request-repair' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
];

const ourServices = ['Accident Repair', 'Body Work & Paint', 'Free Pickup & Delivery', 'Insurance Support', 'Damage Assessment'];

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 font-light py-12">
            <Container className=' px-6 md:px-16 lg:px-24 xl:px-32'>
                <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                    <div className='max-w-80'>
                        <Link to='/' className="flex gap-2 z-50 mb-4">
                            <div data-lov-id="src/components/Navbar.tsx:24:12" data-lov-name="div" data-component-path="src/components/Navbar.tsx" data-component-line="24" data-component-file="Navbar.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20bg-blue-600%20rounded-lg%20flex%20items-center%20justify-center%22%7D" className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car w-4 h-4 sm:w-5 sm:h-5 text-white" data-lov-id="src/components/Navbar.tsx:25:14" data-lov-name="Car" data-component-path="src/components/Navbar.tsx" data-component-line="25" data-component-file="Navbar.tsx" data-component-name="Car" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20text-white%22%7D"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
                            </div>

                            <h2 className="text-lg lg:text-2xl font-bold">AutoFix Cyprus</h2>
                        </Link>
                        <p className=''>
                            Professional car repair services across Cyprus. We handle everything from accident damage to bodywork restoration with personal attention to detail.
                        </p>
                        <div className='flex items-center gap-3 mt-4'>
                            {/* Instagram */}
                            <Link to="/">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
                                </svg>
                            </Link>
                            {/* Facebook */}
                            <Link to='/'>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                                </svg>
                            </Link>
                            {/* Twitter */}
                            <Link to='/'>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
                                </svg>
                            </Link>
                            {/* LinkedIn */}
                            <Link to='/'>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className='text-lg text-gray-200 font-semibold'>Quick Links</p>
                        <ul className='mt-3 flex flex-col gap-2 '>
                            {
                                quickLinks.map(link => (
                                    <li className="relative py-1" key={link.name}>
                                        <NavLink className={({ isActive }) => `${isActive ? 'text-blue-600 after:bg-blue-600' : 'text-white after:bg-white'}`} to={link.href}>{link.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <p className='text-lg text-gray-200 font-semibold'>Our Services</p>
                        <ul className='mt-3 flex flex-col gap-2 '>
                            {
                                ourServices.map(service => (
                                    <li key={service}>
                                        <Link to='/request-repair'>{service}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='max-w-80'>
                        <p className='text-lg text-gray-200 font-semibold'>Contact Info</p>
                        <ul className='mt-3 flex flex-col gap-2'>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4" data-lov-id="src/components/Footer.tsx:57:16" data-lov-name="Phone" data-component-path="src/components/Footer.tsx" data-component-line="57" data-component-file="Footer.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>

                                <Link className="hover:underline" to='tel:+35799123785'>+357 99 123785</Link>
                            </li>

                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4" data-lov-id="src/components/Footer.tsx:61:16" data-lov-name="Mail" data-component-path="src/components/Footer.tsx" data-component-line="61" data-component-file="Footer.tsx" data-component-name="Mail" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>

                                <Link className="hover:underline" to='mailto:support@autofixcyprus.com'>support@autofixcyprus.com</Link>
                            </li>

                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4" data-lov-id="src/components/Footer.tsx:65:16" data-lov-name="MapPin" data-component-path="src/components/Footer.tsx" data-component-line="65" data-component-file="Footer.tsx" data-component-name="MapPin" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>

                                <p>Serving all over Cyprus</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='border-gray-300 mt-8' />
                <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                    <p>© {new Date().getFullYear()} <Link to="/">AutoFix Cyprus</Link>. All rights reserved.</p>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link to="/">Privacy</Link>
                        </li>
                        <li><Link to="/">Terms</Link></li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;