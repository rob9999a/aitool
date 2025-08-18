import React, { useEffect, useRef } from "react";

const Adrush = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//pl27448508.profitableratecpm.com/c39b3bd3eab4b0b5a5910cf7fc622ee2/invoke.js";
        script.async = true;
        script.dataset.cfasync = "false";

        // ضع السكريبت في الصفحة
        containerRef.current.appendChild(script);

        return () => {
            // تنظيف السكريبت عند إلغاء المكوّن
            containerRef.current.removeChild(script);
        };
    }, []);

    return <div id="container-c39b3bd3eab4b0b5a5910cf7fc622ee2" ref={containerRef}></div>;
};

export default Adrush;
