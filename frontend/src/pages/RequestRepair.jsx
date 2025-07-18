import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Container, FileUpload } from '../components';

const RequestRepair = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, control, setValue, watch, reset, trigger, formState: { errors } } = useForm();

    const files = watch('photos', []);

    const nextStep = async () => {
        // Validate current step before proceeding
        let isValid = true;

        if (step === 1) {
            isValid = files.length > 0;
            if (!isValid) {
                alert('Please upload at least one photo');
                return;
            }
        }
        else if (step === 2) {
            isValid = await trigger(['damageDescription', 'incidentDate', 'incidentLocation']);
        }
        else if (step === 3) {
            // No validation needed for services (all optional)
            isValid = true;
        }

        if (isValid) setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        reset();
        // Handle form submission here
    };

    return (
        <main className="max-w-5xl mx-auto pt-32 md:pt-40 pb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Car Repair Request</h2>
            <p className="text-sm md:text-lg text-gray-600 mt-3 text-center mx-5">Tell us about your car damage and we'll handle the rest for you.</p>

            <Container>
                {/* Progress indicator */}
                <div className="flex justify-between my-8">
                    {[1, 2, 3, 4].map((stepNumber) => (
                        <div
                            key={stepNumber}
                            className={`flex flex-col items-center ${step >= stepNumber ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                {stepNumber === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera w-5 h-5" data-lov-id="src/pages/RequestForm.tsx:91:16" data-lov-name="step.icon" data-component-path="src/pages/RequestForm.tsx" data-component-line="91" data-component-file="RequestForm.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-5%20h-5%22%7D"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>}

                                {stepNumber === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-5 h-5" data-lov-id="src/pages/RequestForm.tsx:91:16" data-lov-name="step.icon" data-component-path="src/pages/RequestForm.tsx" data-component-line="91" data-component-file="RequestForm.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-5%20h-5%22%7D"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>}

                                {stepNumber === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-5 h-5" data-lov-id="src/pages/RequestForm.tsx:91:16" data-lov-name="step.icon" data-component-path="src/pages/RequestForm.tsx" data-component-line="91" data-component-file="RequestForm.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-5%20h-5%22%7D"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>}

                                {stepNumber === 4 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5" data-lov-id="src/pages/RequestForm.tsx:91:16" data-lov-name="step.icon" data-component-path="src/pages/RequestForm.tsx" data-component-line="91" data-component-file="RequestForm.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-5%20h-5%22%7D"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
                            </div>
                            <span className="text-sm mt-1 hidden sm:block">
                                {stepNumber === 1 && 'Upload Photos'}
                                {stepNumber === 2 && 'Describe Damage'}
                                {stepNumber === 3 && 'Select Services'}
                                {stepNumber === 4 && 'Contact Info'}
                            </span>
                        </div>
                    ))}
                </div>

                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 mb-4">
                    <div className="h-full w-full flex-1 bg-black transition-all" style={{ transform: `${step === 1 ? 'translateX(-75%)' : step === 2 ? 'translateX(-50%)' : step === 3 ? 'translateX(-25%)' : 'translateX(-0%)'}` }}></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} style={{
                    boxShadow:
                        '10px 10px 10px rgba(219, 234, 254, 0.8), -10px -10px 10px rgba(219, 234, 254, 0.8)'
                }} className='my-10 p-5 sm:p-8 rounded-lg'>
                    {/* Step 1: Upload Photos */}
                    {step === 1 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Upload Damage Photos</h1>
                            <p className="text-gray-600 mb-6">Please upload clear photos of your car damage from different angles.</p>

                            <FileUpload
                                name="photos"
                                register={register}
                                setValue={setValue}
                                watch={watch}
                                errors={errors}
                            />

                            <div className="bg-blue-100 p-4 rounded-lg mt-6">
                                <h4 className="font-medium text-blue-900 mb-2">Photo Tips:</h4>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• Take photos in good lighting</li>
                                    <li>• Show damage from multiple angles</li>
                                    <li>• Include close-up and wide shots</li>
                                    <li>• Capture the entire damaged area</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Describe Damage */}
                    {step === 2 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Describe the Damage</h1>
                            <p className="text-gray-600 mb-6">Please provide details about what happened and the extent of the damage.</p>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor='damageDescription' className="block text-sm font-medium text-gray-700 mb-1">Damage Description *</label>
                                    <textarea
                                        {...register("damageDescription", { required: true })}
                                        rows={4}
                                        id='damageDescription'
                                        className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        placeholder="Please describe what happened to your car and the damage you can see..."
                                    />
                                    {errors.damageDescription && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='incidentDate' className="block text-sm font-medium text-gray-700 mb-1">When did this happen?</label>
                                        <input
                                            type="date"
                                            id='incidentDate'
                                            {...register("incidentDate")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='incidentLocation' className="block text-sm font-medium text-gray-700 mb-1">Where did it happen?</label>
                                        <input
                                            type="text"
                                            id='incidentLocation'
                                            {...register("incidentLocation")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                            placeholder="e.g., Nicosia, Limassol, Larnaca..."
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-100 p-4 rounded-md">
                                    <h4 className="font-medium text-blue-900 mb-2">What to include:</h4>
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• How the damage occurred (accident, weather, vandalism, etc.)</li>
                                        <li>• Which parts of the car are affected</li>
                                        <li>• Any mechanical issues you've noticed</li>
                                        <li>• If the car is still driveable</li>
                                        <li>• Any other relevant details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Additional Services */}
                    {step === 3 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Additional Services</h1>
                            <p className="text-gray-600 mb-6">Select any additional services you'd like us to provide along with your car repair.</p>

                            <div className="space-y-4">
                                <label className="flex items-start space-x-3 p-4 border border-blue-200 rounded-lg hover:border-blue-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register("pickupDelivery")}
                                        className="mt-1 h-4 w-4 text-blue-600"
                                    />
                                    <div>
                                        <h3 className="font-medium">Free Pickup & Delivery</h3>
                                        <p className="text-sm text-gray-600">We'll collect your car from your location and return it when repairs are complete</p>
                                    </div>
                                </label>

                                <label className="flex items-start space-x-3 p-4 border border-blue-200 rounded-lg hover:border-blue-400 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register("rentalCar")}
                                        className="mt-1 h-4 w-4 text-blue-600"
                                    />
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="font-medium">Rental Car Assistance</h3>
                                            <span className="text-sm text-gray-600">From €25/day</span>
                                        </div>
                                        <p className="text-sm text-gray-600">Help arranging a rental car while yours is being repaired</p>
                                    </div>
                                </label>

                                <label className="flex items-start space-x-3 p-4 border border-blue-200 rounded-lg hover:border-blue-400 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register("mechanicServices")}
                                        className="mt-1 h-4 w-4 text-blue-600"
                                    />
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="font-medium">Mechanic Services</h3>
                                            <span className="text-sm text-gray-600">Quote on request</span>
                                        </div>
                                        <p className="text-sm text-gray-600">Professional mechanic support for repairs and maintenance</p>
                                    </div>
                                </label>

                                {/* <label className="flex items-start space-x-3 p-4 border border-blue-200 rounded-lg hover:border-blue-400 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register("partsFinding")}
                                        className="mt-1 h-4 w-4 text-blue-600"
                                    />
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="font-medium">Auto Parts Finding</h3>
                                            <span className="text-sm text-gray-600">Cost + 15% fee</span>
                                        </div>
                                        <p className="text-sm text-gray-600">We'll locate and source any specific car parts you need</p>
                                    </div>
                                </label> */}

                                <label className="flex items-start space-x-3 p-4 border border-blue-200 rounded-lg hover:border-blue-400 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register("insuranceSupport")}
                                        className="mt-1 h-4 w-4 text-blue-600"
                                    />
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="font-medium">Insurance Support</h3>
                                            <span className="text-sm text-gray-600">FREE</span>
                                        </div>
                                        <p className="text-sm text-gray-600">We handle all insurance paperwork and communication for you</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Contact Info */}
                    {step === 4 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Contact Info</h1>
                            <p className="text-gray-600 mb-6">Please provide your contact details so we can reach you about your repair request.</p>

                            <div className="space-y-6">
                                <div className='space-y-4'>
                                    <label htmlFor='fullName' className="flex items-center space-x-2 text-gray-700">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5" data-lov-id="src/pages/RequestForm.tsx:91:16" data-lov-name="step.icon" data-component-path="src/pages/RequestForm.tsx" data-component-line="91" data-component-file="RequestForm.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-5%20h-5%22%7D"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                                        <span className="text-sm font-medium">Full Name*</span>

                                    </label>
                                    <input
                                        type="text"
                                        {...register("fullName", { required: true })}
                                        className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        placeholder="Your full name"
                                        id='fullName'
                                    />
                                    {errors.fullName && <p className="text-red-500 text-sm mt-1">Full name is required</p>}
                                </div>

                                <div className="space-y- flex flex-col sm:flex-row gap-5 w-full">
                                    <div className="space-y-4 w-full sm:w-1/2">
                                        <label htmlFor='phoneNumber' className="flex items-center space-x-2 text-gray-700">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4" data-lov-id="src/components/form/ContactInfo.tsx:41:14" data-lov-name="Phone" data-component-path="src/components/form/ContactInfo.tsx" data-component-line="41" data-component-file="ContactInfo.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>

                                            <span className="text-sm font-medium">Phone Number*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            {...register("phoneNumber")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                            placeholder="+357 99 123456"
                                            id='phoneNumber'
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
                                    </div>

                                    <div className="space-y-4 w-full sm:w-1/2">
                                        <label htmlFor='email' className="flex items-center space-x-2 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4" data-lov-id="src/components/form/ContactInfo.tsx:57:14" data-lov-name="Mail" data-component-path="src/components/form/ContactInfo.tsx" data-component-line="57" data-component-file="ContactInfo.tsx" data-component-name="Mail" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>

                                            <span className="text-sm font-medium">Email Address*</span>
                                        </label>
                                        <input
                                            type="email"
                                            {...register("email")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                            placeholder="your.email@example.com"
                                            id='email'
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <label htmlFor='address' className="flex items-center space-x-2 text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4" data-lov-id="src/components/form/ContactInfo.tsx:74:12" data-lov-name="MapPin" data-component-path="src/components/form/ContactInfo.tsx" data-component-line="74" data-component-file="ContactInfo.tsx" data-component-name="MapPin" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>

                                        <span className="text-sm font-medium">Address (for pickup/delivery)</span>
                                    </label>
                                    <textarea
                                        {...register("address")}
                                        rows={3}
                                        className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        placeholder="Your full address including city, postal code..."
                                        id='address'
                                    />
                                    {errors.fullName && <p className="text-red-500 text-sm mt-1">Address is required</p>}
                                </div>

                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                                    <ul className="text-sm text-blue-800 space-y-2">
                                        <li>• We'll contact you within 2 hours during business hours</li>
                                        <li>• Free consultation and damage assessment</li>
                                        <li>• Transparent quote with no hidden fees</li>
                                        <li>• Pickup scheduled at your convenience</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-8">
                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={() => {
                                    prevStep();
                                    window.scrollTo({top:0, behavior:'smooth'})
                                }}
                                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 cursor-pointer"
                            >
                                Previous
                            </button>
                        ) : (
                            <div></div>
                        )}

                        {step < 4 ? (
                            <button
                                type={step === 3 ? "button" : "button"} // Explicitly set for step 3
                                onClick={(e) => {
                                    if (step === 3) e.preventDefault(); // Additional prevention
                                    nextStep();
                                    window.scrollTo({top:0, behavior:'smooth'})
                                }}
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </Container>
        </main>
    );
};

export default RequestRepair;