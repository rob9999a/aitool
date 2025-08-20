import Navbar from "../Component/Website/Header/Navbar";
import Home from "../Component/Website/Home/Home";
import AdsenseAd from "../Dadsense/Dadsense";
import PopunderAd from "../PopunderAd/PopunderAd";

const Layouts = ({ children }) => {



    return (
        <>
            <PopunderAd />
            <Navbar></Navbar>



            <main>{children}</main>

            <div className="container mx-auto">
                <AdsenseAd slot="1234567890" />
            </div>
        </>
    );
};


export default Layouts