import React, { useEffect, useRef } from 'react';

const AdsenseAd = () => {
    const adRef = useRef(null);

    useEffect(() => {
        try {
            // ينفذ إعلان أدسنس عند تحميل المكون
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Adsense error:', e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-9946281213833145"
            data-ad-slot="6060729396"
            ref={adRef}
        ></ins>
    );
};

export default AdsenseAd;
