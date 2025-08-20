import React, { useEffect, useState } from 'react';

const PopunderAd = () => {
    const [adBlockDetected, setAdBlockDetected] = useState(false);


    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);



    useEffect(() => {
        const testAd = document.createElement('div');
        testAd.className = 'adsbox';
        testAd.style.height = '1px';
        document.body.appendChild(testAd);

        setTimeout(() => {
            if (testAd.offsetHeight === 0) {
                console.log('AdBlock detected');
                // هنا ممكن تعرض رسالة أو تلتزم بعدم تحميل الإعلان
            } else {
                // تحميل السكريبت الإعلاني هنا
            }
            document.body.removeChild(testAd);
        }, 100);
    }, []);


    return (
        <>
            {adBlockDetected && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    textAlign: 'center',
                    padding: '20px',
                }}>
                    <div>
                        <div id="container-c39b3bd3eab4b0b5a5910cf7fc622ee2"></div>

                        <h2>AdBlock Detected</h2>
                        <p>Please disable your ad blocker to support our site and see exclusive content.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopunderAd;
