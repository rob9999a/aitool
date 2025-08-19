import { useEffect } from "react";

const PopunderAd = () => {
    useEffect(() => {
        const popunderShown = sessionStorage.getItem("popunderShown");

        if (!popunderShown) {
            const links = [
                "https://www.profitableratecpm.com/ts9kq93ne?key=e5e1c90b28cf78fc9c41a80915c570b8",
                "https://www.profitableratecpm.com/uhazre74nz?key=9f55590e84e7ed6e96d725ceafcbdaed"
            ];
            const randomLink = links[Math.floor(Math.random() * links.length)];

            // Popunder يظهر بعد 5 ثواني
            setTimeout(() => {
                window.open(randomLink, "_blank");
                sessionStorage.setItem("popunderShown", "true");
            }, 5000);
        }
    }, []);

    return null;
};

export default PopunderAd;
