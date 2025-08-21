import { useEffect } from 'react';

const directLinks = [
    "https://www.profitableratecpm.com/ts9kq93ne?key=e5e1c90b28cf78fc9c41a80915c570b8",
    "https://www.profitableratecpm.com/uhazre74nz?key=9f55590e84e7ed6e96d725ceafcbdaed",
    "https://www.profitableratecpm.com/yiwuf7wnnc?key=dd81ef7fbf1436feddd26bc59d616562",
    "https://www.profitableratecpm.com/rtq2z7j24?key=20481a67c7fd38a88bff34ef651b4749"
];

const Popunder = ({ triggerEvent = 'load' }) => {

    useEffect(() => {
        const openAd = () => {
            // اختيار رابط عشوائي من القائمة
            const randomLink = directLinks[Math.floor(Math.random() * directLinks.length)];
            window.open(randomLink, '_blank', 'noopener,noreferrer,width=800,height=600');
        };

        if (triggerEvent === 'load') {
            // يفتح الإعلان مباشرة عند تحميل الصفحة
            openAd();
        }

        if (triggerEvent === 'click') {
            // يفتح الإعلان عند أي نقرة في الصفحة
            document.addEventListener('click', openAd, { once: true });
            return () => document.removeEventListener('click', openAd);
        }
    }, [triggerEvent]);

    return null; // لا يحتاج DOM مرئي
};

export default Popunder;
