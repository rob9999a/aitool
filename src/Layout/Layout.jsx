import Navbar from "../Component/Website/Header/Navbar";
import Home from "../Component/Website/Home/Home";
import AdsenseAd from "../Dadsense/Dadsense";
import PopunderAd from "../PopunderAd/PopunderAd";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>

                <Home></Home>
            </main>

        </>
    );
};


export default Layouts