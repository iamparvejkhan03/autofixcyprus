import { useState } from "react";
import { accidentRepair, expertTeam, insuranceClaims, qualityGuarantee, rentalCar } from "../assets";
import { carTow } from "../assets";

function OurServices(){
    const [stopScroll, setStopScroll] = useState(false);
    const cardData = [
        {
            title: "Accident Repair",
            image: accidentRepair,
            description:'Professional bodywork, dent repair, and paint restoration to get your car looking like new.'
        },
        {
            title: "Insurance Claims",
            image: insuranceClaims,
            description:'We hanlde all insurance paperwork and communication to make the process stress-free for you.'
        },
        {
            title: "Pickup & Delivery",
            image: carTow,
            description:'Free car collection from your location and delivery when the repair is complete.'
        },
        {
            title: "Rental Car Service",
            image: rentalCar,
            description:'Get a replacement vehicle while your car is being repaired so you can continue your daily routine.'
        },
        {
            title: "Expert Team",
            image: expertTeam,
            description:'Certified technicians with years of experience in accident and collision repair.'
        },
        {
            title: "Quality Guarantee",
            image: qualityGuarantee,
            description:'All repair come with our quality guarantee for your peace of mind.'
        },
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
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 5000 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-64 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300 rounded overflow-hidden">
                                <p className="text-white text-lg font-semibold text-center absolute bottom-0 left-0 right-0 z-10 bg-black/50 p-1">{card.title}</p>

                                {/* <div className="bg-black/10 absolute bottom-0 left-0 right-0 top-0"></div> */}

                                <img src={card.image} alt="card" className="w-full h-full object-cover " />

                                <div className="flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-center">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};

export default OurServices;