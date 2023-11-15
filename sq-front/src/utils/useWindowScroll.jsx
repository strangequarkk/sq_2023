import { useEffect } from "react"

export const useWindowScroll = (handleScroll) => {

    useEffect(() => {
        const onScroll = () => { 
            handleScroll(window.scrollY);
        }
        // ensure only one (of this type) of event listener attached at a time
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    })
 }
