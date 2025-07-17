function HowItWorks({title, description, icon}) {
    return (
        <div className="rounded-lg relative group hover:shadow-xl transition-all duration-300 border border-blue-100 shadow-lg shadow-blue-100 bg-white text-card-foreground">
            <div className="p-8 text-center">

                {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">01</div>
                </div> */}

                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors duration-300 mt-4">
                    {icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>

            </div>
        </div>
    );
}

export default HowItWorks;