import { useState } from "react"
import { useWindowScroll } from "../../../utils/useWindowScroll"
import handWave from "../../../assets/handwave.svg"
import closeIcon from "../../../assets/icon-close-circle.svg"
import "./hireMe-style.css" //tailwind is unwieldy for custom animations

export const HireMe = () => { 
    
    const [openAttr, setOpen] = useState("open")
    const [wave, setWave] = useState("");
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {

        //if (openAttr) {
        setIsClosing(true);
        
        removeWaveAnimation();
            const preventExtraWave = setTimeout(() => {
                setIsClosing(false);
                clearTimeout(preventExtraWave);
            }, 200)
        //}
       openAttr ? setOpen("") : setOpen("open");
    }

    const startWaveAnimation = () => {
        if (!wave && !isClosing) {
            setWave("waveActive")
        }
    }
    const removeWaveAnimation = () => {
        if (wave) {
            setWave("")
        }
    }

    useWindowScroll((scrollY) => {
        const pageEndHeight = document.documentElement.scrollHeight - document.body.scrollHeight;
  
        if (scrollY >= pageEndHeight - 5) {
            setWave("waveActive")
        }
        else if (wave) {
            setWave("");
        }
    })

    const bgClasses = openAttr ? " bottom-0 right-0 rounded-tl-3xl opacity-100 p-4 pl-6 "
        : " bottom-1 right-1 py-1 px-2 rounded-full "+ wave+"-parent"

    return (
        <aside className={"transition-all bg-white duration-200 fixed text-sm leading-[1.7rem] z-50" + bgClasses}>
            {openAttr ? 
                <>
                <h2 className="text-lg font-bold">Hire me!</h2>
                <p><a className="underline" href="mailto:kae.unterseher@gmail.com?subject=Let's Work Together!">kae.unterseher@gmail.com</a></p>
                <p>(509) 308-5094</p>
                <p>Bluesky: <a className="underline" href="bsky.app/untercurrent">@untercurrent</a></p>
            
                <button
                  type="button"
                  className="close absolute top-1 left-1 "
                  aria-label="Close"
                  onClick={handleClose}
                >
                    <svg viewBox="0 0 24 24" width="30px" className="absolute -top-3 -left-3">
                        <use xlinkHref={closeIcon+"#icon"}></use>
                    </svg>
                </button>
                </>
                :

                <button
                    type="button"
                    aria-label="Open"
                    onClick={handleClose}
                    onMouseEnter={startWaveAnimation}
                    onMouseLeave={removeWaveAnimation}
                >
                    <svg viewBox="0 0 131 131" width="50px" className={wave}>
                        <use xlinkHref={handWave+"#hand"}></use>
                    </svg>
                </button>
                
            }
        </aside>
    );
   
}