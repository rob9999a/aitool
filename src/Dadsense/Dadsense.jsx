import { useEffect } from "react";

const AdsenseAd = ({ slot }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9946281213833145"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default AdsenseAd;
