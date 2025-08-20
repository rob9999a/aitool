import Navbar from "../Component/Website/Header/Navbar";
import Home from "../Component/Website/Home/Home";
import AdsenseAd from "../Dadsense/Dadsense";
import PopunderAd from "../PopunderAd/PopunderAd";

const Layouts = ({ children }) => {
    return (
        <>

            {/* المحتوى الرئيسي */}
            <main style={{ margin: "0" }}>
                {children}


            </main>


        </>
    );
};

export default Layouts;
