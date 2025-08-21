import { useEffect, useRef } from 'react';

const PopunderAd = ({ keyForReload }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // تنظيف المحتوى القديم عند إعادة التحميل
        containerRef.current.innerHTML = '';

        // إنشاء السكربت الجديد
        const script = document.createElement('script');
        script.src = '//pl27448508.profitableratecpm.com/c39b3bd3eab4b0b5a5910cf7fc622ee2/invoke.js';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');

        containerRef.current.appendChild(script);

        // تنظيف السكربت عند التفكيك
        return () => {
            if (containerRef.current) containerRef.current.innerHTML = '';
        };
    }, [keyForReload]);

    return <div id="container-c39b3bd3eab4b0b5a5910cf7fc622ee2" ref={containerRef}></div>;
};

export default PopunderAd;
