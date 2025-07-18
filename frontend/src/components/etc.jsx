import { Container, FileUpload } from "../components";

function RequestRepair() {
    return (
        <main className="pt-32 md:pt-40 pb-14">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Car Repair Request</h2>
                <p className="text-sm md:text-lg text-gray-600 mt-3 text-center">Tell us about your car damage and we'll handle the rest for you.</p>

                <div className="container mx-auto px-4 max-w-4xl my-8">
                    <div className="">
                        <div aria-valuemax="100" aria-valuemin="0" role="progressbar" className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 mb-4">
                            <div className="h-full w-full flex-1 bg-black transition-all" style={{transform: 'translateX(-75%)'}}></div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera w-5 h-5">
                                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                                    <circle cx="12" cy="13" r="3"></circle>
                                </svg>
                                <span className="text-sm font-medium hidden sm:block">Upload Photos</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-5 h-5">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                </svg>
                                <span className="text-sm font-medium hidden sm:block">Describe Damage</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-5 h-5">
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span className="text-sm font-medium hidden sm:block">Select Services</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span className="text-sm font-medium hidden sm:block">Contact Info</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-card text-card-foreground shadow-xl border-0">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold tracking-tight flex items-center gap-2 text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera w-6 h-6 text-blue-600">
                                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                                    <circle cx="12" cy="13" r="3"></circle>
                                </svg>
                                Upload Photos
                            </h3>
                        </div>

                        <div className="p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Damage Photos</h3>
                                    <p className="text-gray-600">Please upload clear photos of your car damage from different angles. You can upload up to 6 photos.</p>
                                </div>

                                {/* <div className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-dashed transition-colors border-gray-300 hover:border-blue-400">
                                    <div className="p-12 text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera w-8 h-8 text-blue-600">
                                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                                                <circle cx="12" cy="13" r="3"></circle>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Drop photos here or click to upload</h4>
                                        <p className="text-gray-600 mb-4">Supported formats: JPG, PNG, HEIC (Max 10MB each)</p>
                                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload w-4 h-4 mr-2">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="17 8 12 3 7 8"></polyline>
                                                <line x1="12" x2="12" y1="3" y2="15"></line>
                                            </svg>
                                            Choose Files
                                        </button>
                                        <input id="photo-input" type="file" multiple accept="image/*" className="hidden" />
                                    </div>
                                </div> */}
                                <FileUpload />

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-medium text-blue-900 mb-2">Photo Tips:</h4>
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• Take photos in good lighting</li>
                                        <li>• Show damage from multiple angles</li>
                                        <li>• Include close-up and wide shots</li>
                                        <li>• Capture the entire damaged area</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-between mt-8">
                                <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2" disabled="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4">
                                        <path d="m12 19-7-7 7-7"></path>
                                        <path d="M19 12H5"></path>
                                    </svg>
                                    Previous
                                </button>
                                <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default RequestRepair;