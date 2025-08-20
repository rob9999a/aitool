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

                {/* إعلان وسط الصفحة بعد المحتوى */}
                <div style={{ textAlign: "center", margin: "0 0" }}>
                    <AdsenseAd slot="1234567890" />
                </div>
            </main>


        </>
    );
};

export default Layouts;
