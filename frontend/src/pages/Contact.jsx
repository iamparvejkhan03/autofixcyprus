import { useSelector } from "react-redux";
import { Container } from "../components";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from "react";
import { useEffect } from "react";

function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const language = useSelector(state => state.language);
    const {pathname} = useLocation();
    const [sending, setSending] = useState(false);

    useEffect(() => {
        const refreshServer = async () => {
            await axios.get(`${import.meta.env.VITE_DOMAIN_NAME}/api/v1/`);
        }
        refreshServer();
    }, [pathname])

    const submitHandler = async (formData) => {
        try {
            setSending(true);
            const { data } = await axios.post(`${import.meta.env.VITE_DOMAIN_NAME}/api/v1/contact`, {name:formData.name, email:formData.email, phone:formData.phone, subject:formData.subject || 'User Query', message:formData.message});

            if(data && data.success){
                setSending(false);
                toast.success(data.message);
                reset();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }else{
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <main className="pt-32 md:pt-40 pb-14">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                    {language === 'en' ? 'Contact Us' : 'Επικοινωνήστε μαζί μας'}
                </h2>
                <p className="text-sm md:text-lg text-gray-600 mt-3 text-center">
                    {language === 'en' ? "Get in touch with Cyprus Auto Assist. We're here to help with all your car repair needs." : 'Επικοινωνήστε με την Cyprus Auto Assist. Είμαστε εδώ για να σας βοηθήσουμε με όλες τις ανάγκες επισκευής του αυτοκινήτου σας.'}
                </p>

                <section className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 mt-10">
                    <div className="flex flex-col gap-10">
                        <div className="p-5 md:p-7 lg:p-8 border border-blue-100 shadow-lg shadow-blue-100 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                {language === 'en' ? 'Get in Touch' : 'Επικοινωνήστε μαζί μας'}
                            </h2>
                            <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-blue-600">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {language === 'en' ? 'Phone' : 'Τηλέφωνο'}
                                        </h3>
                                        <Link to='tel:+35799777281' className="text-gray-600 hover:underline">+357 99 777281</Link>
                                        <p className="text-sm text-gray-500">
                                            {language === 'en' ? '24/7 Emergency Service' : 'Υπηρεσία έκτακτης ανάγκης 24/7'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-blue-600">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {language === 'en' ? 'Email' : 'Ηλεκτρονικό ταχυδρομείο'}
                                        </h3>
                                        <Link to='mailto:support@autofixcyprus.com' className="text-gray-600 break-all hover:underline">support@autofixcyprus.com</Link>
                                        <p className="text-sm text-gray-500">
                                            {language === 'en' ? 'We respond within 2 hours' : 'Απαντάμε εντός 2 ωρών'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-blue-600">
                                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {language === 'en' ? 'Location' : 'Τοποθεσία'}
                                        </h3>
                                        <p className="text-gray-600">
                                            {language === 'en' ? 'Serving all of Cyprus' : 'Εξυπηρετούμε ολόκληρη την Κύπρο'}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {language === 'en' ? 'Free pickup & Delivery' : 'Δωρεάν παραλαβή και παράδοση'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-blue-600">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {language === 'en' ? 'Business Hours' : 'Ώρες λειτουργίας'}
                                        </h3>
                                        <p className="text-gray-600">
                                            {language === 'en' ? 'Mon - Fri: 8:00 AM - 6:00 PM' : 'Δευ - Παρ: 8:00 π.μ. - 6:00 μ.μ.'}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {language === 'en' ? 'Emergency service available 24/7' : 'Υπηρεσία έκτακτης ανάγκης διαθέσιμη 24/7'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 md:p-7 lg:p-8 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
                            <h3 className="text-xl font-bold mb-4">
                                {language === 'en' ? 'Need Immediate Assistance?' : 'Χρειάζεστε άμεση βοήθεια;'}
                            </h3>
                            <p className="mb-6 text-blue-100">
                                {language === 'en' ? "For urgent car repair needs or if you've been in an accident, call us immediately for 24/7 emergency support." : 'Για επείγουσες ανάγκες επισκευής αυτοκινήτου ή αν έχετε εμπλακεί σε ατύχημα, καλέστε μας αμέσως για υποστήριξη έκτακτης ανάγκης 24/7.'}
                            </p>
                            <Link to='tel:+35799777281' className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-white text-blue-600 hover:bg-blue-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 mr-2"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                {language === 'en' ? 'Call Now' : 'Καλέστε τώρα'}
                            </Link>
                        </div>
                    </div>

                    <div className="p-5 md:p-7 lg:p-8 border border-blue-100 shadow-lg shadow-blue-100 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {language === 'en' ? 'Send us a Message' : 'Στείλτε μας ένα μήνυμα'}
                        </h2>
                        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium leading-none" htmlFor="name">
                                        {language === 'en' ? 'Name' : 'Όνομα'}
                                        *</label>
                                    <input className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="name" placeholder="eg. Nathan" {...register('name', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium leading-none" htmlFor="phone">
                                        {language === 'en' ? 'Phone' : 'Τηλέφωνο'}
                                        *</label>
                                    <input type="tel" className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="phone" placeholder="+357 99 8XXXXX" {...register('phone', { required: true })} />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium leading-none" htmlFor="email">
                                    {language === 'en' ? 'Email' : 'Ηλεκτρονικό ταχυδρομείο'}
                                    *</label>
                                <input type="email" className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="email" placeholder="name@example.com" {...register('email', { required: true })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium leading-none" htmlFor="subject">
                                    {language === 'en' ? 'Subject' : 'Θέμα'}
                                </label>
                                <input className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="subject" placeholder={`${language === 'en' ? 'I need help with...' : 'Χρειάζομαι βοήθεια με...'}` } {...register('subject', { required: true })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium leading-none" htmlFor="message">
                                    {language === 'en' ? 'Message' : 'Μήνυμα'}
                                    *</label>
                                <textarea className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2 min-h-[120px]" id="message" placeholder={`${language === 'en' ? 'Tell us how we can help you...' : 'Πείτε μας πώς μπορούμε να σας βοηθήσουμε...'}` } {...register('message', { required: true })}></textarea>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md px-8 w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer" type="submit">
                                {!sending && (language === 'en' ? 'Send Message' : 'Αποστολή μηνύματος')}
                                {sending && (<span className="flex space-x-1">
                                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.1s]"></span>
                                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"></span>
                                </span>)}
                            </button>
                        </form>
                    </div>

                </section>
            </Container>
        </main>
    );
}

export default Contact;