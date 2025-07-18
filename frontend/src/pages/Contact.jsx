import { Container } from "../components";
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <main className="pt-32 md:pt-40 pb-14">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Contact Us</h2>
                <p className="text-sm md:text-lg text-gray-600 mt-3 text-center">Get in touch with Cyprus Auto Assist. We're here to help with all your car repair needs.</p>

                <section className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 mt-10">
                    <div className="flex flex-col gap-10">
                        <div className="p-5 md:p-7 lg:p-8 border border-blue-100 shadow-lg shadow-blue-100 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-blue-600">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+357 99 123456</p>
                                        <p className="text-sm text-gray-500">24/7 Emergency Service</p>
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
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600 break-all">info@cyprusautoassist.com</p>
                                        <p className="text-sm text-gray-500">We respond within 2 hours</p>
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
                                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                        <p className="text-gray-600">Serving all of Cyprus</p>
                                        <p className="text-sm text-gray-500">Free pickup &amp; delivery</p>
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
                                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                        <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                        <p className="text-sm text-gray-500">Emergency service available 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 md:p-7 lg:p-8 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
                            <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                            <p className="mb-6 text-blue-100">
                                For urgent car repair needs or if you've been in an accident, call us
                                immediately for 24/7 emergency support.
                            </p>
                            <button className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-white text-blue-600 hover:bg-blue-50">
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
                                Call Now
                            </button>
                        </div>
                    </div>

                    <div className="p-5 md:p-7 lg:p-8 border border-blue-100 shadow-lg shadow-blue-100 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium leading-none" htmlFor="name">Name *</label>
                                    <input className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="name" placeholder="eg. Nathan" {...register('name', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium leading-none" htmlFor="phone">Phone *</label>
                                    <input type="tel" className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="phone" placeholder="+357 99 8XXXXX" {...register('phone', { required: true })} />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium leading-none" htmlFor="email">Email *</label>
                                <input type="email" className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="email" placeholder="name@example.com" {...register('email', { required: true })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium leading-none" htmlFor="subject">Subject</label>
                                <input className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2" id="subject" placeholder="I need help with..." {...register('subject', { required: true })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium leading-none" htmlFor="message">Message *</label>
                                <textarea className="flex h-10 w-full rounded-md border border-blue-100 bg-background px-3 py-2 text-base focus:outline-1 focus:outline-blue-200 md:text-sm mt-2 min-h-[120px]" id="message" placeholder="Tell us how we can help you..." {...register('message', { required: true })}></textarea>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md px-8 w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>

                </section>
            </Container>
        </main>
    );
}

export default Contact;