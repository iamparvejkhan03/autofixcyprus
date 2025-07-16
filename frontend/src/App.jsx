import { Outlet } from "react-router-dom";
import { Footer, Header, Hero } from "./components";

function App(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;