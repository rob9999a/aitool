import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PopunderAd = () => {
    const location = useLocation();

    useEffect(() => {
        // تحميل السكربت عند تحميل الصفحة
        const script = document.createElement('script');
        script.src = '//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // إزالة السكربت عند الخروج من الصفحة أو تغيير الراوت
            document.body.removeChild(script);
        };
    }, [location.pathname]);

    return null; // لأنه لا يحتاج DOM مرئي
};

export default PopunderAd;
