// Dadsense/Dadsense.js - كومبوننت محسن للإعلانات
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AdsenseAd = ({
    slot,
    format = "auto",
    responsive = true,
    style = {},
    className = "",
    onAdLoad = null,
    fallback = null
}) => {
    const adRef = useRef(null);
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const loadAd = () => {
            try {
                // التأكد من وجود AdSense
                if (typeof window !== 'undefined' && window.adsbygoogle) {
                    // تنظيف الإعلان السابق
                    if (adRef.current) {
                        adRef.current.innerHTML = '';
                    }

                    // إضافة ins element جديد
                    const ins = document.createElement('ins');
                    ins.className = 'adsbygoogle';
                    ins.style.display = 'block';
                    ins.setAttribute('data-ad-client', 'ca-pub-9946281213833145');
                    ins.setAttribute('data-ad-slot', slot);
                    ins.setAttribute('data-ad-format', format);
                    ins.setAttribute('data-full-width-responsive', responsive.toString());

                    // إضافة الستايل
                    Object.keys(style).forEach(key => {
                        ins.style[key] = style[key];
                    });

                    if (adRef.current) {
                        adRef.current.appendChild(ins);

                        // تحميل الإعلان
                        window.adsbygoogle.push({});

                        // مراقبة تحميل الإعلان
                        const checkAdLoad = setInterval(() => {
                            if (ins.getAttribute('data-ad-status') === 'filled') {
                                setIsLoaded(true);
                                setHasError(false);
                                if (onAdLoad) onAdLoad();
                                clearInterval(checkAdLoad);
                            } else if (ins.getAttribute('data-ad-status') === 'unfilled') {
                                setHasError(true);
                                setIsLoaded(false);
                                clearInterval(checkAdLoad);
                            }
                        }, 1000);

                        // تنظيف بعد 10 ثواني
                        setTimeout(() => clearInterval(checkAdLoad), 10000);
                    }
                }
            } catch (error) {
                console.error('AdSense Error:', error);
                setHasError(true);
                setIsLoaded(false);
            }
        };

        // تأخير قصير لضمان تحميل الصفحة
        const timer = setTimeout(loadAd, 500);

        return () => {
            clearTimeout(timer);
            if (adRef.current) {
                adRef.current.innerHTML = '';
            }
        };
    }, [location.pathname, slot, format, responsive]);

    return (
        <div className={`ad-container ${className}`}>
            {!isLoaded && !hasError && (
                <div className="ad-loading">
                    <div className="loading-animation"></div>
                    <p>Loading Advertisement...</p>
                </div>
            )}

            <div
                ref={adRef}
                className={`adsense-wrapper ${isLoaded ? 'loaded' : ''}`}
                style={style}
            />

            {hasError && fallback && (
                <div className="ad-fallback">
                    {fallback}
                </div>
            )}
        </div>
    );
};

export default AdsenseAd;