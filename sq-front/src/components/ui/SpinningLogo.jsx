import { useState, useEffect } from "react"
import { useWindowScroll } from "../../utils/useWindowScroll"
//import { retrieveAllResumeItems } from "../../services/resume.service"

export const SpinningLogo = () => {
    const [rotation, setRotation] = useState(360);
   const [rotationStyle, setRotationStyle] = useState({transform:"rotate("+rotation+"deg)"})

    useWindowScroll(() => {
        let nextRotation = rotation == 0 ? 359.5 : rotation - 0.5;
        setRotation(nextRotation)

    })

    useEffect(() => {
        setRotationStyle({transform:"rotate("+rotation+"deg)"})
    }, [rotation])

    return (
        <img id="logo" src="src/assets/strange-quark-logo-blackhole-light.svg"  style={rotationStyle} alt=""/>
    )
}