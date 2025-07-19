function HowItWorks({title, description, icon}) {
    return (
        <div className="rounded-lg relative group hover:shadow-xl transition-all duration-300 border border-blue-100 shadow-lg shadow-blue-100 bg-white text-card-foreground min-h-64 md:min-h-86 lg:min-h-72">
            <div className="p-5 text-center">

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