import { useState } from "react";
import { useEffect } from "react";

function ScrollToTopIcon() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const manageScroll = () => {
            setScrolled(window.scrollY > 100);
        }
        window.addEventListener('scroll', manageScroll);

        return () => window.removeEventListener('scroll', manageScroll);
    }, [])

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className={`bg-blue-600 p-2 rounded-full fixed bottom-5 right-5 flex items-center z-50 cursor-pointer ${!scrolled && 'hidden'}`} onClick={() => handleScroll()}>
                <div className="text-white font-bold align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-8 8h6v8h4v-8h6z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default ScrollToTopIcon;