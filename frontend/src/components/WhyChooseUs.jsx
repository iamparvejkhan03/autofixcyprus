import { useSelector } from "react-redux";
import { whyChooseUs } from "../assets";

function WhyChooseUs() {
    const language = useSelector(state => state.language);

    return (
        <section>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {language === 'en' ? 'Why Choose AutoFix Cyprus?' : 'Γιατί να επιλέξετε το AutoFix Cyprus;'}
                    </h2>
                    {/* <p className="text-xl text-gray-600 mb-8 leading-relaxed">We're not just another repair shop. We're your personal car care specialists, committed to making the repair process as smooth and stress-free as possible.</p> */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-blue-600">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {language === 'en' ? 'No Hidden Charges' : 'Χωρίς Κρυφές Χρεώσεις'}
                                </h3>
                                <p className="text-gray-600">
                                    {language === 'en' ? 'Transparent pricing with detailed quotes before any work begins. What we quote is what you pay.' : 'Διαφανής τιμολόγηση με αναλυτική προσφορά πριν ξεκινήσει οποιαδήποτε εργασία. Αυτό που σας λέμε, αυτό πληρώνετε.'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-blue-600">
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {language === 'en' ? 'Expert Craftsmen' : 'Εξειδικευμένοι Τεχνίτες'}
                                </h3>
                                <p className="text-gray-600">
                                    {language === 'en' ? 'Certified technicians with years of experience in accident repair, insurance claims, and bodywork restoration.' : 'Πιστοποιημένοι τεχνικοί με πολυετή εμπειρία σε επισκευές ατυχημάτων, ασφαλιστικές απαιτήσεις και αποκατάσταση αμαξώματος.'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-blue-600">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {language === 'en' ? 'Fast Service' : 'Γρήγορη Εξυπηρέτηση'}
                                </h3>
                                <p className="text-gray-600">
                                    {language === 'en' ? 'Most repairs completed within 3-5 business days, with emergency services available when needed.' : 'Οι περισσότερες επισκευές ολοκληρώνονται μέσα σε 3–5 εργάσιμες ημέρες, με δυνατότητα άμεσης εξυπηρέτησης σε επείγουσες περιπτώσεις.'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-blue-600">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {language === 'en' ? 'Personal Service' : 'Προσωπική Εξυπηρέτηση'}
                                </h3>
                                <p className="text-gray-600">
                                    {language === 'en' ? 'Direct communication with the team throughout the process - no call centers or automated responses.' : 'Άμεση επικοινωνία με την ομάδα καθ’ όλη τη διάρκεια της διαδικασίας – χωρίς τηλεφωνικά κέντρα ή αυτοματοποιημένες απαντήσεις.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={whyChooseUs} alt="Professional garage with modern equipment" className="rounded-2xl shadow-2xl w-full" />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">500+</div>
                                <div className="text-sm text-gray-500">
                                    {language === 'en' ? 'Cars Repaired' : 'Αυτοκίνητα Επισκευάστηκαν'}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;