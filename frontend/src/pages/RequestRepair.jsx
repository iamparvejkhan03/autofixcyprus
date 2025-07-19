import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Container, FileUpload } from '../components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RequestRepair = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, control, setValue, watch, reset, trigger, formState: { errors } } = useForm();
    const language = useSelector(state => state.language);
    const {pathname} = useLocation();

    const [sending, setSending] = useState(false);

    const files = watch('photos', []);

    const nextStep = async () => {
        // Validate current step before proceeding
        let isValid = true;

        if (step === 1) {
            isValid = files.length > 0;
            if (!isValid) {
                alert(`${language === 'en' ? 'Please upload at least one photo' : 'Παρακαλώ ανεβάστε τουλάχιστον μία φωτογραφία'}`);
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

    useEffect(() => {
        const refreshServer = async () => {
            await axios.get(`${import.meta.env.VITE_DOMAIN_NAME}/api/v1/`);
        }
        refreshServer();
    }, [pathname])

    const onSubmit = async (requestData) => {
        try {
            setSending(true);
            const formData = new FormData();
            formData.append('name', requestData.fullName);
            formData.append('email', requestData.email);
            formData.append('phone', requestData.phoneNumber);
            formData.append('address', requestData.address);
            formData.append('incidentDate', requestData.incidentDate);
            formData.append('incidentLocation', requestData.incidentLocation);
            formData.append('damageDescription', requestData.damageDescription);
            formData.append('insuranceSupport', requestData.insuranceSupport);
            formData.append('mechanicServices', requestData.mechanicServices);
            formData.append('pickupDelivery', requestData.pickupDelivery);
            formData.append('rentalCar', requestData.rentalCar);
            requestData.photos.forEach((photo) => {
                formData.append('photos', photo);
            });

            const { data } = await axios.post(`${import.meta.env.VITE_DOMAIN_NAME}/api/v1/request-repair`, formData);

            if (data && data.success) {
                setSending(false);
                toast.success(data.message);
                reset();
                setStep(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="max-w-5xl mx-auto pt-32 md:pt-40 pb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                {language === 'en' ? 'Car Repair Request' : 'Αίτημα επισκευής αυτοκινήτου'}
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mt-3 text-center mx-5">
                {language === 'en' ? "Tell us about your car damage and we'll handle the rest for you." : 'Πείτε μας για τη ζημιά στο αυτοκίνητό σας και θα αναλάβουμε τα υπόλοιπα για εσάς.'}
            </p>

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
                                {stepNumber === 1 && `${language === 'en' ? 'Upload Photos' : 'Ανέβασμα φωτογραφιών'}`}
                                {stepNumber === 2 && `${language === 'en' ? 'Describe Damage' : 'Περιγράψτε τη ζημιά'}`}
                                {stepNumber === 3 && `${language === 'en' ? 'Select Services' : 'Επιλέξτε υπηρεσίες'}`}
                                {stepNumber === 4 && `${language === 'en' ? 'Contact Info' : 'Στοιχεία επικοινωνίας'}`}
                            </span>
                        </div>
                    ))}
                </div>

                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 mb-4">
                    <div className="h-full w-full flex-1 bg-black transition-all" style={{ transform: `${step === 1 ? 'translateX(-75%)' : step === 2 ? 'translateX(-50%)' : step === 3 ? 'translateX(-25%)' : 'translateX(-0%)'}` }}></div>
                </div>

                <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)} style={{
                    boxShadow:
                        '10px 10px 10px rgba(219, 234, 254, 0.8), -10px -10px 10px rgba(219, 234, 254, 0.8)'
                }} className='my-10 p-5 sm:p-8 rounded-lg'>
                    {/* Step 1: Upload Photos */}
                    {step === 1 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">
                                {language === 'en' ? 'Upload Damage Photos' : 'Ανεβάστε φωτογραφίες ζημιάς'}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {language === 'en' ? 'Please upload clear photos of your car damage from different angles.' : 'Παρακαλώ ανεβάστε καθαρές φωτογραφίες της ζημιάς του αυτοκινήτου σας από διαφορετικές γωνίες.'}
                            </p>

                            <FileUpload
                                name="photos"
                                register={register}
                                setValue={setValue}
                                watch={watch}
                                errors={errors}
                            />

                            <div className="bg-blue-100 p-4 rounded-lg mt-6">
                                <h4 className="font-medium text-blue-900 mb-2">
                                    {language === 'en' ? 'Photo Tips:' : 'Συμβουλές για φωτογραφίες:'}
                                </h4>
                                {language === 'en' ?
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• Take photos in good lighting</li>
                                        <li>• Show damage from multiple angles</li>
                                        <li>• Include close-up and wide shots</li>
                                        <li>• Capture the entire damaged area</li>
                                    </ul>
                                    :
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• Βγάλτε φωτογραφίες με καλό φωτισμό</li>
                                        <li>• Δείξτε τη ζημιά από πολλές γωνίες</li>
                                        <li>• Συμπεριλάβετε κοντινές και ευρυγώνιες λήψεις</li>
                                        <li>• Καταγράψτε ολόκληρη την κατεστραμμένη περιοχή</li>
                                    </ul>
                                }
                            </div>
                        </div>
                    )}

                    {/* Step 2: Describe Damage */}
                    {step === 2 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">
                                {language === 'en' ? 'Describe the Damage' : 'Περιγράψτε τη ζημιά'}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {language === 'en' ? 'Please provide details about what happened and the extent of the damage.' : 'Παρακαλώ δώστε λεπτομέρειες για το τι συνέβη και την έκταση της ζημιάς.'}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor='damageDescription' className="block text-sm font-medium text-gray-700 mb-1">
                                        {language === 'en' ? 'Damage Description' : 'Περιγραφή ζημιάς'}
                                        *</label>
                                    <textarea
                                        {...register("damageDescription", { required: true })}
                                        rows={4}
                                        id='damageDescription'
                                        className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        placeholder={`${language === 'en' ? 'Please describe what happened to your car and the damage you can see...' : 'Παρακαλώ περιγράψτε τι συνέβη στο αυτοκίνητό σας και τη ζημιά που μπορείτε να δείτε...'}`}
                                    />
                                    {errors.damageDescription && <p className="text-red-500 text-sm mt-1">
                                        {language === 'en' ? 'Description is required' : 'Απαιτείται περιγραφή'}
                                    </p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='incidentDate' className="block text-sm font-medium text-gray-700 mb-1">
                                            {language === 'en' ? 'When did this happen?' : 'Πότε συνέβη αυτό;'}
                                        </label>
                                        <input
                                            type="date"
                                            id='incidentDate'
                                            {...register("incidentDate")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='incidentLocation' className="block text-sm font-medium text-gray-700 mb-1">
                                            {language === 'en' ? 'Where did it happen?' : 'Πού συνέβη αυτό;'}
                                        </label>
                                        <input
                                            type="text"
                                            id='incidentLocation'
                                            {...register("incidentLocation")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                            placeholder={`${language === 'en' ? 'e.g., Nicosia, Limassol, Larnaca...' : 'π.χ., Λευκωσία, Λεμεσός, Λάρνακα...'}`}
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-100 p-4 rounded-md">
                                    <h4 className="font-medium text-blue-900 mb-2">
                                        {language === 'en' ? 'What to include:' : 'Τι να συμπεριλάβετε:'}
                                    </h4>
                                    {language === 'en' ?
                                        <ul className="text-sm text-blue-800 space-y-1">
                                            <li>• How the damage occurred (accident, weather, vandalism, etc.)</li>
                                            <li>• Which parts of the car are affected</li>
                                            <li>• Any mechanical issues you've noticed</li>
                                            <li>• If the car is still driveable</li>
                                            <li>• Any other relevant details</li>
                                        </ul> : <ul className="text-sm text-blue-800 space-y-1">
                                            <li>• Πώς προκλήθηκε η ζημιά (ατύχημα, καιρός, βανδαλισμός κ.λπ.)</li>
                                            <li>• Ποια μέρη του αυτοκινήτου έχουν επηρεαστεί</li>
                                            <li>• Οποιεσδήποτε μηχανικές βλάβες έχετε παρατηρήσει</li>
                                            <li>• Αν το αυτοκίνητο είναι ακόμη οδηγίσιμο</li>
                                            <li>• Οποιαδήποτε άλλα σχετικά στοιχεία</li>
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Additional Services */}
                    {step === 3 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">
                                {language === 'en' ? 'Additional Services' : 'Επιπλέον υπηρεσίες'}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {language === 'en' ? "Select any additional services you'd like us to provide along with your car repair." : 'Επιλέξτε οποιεσδήποτε επιπλέον υπηρεσίες θέλετε να σας προσφέρουμε μαζί με την επισκευή του αυτοκινήτου σας.'}
                            </p>

                            <div className="space-y-4">
                                <label className="flex items-start space-x-3 p-4 border border-blue-200 rounded-lg hover:border-blue-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register("pickupDelivery")}
                                        className="mt-1 h-4 w-4 text-blue-600"
                                    />
                                    <div>
                                        <h3 className="font-medium">
                                            {language === 'en' ? 'Free Pickup & Delivery' : 'Δωρεάν παραλαβή και παράδοση'}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {language === 'en' ? "We'll collect your car from your location and return it when repairs are complete" : 'Θα παραλάβουμε το αυτοκίνητό σας από την τοποθεσία σας και θα το επιστρέψουμε όταν ολοκληρωθούν οι επισκευές.'}
                                        </p>
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
                                            <h3 className="font-medium">
                                                {language === 'en' ? 'Rental Car Assistance' : 'Βοήθεια για ενοικίαση αυτοκινήτου'}
                                            </h3>
                                            <span className="text-sm text-gray-600">
                                                {language === 'en' ? 'From $25/day' : 'Από $25/ημέρα'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {language === 'en' ? 'Help arranging a rental car while yours is being repaired' : 'Βοήθεια για την ενοικίαση αυτοκινήτου ενώ το δικό σας επισκευάζεται'}
                                        </p>
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
                                            <h3 className="font-medium">
                                                {language === 'en' ? 'Mechanic Services' : 'Μηχανολογικές υπηρεσίες'}
                                            </h3>
                                            <span className="text-sm text-gray-600">
                                                {language === 'en' ? 'Quote on request' : 'Προσφορά κατόπιν αιτήματος'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {language === 'en' ? 'Professional mechanic support for repairs and maintenance' : 'Επαγγελματική υποστήριξη μηχανικού για επισκευές και συντήρηση'}
                                        </p>
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
                                            <h3 className="font-medium">
                                                {language === 'en' ? 'Insurance Support' : 'Υποστήριξη ασφάλισης'}
                                            </h3>
                                            <span className="text-sm text-gray-600">
                                                {language === 'en' ? 'FREE' : 'Δωρεάν'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {language === 'en' ? 'We handle all insurance paperwork and communication for you' : 'Αναλαμβάνουμε όλη τη γραφειοκρατία και την επικοινωνία με την ασφαλιστική για εσάς.'}
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Contact Info */}
                    {step === 4 && (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">
                                {language === 'en' ? 'Contact Info' : 'Στοιχεία επικοινωνίας'}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {language === 'en' ? 'Please provide your contact details so we can reach you about your repair request.' : 'Παρακαλώ δώστε τα στοιχεία επικοινωνίας σας ώστε να μπορέσουμε να επικοινωνήσουμε μαζί σας σχετικά με το αίτημα επισκευής σας.'}
                            </p>

                            <div className="space-y-6">
                                <div className='space-y-4'>
                                    <label htmlFor='fullName' className="flex items-center space-x-2 text-gray-700">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5" data-lov-id="src/pages/RequestForm.tsx:91:16" data-lov-name="step.icon" data-component-path="src/pages/RequestForm.tsx" data-component-line="91" data-component-file="RequestForm.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-5%20h-5%22%7D"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                                        <span className="text-sm font-medium">
                                            {language === 'en' ? 'Full Name*' : 'Πλήρες όνομα*'}
                                        </span>

                                    </label>
                                    <input
                                        type="text"
                                        {...register("fullName", { required: true })}
                                        className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        placeholder={`${language === 'en' ? 'Your full name' : 'Το πλήρες όνομά σας'}`}
                                        id='fullName'
                                    />
                                    {errors.fullName && <p className="text-red-500 text-sm mt-1">
                                        {language === 'en' ? 'Full name is required' : 'Απαιτείται πλήρες όνομα'}
                                    </p>}
                                </div>

                                <div className="space-y- flex flex-col sm:flex-row gap-5 w-full">
                                    <div className="space-y-4 w-full sm:w-1/2">
                                        <label htmlFor='phoneNumber' className="flex items-center space-x-2 text-gray-700">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4" data-lov-id="src/components/form/ContactInfo.tsx:41:14" data-lov-name="Phone" data-component-path="src/components/form/ContactInfo.tsx" data-component-line="41" data-component-file="ContactInfo.tsx" data-component-name="Phone" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>

                                            <span className="text-sm font-medium">
                                                {language === 'en' ? 'Phone Number*' : 'Αριθμός τηλεφώνου*'}
                                            </span>
                                        </label>
                                        <input
                                            type="tel"
                                            {...register("phoneNumber")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                            placeholder="+357 99 123456"
                                            id='phoneNumber'
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">
                                            {language === 'en' ? 'Phone number is required' : 'Απαιτείται αριθμός τηλεφώνου'}
                                        </p>}
                                    </div>

                                    <div className="space-y-4 w-full sm:w-1/2">
                                        <label htmlFor='email' className="flex items-center space-x-2 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4" data-lov-id="src/components/form/ContactInfo.tsx:57:14" data-lov-name="Mail" data-component-path="src/components/form/ContactInfo.tsx" data-component-line="57" data-component-file="ContactInfo.tsx" data-component-name="Mail" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>

                                            <span className="text-sm font-medium">
                                                {language === 'en' ? 'Email Address*' : 'Διεύθυνση email*'}
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            {...register("email")}
                                            className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                            placeholder="your.email@example.com"
                                            id='email'
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">
                                            {language === 'en' ? 'Email is required' : 'Απαιτείται email'}
                                        </p>}
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <label htmlFor='address' className="flex items-center space-x-2 text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4" data-lov-id="src/components/form/ContactInfo.tsx:74:12" data-lov-name="MapPin" data-component-path="src/components/form/ContactInfo.tsx" data-component-line="74" data-component-file="ContactInfo.tsx" data-component-name="MapPin" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>

                                        <span className="text-sm font-medium">
                                            {language === 'en' ? 'Address (for pickup/delivery)' : 'Διεύθυνση (για παραλαβή/παράδοση)'}
                                        </span>
                                    </label>
                                    <textarea
                                        {...register("address")}
                                        rows={3}
                                        className="w-full p-2 border border-blue-200 rounded-md focus:outline focus:outline-blue-300"
                                        placeholder={`${language === 'en' ? 'Your full address including city, postal code...' : 'Η πλήρης διεύθυνσή σας, συμπεριλαμβανομένης της πόλης και του ταχυδρομικού κώδικα...'}`}
                                        id='address'
                                    />
                                    {errors.fullName && <p className="text-red-500 text-sm mt-1">
                                        {language === 'en' ? 'Address is required' : 'Απαιτείται διεύθυνση'}
                                    </p>}
                                </div>

                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <h4 className="font-medium text-blue-900 mb-2">
                                        {language === 'en' ? 'What happens next?' : 'Τι συμβαίνει στη συνέχεια;'}
                                    </h4>
                                    {language === 'en' ? <ul className="text-sm text-blue-800 space-y-2">
                                        <li>• We'll contact you within 2 hours during business hours</li>
                                        <li>• Free consultation and damage assessment</li>
                                        <li>• Transparent quote with no hidden fees</li>
                                        <li>• Pickup scheduled at your convenience</li>
                                    </ul> : <ul className="text-sm text-blue-800 space-y-2">
                                        <li>• Θα επικοινωνήσουμε μαζί σας εντός 2 ωρών κατά τις εργάσιμες ώρες</li>
                                        <li>• Δωρεάν συμβουλευτική και εκτίμηση ζημιάς</li>
                                        <li>• Διαφανής προσφορά χωρίς κρυφές χρεώσεις</li>
                                        <li>• Προγραμματισμός παραλαβής σύμφωνα με τη δική σας ευκολία</li>
                                    </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="flex flex-wrap gap-5 justify-between mt-8">
                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={() => {
                                    prevStep();
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}
                                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 cursor-pointer"
                            >
                                {language === 'en' ? 'Previous' : 'Προηγούμενο'}
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
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                            >
                                {language === 'en' ? 'Next' : 'Τι συμβαίνει στη συνέχεια;'}
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
                            >
                                {!sending && (language === 'en' ? 'Submit Request' : 'Υποβολή αιτήματος')}
                                {sending && (<span className="flex space-x-1">
                                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.1s]"></span>
                                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"></span>
                                </span>)}
                            </button>
                        )}
                    </div>
                </form>
            </Container>
        </main>
    );
};

export default RequestRepair;