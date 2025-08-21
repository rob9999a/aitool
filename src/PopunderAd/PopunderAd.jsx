// PopunderAd.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PopunderAd = () => {
    const [clickCount, setClickCount] = useState(0);
    const [showAd, setShowAd] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // إعادة تعيين العداد عند تغيير الصفحة
        setClickCount(0);
        setShowAd(false);
    }, [location.pathname]);

    useEffect(() => {
        if (showAd) {
            // إنشاء السكربت عندما يظهر الإعلان
            const script = document.createElement('script');
            script.src = '//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [showAd]);

    const handleClick = () => {
        setClickCount(prev => {
            const newCount = prev + 1;
            if (newCount >= 3) {
                setShowAd(true);
            }
            return newCount;
        });
    };

    return (
        <div onClick={handleClick} style={{ minHeight: '100vh' }}>
            {/* لا نضع أي محتوى مرئي هنا لأن الإعلان سيظهر تلقائيًا */}
        </div>
    );
};

export default PopunderAd;
