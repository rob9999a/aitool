import { useEffect } from "react";

export default function Dadsense() {

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXX"
            data-ad-slot="YYYYYYY"
            data-ad-format="auto"></ins>
    );
}
