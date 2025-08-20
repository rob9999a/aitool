import { Home } from "lucide-react";
import Navbar from "../Component/Website/Header/Navbar";
import AdsenseAd from "../Dadsense/Dadsense";
import PopunderAd from "../PopunderAd/PopunderAd";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            <main><Home></Home></main>

        </>
    );
};


export default Layouts