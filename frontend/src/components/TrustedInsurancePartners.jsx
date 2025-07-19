import { useSelector } from "react-redux";
import Container from "./Container";

function TrustedInsurancePartners() {
    const language = useSelector(state => state.language);
    return (
        <Container classNameName="mt-14">
            <div className="p-8 text-center border border-blue-200 rounded-lg bg-blue-50 mt-14">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart w-12 h-12 text-blue-600 mx-auto mb-4">
                    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path>
                    <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
                    <path d="m2 15 6 6"></path>
                    <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === 'en' ? 'Trusted Insurance Partner' : 'Οι Αξιόπιστος Συνεργάτης Ασφαλίσεων'}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                    {language === 'en' ? 'We work directly with all major insurance companies in Cyprus, ensuring seamless claim processing and maximum coverage for your repairs.' : 'Συνεργαζόμαστε απευθείας με όλες τις μεγάλες ασφαλιστικές εταιρείες στην Κύπρο, διασφαλίζοντας ομαλή διεκπεραίωση των απαιτήσεων και μέγιστη κάλυψη για τις επισκευές σας.'}
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-7 h-7 text-blue-600">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                        <span>
                            {language === 'en' ? 'All Major Insurers' : 'Όλοι οι Μεγάλοι Ασφαλιστές'}
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-7 h-7 text-blue-600">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                        </svg>
                        <span>
                            {language === 'en' ? 'Direct Invoicing' : 'Άμεση Τιμολόγηση'}
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-7 h-7 text-blue-600">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>
                            {language === 'en' ? '24/7 Support' : 'Υποστήριξη 24/7'}
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default TrustedInsurancePartners;