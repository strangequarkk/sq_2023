import { useState } from "react"
import { useWindowScroll } from "../../../utils/useWindowScroll"
import handWave from "../../../assets/handwave.svg#hand"
import closeIcon from "../../../assets/icon-close-circle.svg"
import "./hireMe-style.css" //tailwind is unwieldy for custom animations

export const HireMe = () => { 
    
    const [openAttr, setOpen] = useState("open")
    const [wave, setWave] = useState("");
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {

        //if (openAttr) {
        setIsClosing(true);
        
        console.log("!!!DONT WAVE")
        removeWaveAnimation();
            const preventExtraWave = setTimeout(() => {
                setIsClosing(false);
                console.log('wave ok now')
                clearTimeout(preventExtraWave);
            }, 200)
        //}
       openAttr ? setOpen("") : setOpen("open");
    }

    const startWaveAnimation = () => {
        if (!wave && !isClosing) {
            console.log("activate wave")
            setWave("waveActive")
        }
    }
    const removeWaveAnimation = () => {
        if (wave) {
            console.log("remove wave")
            setWave("")
        }
    }

    useWindowScroll((scrollY) => {
        const pageEndHeight = document.documentElement.scrollHeight - document.body.scrollHeight;
  
        if (scrollY >= pageEndHeight - 10) {
            console.log("pagebottom wave active")
            setWave("waveActive")
        }
        else if (wave) {
            console.log("end pagebottom wave")
            setWave("");
        }
    })

    const bgClasses = openAttr ? " bottom-0 right-0 rounded-tl-3xl opacity-100 p-4 pl-6 "
        : " bottom-1 right-1 py-1 px-2 rounded-full "+ wave+"-parent"

    return (
        <aside className={"transition-all bg-white duration-200 fixed text-sm leading-7 z-50" + bgClasses}>
            {openAttr ? 
                <>
          <h2 className="text-lg font-bold">Hire me!</h2>
                    <p><a className="underline" href="mailto:kae.unterseher@gmail.com">kae.unterseher@gmail.com</a></p>
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
            ><svg viewBox="0 0 128 128" width="50px" className={wave}>
            <use xlinkHref={handWave+"#hand"}></use>
        </svg> </button>
                
            }
        </aside>
    );
   
}