import Navbar from "../Component/Website/Header/Navbar";
import Home from "../Component/Website/Home/Home";
import AdsenseAd from "../Dadsense/Dadsense";
import PopunderAd from "../PopunderAd/PopunderAd";

const Layouts = ({ children }) => {

    // Native Ad يظهر في كل صفحة
    const NativeAd = () => {
        useEffect(() => {
            const container = document.getElementById("native-ad");
            if (container) {
                const script = document.createElement("script");
                script.src = "//pl27448508.profitableratecpm.com/c39b3bd3eab4b0b5a5910cf7fc622ee2/invoke.js";
                script.async = true;
                script.dataset.cfasync = "false";
                container.appendChild(script);
                return () => container.removeChild(script);
            }
        }, []);

        return <div id="native-ad" style={{ margin: "0 0" }}></div>;
    };

    return (
        <>
            <PopunderAd />
            <NativeAd></NativeAd>



            <main>{children}</main>

            <div className="container mx-auto px-12 my-8">
                <AdsenseAd slot="1234567890" />
            </div>
        </>
    );
};


export default Layouts