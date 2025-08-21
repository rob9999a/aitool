// PopunderAd.jsx
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PopunderAd = () => {
    const containerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (!containerRef.current) return;

        // تنظيف المحتوى القديم عند تغيير الراوت
        containerRef.current.innerHTML = '';

        // إنشاء السكربت
        const script = document.createElement('script');
        script.src = '//pl27448508.profitableratecpm.com/c39b3bd3eab4b0b5a5910cf7fc622ee2/invoke.js';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');

        containerRef.current.appendChild(script);

        return () => {
            // تنظيف السكربت عند الخروج من الصفحة أو تغيير الراوت
            if (containerRef.current) containerRef.current.innerHTML = '';
        };
    }, [location.pathname]); // كل مرة يتغير الراوت، السكربت يُعاد تحميله

    return <div id="container-c39b3bd3eab4b0b5a5910cf7fc622ee2" ref={containerRef}></div>;
};

export default PopunderAd;
