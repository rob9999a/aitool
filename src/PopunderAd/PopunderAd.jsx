import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PopunderAd = () => {
    const [clickCount, setClickCount] = useState(0);
    const [adLoaded, setAdLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setClickCount(0);
        setAdLoaded(false);
    }, [location.pathname]);

    const handleClick = () => {
        setClickCount(prev => {
            const newCount = prev + 1;

            if (newCount >= 3 && !adLoaded) {
                // تحميل السكربت مباشرة من window
                const script = document.createElement('script');
                script.src = '//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js';
                script.async = true;
                document.body.appendChild(script);
                setAdLoaded(true);
            }

            return newCount;
        });
    };

    return (
        <div onClick={handleClick} style={{ minHeight: '100vh' }}>
            {/* كل النقرات هنا تُحسب، الإعلان يظهر بعد 3 نقرات */}
        </div>
    );
};

export default PopunderAd;
