import React, { useEffect } from "react";

const SocialBar = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//pl27464192.profitableratecpm.com/3f/ed/a3/3feda393b0080593bd4b6345929e09d8.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="social-bar-container"></div>;
};

export default SocialBar;
