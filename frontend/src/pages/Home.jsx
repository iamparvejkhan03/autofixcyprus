import { useSelector } from "react-redux";
import { beforeAfterCarRepair, faqImg, Restoration, sidePanel } from "../assets";
import { CallToAction, Card, Container, Faq, Hero, HowItWorks, OurServices, Testimonial, TrustedInsurancePartners, WhyChooseUs } from "../components";
import Marquee from "react-fast-marquee";

function Home() {
    const language = useSelector(state => state.language);

    const testimonials = [
        {
            name: `${language === 'en' ? 'Andreas G.' : 'Ανδρέας Γ.'}`,
            review: `${language === 'en'
                ? 'Stranded on the highway late at night, they arrived fast and fixed my car hassle-free. Very professional service.'
                : 'Ακινητοποιημένος στον αυτοκινητόδρομο αργά τη νύχτα, ήρθαν γρήγορα και επισκεύασαν το αυτοκίνητο χωρίς κόπο. Πολύ επαγγελματικοί.'}`,
            location: `${language === 'en' ? 'Nicosia' : 'Λευκωσία'}`
        },
        {
            name: `${language === 'en' ? 'Georgia Ioannou' : 'Γεωργία Ιωάννου'}`,
            review: `${language === 'en'
                ? 'Picked up my car after the crash, handled insurance, and fixed it in just 3 days. Super fast, no stress!'
                : 'Μου πήραν το αυτοκίνητο μετά το ατύχημα, διαχειρίστηκαν την ασφάλιση και το επισκεύασαν σε 3 μέρες. Πολύ γρήγορα, χωρίς άγχος!'}`,
            location: `${language === 'en' ? 'Nicosia' : 'Λευκωσία'}`
        },
        {
            name: `${language === 'en' ? 'Maria Constantinou' : 'Μαρία Κωνσταντίνου'}`,
            review: `${language === 'en'
                ? 'My brakes were bad. They picked up my car, fixed everything professionally, and returned it same day - perfect!'
                : 'Τα φρένα ήταν χάλια. Πήραν το αυτοκίνητο, επισκεύασαν τα πάντα επαγγελματικά και το επέστρεψαν αυθημερόν - τέλειο!'}`,
            location: `${language === 'en' ? 'Limassol' : 'Λεμεσός'}`
        },
        {
            name: `${language === 'en' ? 'Anna Hadjigeorgiou' : 'Άννα Χατζηγεωργίου'}`,
            review: `${language === 'en'
                ? 'After my accident, they took care of everything. Friendly, quick, and my car looks brand new. Great team!'
                : 'Μετά το ατύχημα, ανέλαβαν τα πάντα. Φιλικοί, γρήγοροι και το αυτοκίνητο μοιάζει καινούριο. Καταπληκτική ομάδα!'}`,
            location: `${language === 'en' ? 'Limassol' : 'Λεμεσός'}`
        },
        {
            name: `${language === 'en' ? 'Jordan Lee' : 'Τζόρνταν Λι'}`,
            review: `${language === 'en'
                ? 'Using AutoFix Cyprus for 2 years now. They’re fast, friendly, and available 24/7. Highly recommend!'
                : 'Χρησιμοποιώ την AutoFix Cyprus 2 χρόνια. Είναι γρήγοροι, φιλικοί και διαθέσιμοι 24/7. Συνιστώ ανεπιφύλακτα!'}`,
            location: `${language === 'en' ? 'Nicosia' : 'Λευκωσία'}`
        },
        {
            name: `${language === 'en' ? 'Avery Johnson' : 'Έιβερι Τζόνσον'}`,
            review: `${language === 'en'
                ? 'After my accident, AutoFix Cyprus picked up my car, and handled the insurance. No stress, no calls. I wouldn’t trust anyone else.'
                : 'Μετά το ατύχημά μου, η AutoFix Cyprus παρέλαβε το αυτοκίνητό μου και ανέλαβε την ασφάλεια. Χωρίς άγχος, χωρίς τηλεφωνήματα. Δεν θα εμπιστευόμουν κανέναν άλλον.'}`,
            location: `${language === 'en' ? 'Limassol' : 'Λεμεσός'}`
        },
        {
            name: `${language === 'en' ? 'Christos Antoniou' : 'Χρίστος Αντωνίου'}`,
            review: `${language === 'en'
                ? 'I’ve used many repair shops over the years, but none were as quick as them. Excellent work!!!'
                : 'Έχω πάει σε πολλά συνεργεία όλα αυτά τα χρόνια, αλλά κανένα δεν ήταν τόσο γρήγορο όσο αυτοί. Εξαιρετική δουλειά!'}`,
            location: `${language === 'en' ? 'Paphos' : 'Πάφος'}`
        },
        {
            name: `${language === 'en' ? 'Eleni P.' : 'Ελένη Π.'}`,
            review: `${language === 'en'
                ? "They handled everything - from the insurance paperwork to the post-accident repairs. The whole process was stress-free."
                : 'Ανέλαβαν τα πάντα – από τα χαρτιά της ασφάλισης μέχρι τις επισκευές μετά το ατύχημα. Όλη η διαδικασία ήταν απόλυτα χωρίς άγχος.'}`,
            location: `${language === 'en' ? 'Larnaca' : 'Λάρνακα'}`
        },
        {
            name: `${language === 'en' ? 'Michalis Petrou' : 'Μιχάλης Πέτρου'}`,
            review: `${language === 'en'
                ? 'Brilliant service! Zero insurance hassle. They fixed the damage and kept me posted with constant updates.'
                : 'Καταπληκτική εξυπηρέτηση! Δεν ασχολήθηκα με την ασφαλιστική. Επισκεύασαν τη ζημιά κι έδειχναν ενημέρωση.'}`,
            location: `${language === 'en' ? 'Larnaca' : 'Λάρνακα'}`
        },
        {
            name: `${language === 'en' ? 'Nektarios Demetriou' : 'Νεκτάριος Δημητρίου'}`,
            review: `${language === 'en'
                ? "Excellent communication and fair prices. They clearly explained everything before starting. I trust them completely with my car!"
                : 'Εξαιρετική επικοινωνία και δίκαιες τιμές. Μου εξήγησαν ξεκάθαρα όλα πριν ξεκινήσουν. Τους εμπιστεύομαι πλήρως με το αυτοκίνητό μου!'}`,
            location: `${language === 'en' ? 'Limassol' : 'Λεμεσός'}`
        },
    ];

    const faqs = [
        {
            question: `${language === 'en' ? 'I had an accident. What should I do?' : 'Είχα ένα ατύχημα. Τι πρέπει να κάνω;'}`,
            answer: `${language === 'en'
                ? 'Call us or send us a photo. From there, we handle everything.'
                : 'Καλέστε μας ή στείλτε μας μια φωτογραφία. Από εκεί και πέρα, αναλαμβάνουμε τα πάντα.'}`
        },
        {
            question: `${language === 'en' ? 'What services do you offer?' : 'Τι υπηρεσίες προσφέρετε;'}`,
            answer: `${language === 'en'
                ? 'We take care of the entire process: towing, insurance, repair, and returning your car ready at your doorstep.'
                : 'Αναλαμβάνουμε όλη τη διαδικασία: ρυμούλκηση, ασφάλεια, επισκευή και επιστροφή του αυτοκινήτου σας έτοιμου στην πόρτα σας.'}`
        },
        {
            question: `${language === 'en' ? 'Can I get a replacement car?' : 'Μπορώ να έχω αυτοκίνητο αντικατάστασης;'}`,
            answer: `${language === 'en'
                ? 'Yes. We provide a replacement car for an additional fee if you need it.'
                : 'Ναι. Παρέχουμε αυτοκίνητο αντικατάστασης με επιπλέον χρέωση αν το χρειάζεστε.'}`
        },
        {
            question: `${language === 'en' ? 'If it was my fault, can I still call you?' : 'Αν έφταιγα εγώ, μπορώ ακόμα να σας καλέσω;'}`,
            answer: `${language === 'en'
                ? 'Of course. Whether you\'re at fault or not, we will fully assist you.'
                : 'Φυσικά. Είτε φταίγατε είτε όχι, θα σας βοηθήσουμε πλήρως.'}`
        },
        {
            question: `${language === 'en' ? 'Do I pay anything upfront?' : 'Πληρώνω κάτι προκαταβολικά;'}`,
            answer: `${language === 'en'
                ? 'No. The initial consultation and damage assessment are completely free.'
                : 'Όχι. Η αρχική αξιολόγηση και η εκτίμηση της ζημιάς είναι εντελώς δωρεάν.'}`
        },
    ];

    const ourWork = [
        {
            image: beforeAfterCarRepair,
            title: `${language === 'en' ? 'Front Bumper Repair' : 'Επισκευή Μπροστινού Προφυλακτήρα'}`,
            description: `${language === 'en'
                ? 'Complete restoration of front bumper damage with accurate paint match.'
                : 'Πλήρης επισκευή ζημιάς μπροστινού προφυλακτήρα με ακριβή αντιστοίχιση χρώματος.'}`
        },
        {
            image: sidePanel,
            title: `${language === 'en' ? 'Side Panel Restoration' : 'Αποκατάσταση Πλαϊνού Πάνελ'}`,
            description: `${language === 'en'
                ? 'Quick scratch removal and surface refinishing to factory condition, fast.'
                : 'Άμεση αφαίρεση γρατζουνιών και επαναφορά πάνελ σε εργοστασιακή κατάσταση, γρήγορα.'}`
        },
        {
            image: Restoration,
            title: `${language === 'en' ? 'Rear Bumper Restoration' : 'Αποκατάσταση Πίσω Προφυλακτήρα'}`,
            description: `${language === 'en'
                ? 'Full repair of rear-end damage with seamless paint restoration for a new finish.'
                : 'Πλήρης αποκατάσταση ζημιάς πίσω μέρους και βαφή χωρίς ατέλειες για φινίρισμα καινούργιο.'}`
        },
    ];

    const trustUs = [
        {
            icon: <svg
                className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
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
            title: `${language === 'en' ? 'Fully Licensed' : 'Πλήρως Αδειοδοτημένοι'}`,
            description: `${language === 'en' ? 'Certified and insured professionals with all required permits.' : 'Πιστοποιημένοι και ασφαλισμένοι επαγγελματίες με όλες τις απαραίτητες άδειες.'}`
        },
        {
            icon: <svg
                className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
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
            title: `${language === 'en' ? 'Quick Response' : 'Γρήγορη Ανταπόκριση'}`,
            description: `${language === 'en' ? 'We response within 1 hours and start work the same day.' : 'Ανταποκρινόμαστε εντός 1 ωρών και ξεκινάμε την εργασία την ίδια μέρα.'}`
        },
        {
            icon: <svg
                className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
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
            title: `${language === 'en' ? 'Free Services' : 'Δωρεάν Υπηρεσίες'}`,
            description: `${language === 'en' ? 'Complimentary pickup, delivery, and rental car coordination.' : 'Δωρεάν παραλαβή, παράδοση και συντονισμός με αυτοκίνητο αντικατάστασης.'}`
        },
        {
            icon: <svg
                className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
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
            title: `${language === 'en' ? 'Quality Guarantee' : 'Εγγύηση Ποιότητας'}`,
            description: `${language === 'en' ? '3-year warranty on all repair work with satisfaction gurantee.' : 'Εγγύηση 3 έτους για όλες τις εργασίες επισκευής με εγγύηση ικανοποίησης.'}`
        },
    ];

    const howItWorks = [
        {
            icon: <span className="text-2xl font-semibold text-blue-500 group-hover:text-white transition-colors duration-300">1</span>,
            title: `${language === 'en' ? 'Submit Request' : 'Υποβολή Αιτήματος'}`,
            description: `${language === 'en' ? 'Upload photos, describe the damage, and provide your contact details. Takes just 2-3 minutes.' : 'Ανεβάστε φωτογραφίες, περιγράψτε τη ζημιά και δώστε τα στοιχεία επικοινωνίας σας. Χρειάζονται μόνο 2-3 λεπτά.'}`
        },
        {
            icon: <span className="text-2xl font-semibold text-blue-500 group-hover:text-white transition-colors duration-300">2</span>,
            title: `${language === 'en' ? 'We Contact You' : 'Θα επικοινωνήσουμε μαζί σας'}`,
            description: `${language === 'en' ? 'Our team reviews your case and calls you within 2 hours to discuss the repair and provide a quote.' : 'Η ομάδα μας εξετάζει την περίπτωσή σας και σας καλεί εντός 2 ωρών για να συζητήσει την επισκευή και να σας δώσει προσφορά.'}`
        },
        {
            icon: <span className="text-2xl font-semibold text-blue-500 group-hover:text-white transition-colors duration-300">3</span>,
            title: `${language === 'en' ? 'We Handle Everything' : 'Αναλαμβάνουμε τα πάντα'}`,
            description: `${language === 'en' ? 'From pickup to delivery, insurance claims to rental cars - we take care of everything.' : 'Από την παραλαβή μέχρι την παράδοση, από τις ασφαλιστικές απαιτήσεις μέχρι τα ενοικιαζόμενα αυτοκίνητα – αναλαμβάνουμε τα πάντα'}`
        },
    ];

    return (
        <main>
            <Hero />
            {/* Stats section */}
            <section className="bg-blue-600 p-5 md:p-10 mx-5 my-12 md:mx-16 lg:mx-24 xl:mx-28 rounded-xl text-center text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden">
                    <div className="p-4 md:p-7 bg-white/10 border-b-2 border-blue-600">
                        <h5 className="text-2xl md:text-3xl font-semibold">500+</h5>
                        <p className="text-gray-200">
                            {language === 'en' ? 'Cars Repaired' : 'Αυτοκίνητα Επισκευασμένα'}
                        </p>
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
                        <p className="text-gray-200">
                            {language === 'en' ? 'Customer Rating' : 'Αξιολόγηση Πελατών'}
                        </p>
                    </div>

                    <div className="p-4 md:p-7 bg-white/10 md:border-l-2 md:border-blue-600">
                        <h5 className="text-2xl md:text-3xl font-semibold">24/7</h5>
                        <p className="text-gray-200">
                            {language === 'en' ? 'Emergency Support' : 'Υποστήριξη Έκτακτης Ανάγκης'}
                        </p>
                    </div>

                    <div className="p-4 md:p-7 bg-white/10 border-l-2 border-blue-600">
                        <h5 className="text-2xl md:text-3xl font-semibold">15+</h5>
                        <p className="text-gray-200">
                            {language === 'en' ? 'Years Experience' : 'Χρόνια Εμπειρίας'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Work section */}
            <section>
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {language === 'en' ? 'Accident Repairs – Before & After' : 'Επισκευές Ατυχημάτων – Πριν & Μετά'}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">
                        {language === 'en' ? "See how we restore damage from real accidents — with speed, precision, and trust." : 'Δείτε πώς αποκαθιστούμε ζημιές από πραγματικά ατυχήματα — με ταχύτητα, ακρίβεια και αξιοπιστία.'}
                    </p>

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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {language === 'en' ? 'Why People Trust AutoFix Cyprus' : 'Γιατί ο κόσμος εμπιστεύεται την AutoFix Cyprus'}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">
                        {language === 'en' ? 'From seamless accident handling to reliable repairs, we’ve earned the trust of drivers across Cyprus.' : 'Από την άμεση διαχείριση ατυχημάτων έως τις αξιόπιστες επισκευές, έχουμε κερδίσει την εμπιστοσύνη των οδηγών σε όλη την Κύπρο.'}
                    </p>

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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {language === 'en' ? 'How It Works' : 'Πώς Λειτουργεί'}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">
                        {language === 'en' ? 'Getting your car repaired is simple. We handle everything for you.' : 'Η επισκευή του αυτοκινήτου σας είναι απλή. Αναλαμβάνουμε τα πάντα για εσάς.'}
                    </p>

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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {language === 'en' ? 'Our Core Services' : 'Οι Κύριες Υπηρεσίες μας'}
                </h2>
                <p className="text-sm md:text-base text-gray-500 mt-3">
                    {language === 'en' ? 'AutoFix Cyprus – Total care from accident to completion.' : 'AutoFix Cyprus – Πλήρης φροντίδα από το ατύχημα μέχρι την ολοκλήρωση.'}
                </p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {language === 'en' ? 'What Our Customers Say' : 'Τι Λένε οι Πελάτες Μας'}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">
                        {language === 'en' ? 'Trusted by hundreds—see why drivers choose us to keep their cars running like new.' : 'Εμπιστευμένοι από εκατοντάδες – δείτε γιατί οι οδηγοί μας επιλέγουν για να κρατούν τα αυτοκίνητά τους σαν καινούργια'}
                    </p>
                    <Marquee speed={50} gradient={false}>
                        <div className="flex flex-wrap justify-between items-stretch gap-5 mt-8 mx-5 text-left">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {language === 'en' ? 'Frequently Asked Questions' : 'Συχνές Ερωτήσεις'}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3">
                        {language === 'en' ? 'Have questions? We’ve answered the most common queries about our repair process, pickup service, insurance support, and more.' : 'Έχετε απορίες; Έχουμε απαντήσει στις πιο συχνές ερωτήσεις σχετικά με τη διαδικασία επισκευής, την υπηρεσία παραλαβής, την υποστήριξη ασφάλισης και άλλα.'}
                    </p>
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
        </main>
    );
}

export default Home;