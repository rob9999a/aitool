import React, { useEffect, useState } from 'react';

const PopunderAd = () => {
    const [adBlockDetected, setAdBlockDetected] = useState(false);

    useEffect(() => {
        // كشف AdBlock
        const adTest = document.createElement('div');
        adTest.className = 'adsbox';
        adTest.style.height = '1px';
        adTest.style.width = '1px';
        adTest.style.position = 'absolute';
        adTest.style.left = '-9999px';
        document.body.appendChild(adTest);

        setTimeout(() => {
            if (adTest.offsetHeight === 0) {
                setAdBlockDetected(true);
            }
            document.body.removeChild(adTest);
        }, 100);

        // تحميل سكريبت Popunder فقط إذا لم يكن AdBlock
        if (!adBlockDetected) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js';
            document.body.appendChild(script);
        }
    }, [adBlockDetected]);

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
                        <h2>AdBlock Detected</h2>
                        <p>Please disable your ad blocker to support our site and see exclusive content.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopunderAd;
