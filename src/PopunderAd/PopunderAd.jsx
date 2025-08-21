import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PopunderAd = ({ children }) => {
    const [clickCount, setClickCount] = useState(0);
    const [showAd, setShowAd] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // إعادة تعيين العد عند تغيير الصفحة
        setClickCount(0);
        setShowAd(false);
    }, [location.pathname]);

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
            {children}
            {showAd && (
                <div>
                    <script
                        type="text/javascript"
                        src="//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js"
                    ></script>
                </div>
            )}
        </div>
    );
};

export default PopunderAd;
