import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const AdsenseAd = () => {
    const adRef = useRef(null);
    const location = useLocation(); // تابع تغيير الصفحة

    useEffect(() => {
        try {
            // إزالة أي سكريبت موجود مسبقاً لتجنب التكرار
            const existingScript = document.querySelector(
                'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
            );
            if (!existingScript) {
                const script = document.createElement("script");
                script.src =
                    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9946281213833145";
                script.async = true;
                script.crossOrigin = "anonymous";
                document.body.appendChild(script);
            }

            // دفع الإعلان عند كل تغيير Route
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("Adsense error:", e);
        }
    }, [location]); // التابع يعمل عند تغيير الصفحة

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9946281213833145"
            data-ad-slot="3156090809"
            data-ad-format="auto"
            data-full-width-responsive="true"
            ref={adRef}
        />
    );
};

export default AdsenseAd;
