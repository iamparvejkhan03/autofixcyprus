import { useState } from "react";
import { accidentRepair, expertTeam, insuranceClaims, qualityGuarantee, rentalCar } from "../assets";
import { carTow } from "../assets";
import { useSelector } from "react-redux";

function OurServices() {
    const [stopScroll, setStopScroll] = useState(false);
    const language = useSelector(state => state.language);

    const cardData = [
        {
            title: `${language === 'en' ? 'Accident Repair' : 'Επισκευή Ατυχήματος'}`,
            image: accidentRepair,
            description: `${language === 'en'
                ? 'Professional bodywork, dent repair, and paint restoration to get your car looking like new.'
                : 'Επαγγελματική φανοποιία, επισκευή βαθουλωμάτων και αποκατάσταση βαφής για να δείχνει το αυτοκίνητό σας σαν καινούργιο.'}`
        },
        {
            title: `${language === 'en' ? 'Insurance Claims' : 'Ασφαλιστικών Απαιτήσεων'}`,
            image: insuranceClaims,
            description: `${language === 'en'
                ? 'We handle all insurance paperwork and communication to make the process stress-free for you.'
                : 'Αναλαμβάνουμε όλη τη γραφειοκρατία και την επικοινωνία με την ασφαλιστική για να κάνουμε τη διαδικασία όσο το δυνατόν πιο ανώδυνη για εσάς.'}`
        },
        {
            title: `${language === 'en' ? 'Pickup & Delivery' : 'Παραλαβή & Παράδοση'}`,
            image: carTow,
            description: `${language === 'en'
                ? 'Free car collection from your location and delivery when the repair is complete.'
                : 'Δωρεάν παραλαβή του αυτοκινήτου από τον χώρο σας και παράδοση μετά την ολοκλήρωση της επισκευής.'}`
        },
        {
            title: `${language === 'en' ? 'Car Replacement' : 'Αντικατάστασης Αυτοκινήτου'}`,
            image: rentalCar,
            description: `${language === 'en'
                ? 'Get a replacement vehicle while your car is being repaired so you can continue your daily routine.'
                : 'Παρέχουμε όχημα αντικατάστασης κατά τη διάρκεια της επισκευής ώστε να συνεχίσετε κανονικά την καθημερινότητά σας.'}`
        },
        {
            title: `${language === 'en' ? 'Expert Team' : 'Έμπειρη Ομάδα'}`,
            image: expertTeam,
            description: `${language === 'en'
                ? 'Certified technicians with years of experience in accident and collision repair.'
                : 'Πιστοποιημένοι τεχνικοί με πολυετή εμπειρία σε επισκευές ατυχημάτων και συγκρούσεων.'}`
        },
        {
            title: `${language === 'en' ? 'Quality Guarantee' : 'Εγγύηση Ποιότητας'}`,
            image: qualityGuarantee,
            description: `${language === 'en'
                ? 'All repairs come with our quality guarantee for your peace of mind.'
                : 'Όλες οι επισκευές συνοδεύονται από εγγύηση ποιότητας για τη δική σας σιγουριά.'}`
        }
    ];


    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative max-w-full mx-auto mt-8" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-5 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 5000 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-64 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300 rounded overflow-hidden">
                                <p className="text-white text-lg font-semibold text-center absolute bottom-0 left-0 right-0 z-10 bg-black/50 p-1">{card.title}</p>

                                {/* <div className="bg-black/10 absolute bottom-0 left-0 right-0 top-0"></div> */}

                                <img src={card.image} alt="card" className="w-full h-full object-cover " />

                                <div className="flex flex-col items-center justify-center px-4 opacity-0 group-active::opacity-100 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-center">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-5 md:w-5 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};

export default OurServices;