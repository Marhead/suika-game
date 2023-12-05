import { useEffect } from "react";
import { preventScroll, allowScroll } from "@/utils/Scroll";

const usePreventScroll = () => {
    useEffect(() => {
        const prevScrollY = preventScroll();
        return () => {
            allowScroll(prevScrollY);
        };
    }, []);
};

export default usePreventScroll;