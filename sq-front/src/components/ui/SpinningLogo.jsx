import { useState, useEffect } from "react"

export const SpinningLogo = () => {
    const [rotation, setRotation] = useState(360);
   const [rotationStyle, setRotationStyle] = useState({transform:"rotate("+rotation+"deg)"})

    useEffect(() => {
        const onScroll = () => { 
            //if (window.scrollY % 3 === 0) {
                setRotation(rotation-1)
           // }
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    })

    useEffect(() => {
        setRotationStyle({transform:"rotate("+rotation+"deg)"})
    }, [rotation])

    return (
        <img id="logo" src="src/assets/strange-quark-logo-blackhole-light.svg"  style={rotationStyle} alt=""/>
    )
}