import { useSelector } from "react-redux";
import { banner } from "../assets";
import { Container } from "./";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
    const language = useSelector(state => state.language);
    const navigate = useNavigate();

    return (
        <section className="flex items-center justify-center min-h-screen relative max-w-full overflow-x-hidden pt-32 md:pt-20 pb-14 md:pb-5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-blue-600/3" />
            <Container className="flex flex-col gap-12 lg:gap-20 z-10 w-full h-full">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-14 w-full">
                    <div className="lg:w-1/2 w-full px-2 flex flex-col items-start justify-between gap-5">
                        <p className={`inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4" data-lov-id="src/components/Hero.tsx:15:14" data-lov-name="Shield" data-component-path="src/components/Hero.tsx" data-component-line="15" data-component-file="Hero.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>

                            {
                                language === 'en' ? 'Trusted Car Repair Service In Cyprus' : 'Αξιόπιστο Συνεργείο Αυτοκινήτων στην Κύπρο'
                            }
                        </p>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"><span className="text-blue-600">{language === 'en' ? 'AutoFix Cyprus ' : 'Φροντίδα Οχήματος '}</span> {language === 'en' ? '– The Smarter Way to Handle Car Damage' : '– Ο Έξυπνος Τρόπος να Αντιμετωπίσετε τις Ζημιές του Αυτοκινήτου'}.</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">{language === 'en' ? 'Accident? Dent? Insurance delay? We pick up your car, manage everything, and deliver it back. One call. Total peace of mind.' : 'Ατύχημα; Χτύπημα; Καθυστέρηση από την ασφάλεια; Παραλαμβάνουμε το αυτοκίνητό σας, αναλαμβάνουμε τα πάντα και το παραδίδουμε πίσω. Ένα τηλεφώνημα. Απόλυτη ηρεμία.'}</p>

                        <div className="flex gap-4 flex-wrap">
                            <button onClick={() => navigate('/request-repair')} className={`inline-flex items-center justify-center whitespace-nowrap h-11 bg-blue-600 hover:bg-blue-700 text-white sm:px-8 ${language === 'gr' ? 'px-10' : 'px-4'} py-4 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl  cursor-pointer`}>
                                {language === 'en' ? 'Get Started' : 'Ξεκινήστε'}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car ml-2 w-5 h-5" data-lov-id="src/components/Hero.tsx:33:18" data-lov-name="Car" data-component-path="src/components/Hero.tsx" data-component-line="33" data-component-file="Hero.tsx" data-component-name="Car" data-component-content="%7B%22className%22%3A%22ml-2%20w-5%20h-5%22%7D"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
                            </button>
                            <Link to='tel:+35799777281' className={`inline-flex items-center justify-center gap-1 whitespace-nowrap h-11 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white sm:px-8 ${language === 'gr' ? 'px-2' : 'px-6'} py-4 text-lg font-semibold rounded-md transition-all duration-300 cursor-pointer`}>
                                {language === 'en' ? 'Contact Us' : 'Επικοινωνήστε Μαζί Μας'}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-2 w-4 h-4" data-lov-id="src/components/Hero.tsx:39:18" data-lov-name="Phone" data-component-path="src/components/Hero.tsx" data-component-line="39" data-component-file="Hero.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22mr-2%20w-5%20h-5%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </Link>
                        </div>

                        <div className="flex gap-5 sm:gap-10 flex-wrap">
                            {/* Available 24/7 */}
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4 className="text-gray-600">
                                    {language === 'en' ? 'Available 24/7' : 'Διαθέσιμοι 24/7'}
                                </h4>
                            </div>

                            {/* Free Pickup & Delivery */}
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v-2a1 1 0 011-1h3l3-6h8a1 1 0 011 1v5h3.5a.5.5 0 01.5.5V16M5 20h.01M19 20h.01M7 20a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <h4 className="text-gray-600">
                                    {language === 'en' ? 'Free Pickup & Delivery' : 'Δωρεάν Παραλαβή & Παράδοση'}
                                </h4>
                            </div>

                            {/* Insurance Support */}
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l7 4v5c0 5.25-3.5 9.25-7 11-3.5-1.75-7-5.75-7-11V6l7-4z" />
                                </svg>
                                <h4 className="text-gray-600">
                                    {language === 'en' ? 'Insurance Support' : 'Υποστήριξη Ασφάλισης'}
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 h-full lg:h-96 xl:h-120 relative">
                        <img src={banner} alt="" className="rounded-2xl shadow-2xl shadow-blue-200 w-full h-full object-cover" />

                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg gap-4 hidden sm:flex">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-blue-600" data-lov-id="src/components/Hero.tsx:65:20" data-lov-name="Shield" data-component-path="src/components/Hero.tsx" data-component-line="65" data-component-file="Hero.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20text-blue-600%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                            </div>

                            <div>
                                <h5 className="font-semibold">
                                    {language === 'en' ? 'Fully Insured' : 'Πλήρως Ασφαλισμένο'}
                                </h5>
                                <p>
                                    {language === 'en' ? 'Licensed & Certified' : 'Αδειοδοτημένο και Πιστοποιημένο'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default Hero;