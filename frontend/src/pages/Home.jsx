import { CallToAction, Container, Hero, Testimonial } from "../components";
import Marquee from "react-fast-marquee";

const testimonials = [
    {
        name: "Andreas G.",
        review:"I was stranded on the highway late at night, but they arrived quickly and fixed my car with no hassle. Professional and fast.",
        location:'Nicosia'
    },
    {
        name: "Georgia Ioannou",
        review:"They picked up my car right after the accident, handled the insurance, and had it fixed in 3 days. Stress-free and super fast!",
        location:'Nicosia'
    },
    {
        name: "Maria Constantinou",
        review:"My brakes were in terrible shape. They picked up my car, repaired everything, and dropped it back the same day.",
        location:'Limassol'
    },
    {
        name: "Anna Hadjigeorgiou",
        review:"After the crash, they took care of everything. Friendly, efficient, and my car looks brand new. Couldn’t ask for more!",
        location:'Limassol'
    },
    {
        name: "Jordan Lee",
        review:"I've been using AutoFix Cyprus for nearly two years, and it has been making my life much easier. They provide adorable 24/7 support.",
        location:'Nicosia'
    },
    {
        name: "Avery Johnson",
        review:"I was hesitant at first, but they proved me wrong. Great customer service, no surprise fees, and my AC works perfectly now.",
        location:'Nicosia'
    },
    {
        name: "Christos Antoniou",
        review:"I’ve used many repair shops over the years, but none were as quick and honest as this team. My car drives like new again!",
        location:'Paphos'
    },
    {
        name: "Eleni P.",
        review:"They handled everything from insurance paperwork to repairs after my accident. It was completely stress-free. I’m so thankful.",
        location:'Larnaca'
    },
    {
        name: "Michalis Petrou",
        review:"Amazing service! I didn’t have to deal with the insurance company at all. They fixed the damage and kept me updated throughout.",
        location:'Larnaca'
    },
    {
        name: "Nektarios Demetriou",
        review:"Excellent communication and fair prices. They explained everything before starting the work. I trust them with my vehicle.",
        location:'Famagusta'
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

            <CallToAction />
        </>
    );
}

export default Home;