import { useEffect } from 'react';

const PopunderAd = ({ keyForReload }) => {
    useEffect(() => {
        // إنشاء السكربت عند كل تغيير keyForReload
        const script = document.createElement('script');
        script.src = '//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // إزالة السكربت القديم قبل إضافة الجديد
            document.body.removeChild(script);
        };
    }, [keyForReload]);

    return null; // لا يحتاج DOM مرئي
};

export default PopunderAd;
