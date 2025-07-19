import { Outlet } from "react-router-dom";
import { Footer, Header, Hero, ScrollToTop, ScrollToTopIcon } from "./components";
import { Toaster } from "react-hot-toast";

function App(){
    return (
        <>
            <Toaster />
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTopIcon />
        </>
    )
}

export default App;