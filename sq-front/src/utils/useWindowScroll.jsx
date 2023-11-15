import { useEffect } from "react"

export default function useWindowScroll(handleScroll) {
    const onScroll = () => { 
        handleScroll(window.scrollY);
    }
    
    useEffect(() => {
  
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    })
    return [onScroll]
 }
