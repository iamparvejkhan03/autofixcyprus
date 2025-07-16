function CallToAction(){
    return (
        <section className="max-w-full bg-gray-900 text-white border-b border-b-gray-800">
            <div className="flex flex-col items-center justify-center text-center py-12 px-2 md:py-16 ">  
                <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.503 10.06a3.3 3.3 0 0 0-.88 1.809 4.7 4.7 0 0 0-.067 1.03v.545h.75q.416-.002.825-.075a3.24 3.24 0 0 0 1.81-.882 1.65 1.65 0 0 0-.131-2.325 1.65 1.65 0 0 0-2.307-.103m1.632 1.621a2.1 2.1 0 0 1-1.182.563h-.206v-.207a2.1 2.1 0 0 1 .563-1.18.34.34 0 0 1 .225-.076.63.63 0 0 1 .44.206.506.506 0 0 1 .16.694m9.6-9.581a.853.853 0 0 0-.835-.835A8.2 8.2 0 0 0 6.816 3.28L5.288 5.062l-2.25-.468a.94.94 0 0 0-.863.253l-.637.637a.94.94 0 0 0-.263.76.94.94 0 0 0 .422.693l1.931 1.238.122.075 3 3.047.075.075 1.238 1.931a.94.94 0 0 0 .693.422h.104a.94.94 0 0 0 .656-.272l.637-.637a.94.94 0 0 0 .253-.863l-.468-2.24 1.725-1.482A8.24 8.24 0 0 0 13.735 2.1M2.915 5.765l1.238.263-.6.703-.937-.628zm5.982 6.657-.628-.938.703-.6.263 1.238zm1.978-5.053-3.45 2.943-2.737-2.737 2.943-3.45a6.98 6.98 0 0 1 4.932-1.688 7 7 0 0 1-1.688 4.932" fill="blue"/>
                        <path d="M10.434 6.216a1.116 1.116 0 0 0-.056-1.594 1.086 1.086 0 0 0-1.918.742 1.1 1.1 0 0 0 .38.786 1.125 1.125 0 0 0 1.594.066" fill="blue"/>
                    </svg>
                    <span className="text-blue-600">Trusted by Customers</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-medium mt-2">
                    Fast, Reliable Car Repair <br />
                    — When You Need It Most
                </h2>
                <p className="text-gray-400 mt-2 max-w-5xl max-md:text-sm">Achieve your goals faster with personalized strategies, hands-on support, and results that speak for themselves.</p>
                
                <div className="flex gap-3 flex-wrap items-center justify-center">
                    <button type="button" className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-md cursor-pointer font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex"> 
                    Book a Repair

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car ml-2 w-5 h-5" data-lov-id="src/components/Hero.tsx:33:18" data-lov-name="Car" data-component-path="src/components/Hero.tsx" data-component-line="33" data-component-file="Hero.tsx" data-component-name="Car" data-component-content="%7B%22className%22%3A%22ml-2%20w-5%20h-5%22%7D"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
                    </button>

                    <button type="button" className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-md cursor-pointer font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex gap-1"> 
                        Contact Us

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-2 w-4 h-4" data-lov-id="src/components/Hero.tsx:39:18" data-lov-name="Phone" data-component-path="src/components/Hero.tsx" data-component-line="39" data-component-file="Hero.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22mr-2%20w-5%20h-5%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;