import { faqImg } from "../assets";
import { Container, Faq } from "../components";

const faqs = [
    {
        question: '❓ What should I do if I’ve had an accident?',
        answer: `✔ Call AutoFix Cyprus immediately.
        ✔ Do not hand your car over to anyone at the accident scene.
        ✔ We’ll come, pick it up, and take care of everything for you.`
    },
    {
        question: '❓ If the damage is minor, should I still contact you?',
        answer: `Yes!
        Even a small scratch or dent could be hiding deeper issues.
        With AutoFix Cyprus, you get a full inspection and professional repair — no hidden costs.`
    },
    {
        question: '❓ Do you work with my insurance company?',
        answer: `✔ Yes! We work with all insurance providers.
        We handle all communication and paperwork, so you don’t have to lift a finger.`
    },
    {
        question: '❓ How will I get home after dropping off my car?',
        answer: 'We’ll arrange transportation for you — or if needed, provide you with a rental car so your day goes on stress-free.'
    },
    {
        question: '❓ Where will the repairs take place?',
        answer: 'Your vehicle will be repaired at certified workshops under the full supervision of AutoFix Cyprus, with a quality guarantee.'
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
        question: '❓ What if the damage was my fault?',
        answer: `✔ Absolutely — you can still call us!
        Whether it was an accident, self-inflicted damage, or regular wear and tear — we’re here to handle it.`
    }
];

function FAQs() {
    return (
        <main className="pt-32 md:pt-40 pb-14">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Frequently Asked Questions</h2>
                <p className="text-sm md:text-lg text-gray-600 mt-3 text-center">Have questions? We’ve answered the most common queries about our repair process, pickup service, insurance support, and more.</p>

                <section className="mt-10">
                    <div>
                        {
                            faqs.map(faq => (
                                <Faq key={faq.question} question={faq.question} answer={faq.answer} />
                            ))
                        }
                    </div>

                    <div className="w-full mx-auto py-10 text-gray-800">
                        <div className="px-2 py-1 text-sm w-fit mx-auto text-center font-semibold border border-gray-300 rounded-full">Still have questions?</div>
                        <h2 className="text-4xl font-bold mt-4 text-center">
                            We'd love to Hear From You.
                        </h2>
                        <div className="grid md:grid-cols-3 mt-8 gap-8">
                            <div className="bg-blue-50 border border-blue-100 rounded-md p-5">
                                <svg className="text-blue-600 bg-blue-600/20 p-2.5 aspect-square rounded-full size-10" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-2.892 2.25L12 11.974 5.892 6.375zM4.125 17.625V7.808l7.115 6.522a1.125 1.125 0 0 0 1.52 0l7.115-6.522v9.817z"
                                        fill="currentColor" />
                                </svg>
                                <p className="text-lg font-bold mt-2">Email Support</p>
                                <p className="text-gray-600 mt-1 mb-4">Our team can respond in real time.</p>
                                <a href="mailto:support@example.com" className="text-blue-600 font-semibold">
                                    support@autofixcyprus.com
                                </a>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-md p-5">
                                <svg className="text-blue-600 bg-blue-600/20 p-2.5 aspect-square rounded-full size-10" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25M19.5 9.375v9.75h-1.875v-9.75zm-13.875-4.5h9.75v14.25h-1.5V15a1.125 1.125 0 0 0-1.125-1.125h-4.5A1.125 1.125 0 0 0 7.125 15v4.125h-1.5zm6 14.25h-2.25v-3h2.25zM6.75 7.5a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 7.5m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 11.25 7.5m-4.5 3.75a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 11.25m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75a1.125 1.125 0 0 1-1.125-1.125"
                                        fill="currentColor" />
                                </svg>
                                <p className="text-lg font-bold mt-2">Visit Our Office</p>
                                <p className="text-gray-600 mt-1 mb-4">Visit our location in real life.</p>
                                <span className="text-blue-600 font-semibold">
                                    221b Elementary Avenue, NY
                                </span>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-md p-5">
                                <svg className="text-blue-600 bg-blue-600/20 p-2.5 aspect-square rounded-full size-10" width="21"
                                    height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m19 13.513-4.415-1.98-.017-.007a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125q.043-.051.08-.108a1.88 1.88 0 0 0 .148-1.782L7.488 2A1.88 1.88 0 0 0 5.539.89 5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513m-4.5 4.612A11.64 11.64 0 0 1 2.875 6.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.938-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.841c.883 1.808 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.036.105-.08l2.102-1.787 3.938 1.763a3.4 3.4 0 0 1-3.332 2.67"
                                        fill="currentColor" />
                                </svg>
                                <p className="text-lg font-bold mt-2">Call Us Directly</p>
                                <p className="text-gray-600 mt-1 mb-4">Available during working hours.</p>
                                <span className="text-blue-600 font-semibold">
                                    (+1) 234 - 4567 - 789
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default FAQs;