import Navbar from "../Component/Website/Header/Navbar";
import Home from "../Component/Website/Home/Home";
import AdsenseAd from "../Dadsense/Dadsense";
import PopunderAd from "../PopunderAd/PopunderAd";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            <PopunderAd />

            <main>{children}</main>

            <div className="container mx-auto px-12 my-8">
                <AdsenseAd slot="1234567890" />
            </div>
        </>
    );
};


export default Layouts