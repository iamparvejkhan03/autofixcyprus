import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useSelector } from "react-redux";
import { lightLogo } from "../assets";


function Footer() {
    const language = useSelector(state => state.language);

    const quickLinks = [
        { name: `${language === 'en' ? 'Home' : 'Αρχική'}`, href: '/' },
        { name: `${language === 'en' ? 'Request Repair' : 'Αίτημα Επισκευής'}`, href: '/request-repair' },
        { name: `${language === 'en' ? 'Contact' : 'Επικοινωνία'}`, href: '/contact' },
        { name: `${language === 'en' ? 'FAQs' : 'Συχνές Ερωτήσεις'}`, href: '/faqs' },
    ];

    const ourServices = [
        `${language === 'en' ? 'Accident Repair' : 'Επισκευή Ατυχήματος'}`,
        `${language === 'en' ? 'Body Work & Paint' : 'Φανοποιία & Βαφή'}`,
        `${language === 'en' ? 'Free Pickup & Delivery' : 'Δωρεάν Παραλαβή & Παράδοση'}`,
        `${language === 'en' ? 'Insurance Support' : 'Υποστήριξη Ασφαλιστικών'}`,
        `${language === 'en' ? 'Damage Assessment' : 'Εκτίμηση Ζημιάς'}`
    ];

    return (
        <footer className="bg-gray-900 text-gray-200 font-light py-12">
            <Container className=' px-6 md:px-16 lg:px-24 xl:px-32'>
                <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                    <div className='max-w-80'>
                        <Link to='/' className="flex gap-2 z-50 mb-4">
                            <img src={lightLogo} alt="logo" className="h-8" />
                        </Link>
                        <p className=''>
                            {language === 'en' ? 'Professional car repair services across Cyprus. We handle everything from accident damage to bodywork restoration with personal attention to detail.' : 'Επαγγελματικές υπηρεσίες επισκευής αυτοκινήτων σε όλη την Κύπρο. Αναλαμβάνουμε τα πάντα, από ζημιές λόγω ατυχήματος μέχρι αποκατάσταση αμαξώματος, με προσωπική προσοχή στη λεπτομέρεια.'}
                        </p>
                    </div>

                    <div>
                        <p className='text-lg text-gray-200 font-semibold'>
                            {language === 'en' ? 'Quick Links' : 'Γρήγοροι Σύνδεσμοι'}
                        </p>
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
                        <p className='text-lg text-gray-200 font-semibold'>
                            {language === 'en' ? 'Our Services' : 'Οι Υπηρεσίες μας'}
                        </p>
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
                        <p className='text-lg text-gray-200 font-semibold'>
                            {language === 'en' ? 'Contact Info' : 'Στοιχεία Επικοινωνίας'}
                        </p>
                        <ul className='mt-3 flex flex-col gap-2'>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4" data-lov-id="src/components/Footer.tsx:57:16" data-lov-name="Phone" data-component-path="src/components/Footer.tsx" data-component-line="57" data-component-file="Footer.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>

                                <Link className="hover:underline" to='tel:+35799777281'>+357 99 777281</Link>
                            </li>

                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4" data-lov-id="src/components/Footer.tsx:61:16" data-lov-name="Mail" data-component-path="src/components/Footer.tsx" data-component-line="61" data-component-file="Footer.tsx" data-component-name="Mail" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>

                                <Link className="hover:underline" to='mailto:support@autofixcyprus.com'>support@autofixcyprus.com</Link>
                            </li>

                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4" data-lov-id="src/components/Footer.tsx:65:16" data-lov-name="MapPin" data-component-path="src/components/Footer.tsx" data-component-line="65" data-component-file="Footer.tsx" data-component-name="MapPin" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>

                                <p>
                                    {language === 'en' ? 'Serving all over Cyprus' : 'Εξυπηρετούμε σε όλη την Κύπρο'}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='border-gray-300 mt-8' />
                <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                    <p>© {new Date().getFullYear()} &nbsp;
                        <Link to="/">
                        AutoFix Cyprus
                        </Link>. 
                        {language === 'en' ? ' All rights reserved. ' : 'Όλα τα δικαιώματα διατηρούνται.'}
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                            {/* Instagram */}
                            <Link to="https://www.instagram.com/autofixcyprus/">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
                                </svg>
                            </Link>
                            {/* Facebook */}
                            {/* <Link to='/'>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                                </svg>
                            </Link> */}
                        </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;