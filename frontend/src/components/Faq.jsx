function Faq({ question, answer }) {
    return (
        <details className="group py-4 [&_summary::-webkit-details-marker]:hidden bg-blue-100 p-5 rounded-md my-2">
            <summary className="flex items-center justify-between gap-1.5 text-gray-900 cursor-pointer">
                <h2 className="text-lg font-medium">{question}</h2>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block size-5 shrink-0 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden size-5 shrink-0 group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </summary>

            <p className="pt-4 text-gray-900">
                {answer}
            </p>
        </details>
    );
}

export default Faq;