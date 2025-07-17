import { banner, beforeAfterCarRepair, faqImg, Restoration, sidePanel } from "../assets";
import { CallToAction, Card, Container, Faq, Hero, HowItWorks, OurServices, Testimonial, TrustedInsurancePartners, WhyChooseUs } from "../components";
import Marquee from "react-fast-marquee";

const testimonials = [
    {
        name: "Andreas G.",
        review: "I was stranded on the highway late at night, but they arrived quickly and fixed my car with no hassle. Professional and fast.",
        location: 'Nicosia'
    },
    {
        name: "Georgia Ioannou",
        review: "They picked up my car right after the accident, handled the insurance, and had it fixed in 3 days. Stress-free and super fast!",
        location: 'Nicosia'
    },
    {
        name: "Maria Constantinou",
        review: "My brakes were in terrible shape. They picked up my car, repaired everything, and dropped it back the same day.",
        location: 'Limassol'
    },
    {
        name: "Anna Hadjigeorgiou",
        review: "After the crash, they took care of everything. Friendly, efficient, and my car looks brand new. Couldn’t ask for more!",
        location: 'Limassol'
    },
    {
        name: "Jordan Lee",
        review: "I've been using AutoFix Cyprus for nearly two years, and it has been making my life much easier. They provide adorable 24/7 support.",
        location: 'Nicosia'
    },
    {
        name: "Avery Johnson",
        review: "I was hesitant at first, but they proved me wrong. Great customer service, no surprise fees, and my AC works perfectly now.",
        location: 'Nicosia'
    },
    {
        name: "Christos Antoniou",
        review: "I’ve used many repair shops over the years, but none were as quick and honest as this team. My car drives like new again!",
        location: 'Paphos'
    },
    {
        name: "Eleni P.",
        review: "They handled everything from insurance paperwork to repairs after my accident. It was completely stress-free. I’m so thankful.",
        location: 'Larnaca'
    },
    {
        name: "Michalis Petrou",
        review: "Amazing service! I didn’t have to deal with the insurance company at all. They fixed the damage and kept me updated throughout.",
        location: 'Larnaca'
    },
    {
        name: "Nektarios Demetriou",
        review: "Excellent communication and fair prices. They explained everything before starting the work. I trust them with my vehicle.",
        location: 'Famagusta'
    },
];

const faqs = [
    {
        question: '❓ Do you work with my insurance company?',
        answer: `✔ Yes! We work with all insurance providers.
        We handle all communication and paperwork, so you don’t have to lift a finger.`
    },
    {
        question: '❓ How long will the repairs take?',
        answer: `Repair time depends on the extent of the damage.
        We’ll keep you informed at every step so you always know when to expect your car back.`
    },
    {
        question: '❓ How much does it cost?',
        answer: `The initial assessment and pickup are completely free.
        The final cost depends on the damage and whether it’s covered by your insurance.`
    },
    {
        question: '❓ Still have questions?',
        answer: `Can’t find the answer you’re looking for? Get in touch with us!
        📞 Phone: +357 XXX XXX XXX`
    },
];

const ourWork = [
    {
        image: beforeAfterCarRepair,
        title: 'Front Bumper Repair',
        description: 'Complete restoration of a damaged front bumper with professional paint matching.'
    },
    {
        image: sidePanel,
        title: 'Side Panel Restoration',
        description: 'Deep scratch removal and panel refinishing to factory condition in no time.'
    },
    {
        image: Restoration,
        title: 'Rear Bumper Restoration',
        description: 'Complete repair of rear-end damage and seamless paint restoration.'
    },
    // {
    //     image: banner,
    //     title: 'Windshield Replacement',
    //     description: 'Fast and secure replacement of cracked or shattered windshields with high-quality glass.'
    // },
];

const trustUs = [
    {
        icon: <svg
            className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>,
        title: 'Fully Licensed',
        description: 'Certified and insured professionals with all required permits.'
    },
    {
        icon: <svg
            className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>,
        title: 'Quick Response',
        description: 'We response within 2 hours and start work the same day.'
    },
    {
        icon: <svg
            className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5 16L3 12V6a1 1 0 0 1 1-1h1.34a1 1 0 0 1 .95.68L7.67 8h8.66l1.38-3.32A1 1 0 0 1 18.66 4H20a1 1 0 0 1 1 1v6l-2 4M5 16v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2m10 0v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M5 16h14"></path>
        </svg>,
        title: 'Free Services',
        description: 'Complimentary pickup, delivery, and rental car coordination.'
    },
    {
        icon: <svg
            className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9 12l2 2 4-4"></path>
        </svg>,
        title: 'Quality Guarantee',
        description: '1-year warranty on all repair work with satisfaction gurantee.'
    },
    // {
    //     image: banner,
    //     title: 'Windshield Replacement',
    //     description: 'Fast and secure replacement of cracked or shattered windshields with high-quality glass.'
    // },
];

const howItWorks = [
    {
        icon: <span className="text-2xl font-semibold text-blue-500 group-hover:text-white transition-colors duration-300">1</span>,
        title: 'Submit Request',
        description: 'Upload photos, describe the damage, and provide your contact details. Takes just 2-3 minutes.'
    },
    {
        icon: <span className="text-2xl font-semibold text-blue-500 group-hover:text-white transition-colors duration-300">2</span>,
        title: 'We Contact You',
        description: 'Our team reviews your case and calls you within 2 hours to discuss the repair and provide a quote.'
    },
    {
        icon: <span className="text-2xl font-semibold text-blue-500 group-hover:text-white transition-colors duration-300">3</span>,
        title: 'We Handle Everything',
        description: 'From pickup to delivery, insurance claims to rental cars - we take care of everything.'
    },
];

function Home() {
    return (
        <>
            <Hero />
            {/* Stats section */}
            <section className="bg-blue-600 p-5 md:p-10 mx-5 my-12 md:mx-16 lg:mx-24 xl:mx-28 rounded-xl text-center text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden">
                    <div className="p-4 md:p-7 bg-white/10 border-b-2 border-blue-600">
                        <h5 className="text-2xl md:text-3xl font-semibold">500+</h5>
                        <p className="text-gray-200">Cars Repaired</p>
                    </div>

                    <div className="p-4 md:p-7 bg-white/10 border-l-2 border-b-2 border-blue-600">
                        <h5 className="text-2xl md:text-3xl font-semibold flex items-center justify-center">
                            <span>4.9</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-6 h-6"
                            >
                                <path d="M12 2.5c.38 0 .74.2.94.54l2.7 4.61 5.16.75a1.04 1.04 0 01.58 1.77l-3.73 3.63.88 5.13a1.05 1.05 0 01-1.52 1.11L12 17.77l-4.61 2.42a1.05 1.05 0 01-1.52-1.11l.88-5.13-3.73-3.63a1.04 1.04 0 01.58-1.77l5.16-.75 2.7-4.61c.2-.34.56-.54.94-.54z" />
                            </svg>
                        </h5>
                        <p className="text-gray-200">Customer Rating</p>
                    </div>

                    <div className="p-4 md:p-7 bg-white/10 md:border-l-2 md:border-blue-600">
                        <h5 className="text-2xl md:text-3xl font-semibold">24/7</h5>
                        <p className="text-gray-200">Emergency Support</p>
                    </div>

                    <div className="p-4 md:p-7 bg-white/10 border-l-2 border-blue-600">
                        <h5 className="text-2xl md:text-3xl font-semibold">15+</h5>
                        <p className="text-gray-200">Years Experience</p>
                    </div>
                </div>
            </section>

            {/* Our Work section */}
            <section>
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">See Our Work in Action</h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">Professional results that speak for themselves. Here's how we transform damaged vehicles back to their original condition.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center mt-7 gap-8">
                        {
                            ourWork.map(work => (
                                <Card title={work.title} key={work.title} description={work.description} image={work.image} />
                            ))
                        }
                    </div>
                </Container>
            </section>

            {/* Trust section */}
            <section className="mt-14">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Cyprus Trust Us</h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">Over 15 years of experience serving Cyprus with professional car repair services.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center mt-10 gap-8">
                        {
                            trustUs.map(trust => (
                                <HowItWorks title={trust.title} key={trust.title} description={trust.description} icon={trust.icon} />
                            ))
                        }
                    </div>
                </Container>
            </section>

            {/* How It Works section */}
            <section className="mt-14">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">Getting your car repaired is simple. We handle everything for you.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center mt-10 gap-8">
                        {
                            howItWorks.map(trust => (
                                <HowItWorks title={trust.title} key={trust.title} description={trust.description} icon={trust.icon} />
                            ))
                        }
                    </div>
                </Container>
            </section>

            {/* Our Services section */}
            <Container className="mt-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
                <p className="text-sm md:text-base text-gray-500 mt-3">Complete car repair solutions for accident damage.</p>
                <OurServices />
            </Container>

            {/* Trusted Insurance Partners section */}
            <TrustedInsurancePartners />

            {/* Why Choose Us */}
            <Container className="mt-14">
                <WhyChooseUs />
            </Container>

            {/* Testimonials section */}
            <section className="my-14">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customers Say</h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">Trusted by hundreds—see why drivers choose us to keep their cars running like new.</p>
                    <Marquee speed={50} gradient={false}>
                        <div className="flex flex-wrap justify-between gap-5 mt-8 mx-5 text-left">
                            {
                                testimonials.map(testimonial => (
                                    <Testimonial key={testimonial.name} name={testimonial.name} review={testimonial.review} location={testimonial.location} />
                                ))
                            }
                        </div>
                    </Marquee>
                </Container>
            </section>

            {/* FAQs section */}
            <section>
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">Have questions? We’ve answered the most common queries about our repair process, pickup service, insurance support, and more.</p>
                </Container>

                <Container className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between lg:gap-10">
                    <img src={faqImg} alt="faqImg" className="max-h-96" />

                    <section className="-my-4 flex flex-col  py-10">
                        {
                            faqs.map(faq => (
                                <Faq key={faq.question} question={faq.question} answer={faq.answer} />
                            ))
                        }
                    </section>
                </Container>
            </section>

            <CallToAction />
        </>
    );
}

export default Home;