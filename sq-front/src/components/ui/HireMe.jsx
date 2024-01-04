import { useState } from "react"
import handWave from "../../assets/handwave.svg#hand"
import closeIcon from "../../assets/icon-close-circle.svg"

export const HireMe = () => { 
    const [openAttr, setOpen] = useState("open")

    const handleClose = () => {
       openAttr ? setOpen("") : setOpen("open");
    }

    const animatedClasses = openAttr ? " bottom-0 right-0 rounded-tl-3xl bg-white p-4 pl-6 "
        : " bottom-1 right-1 bg-white/50 p-1 rounded-full"

    return (
        <aside className={"transition-all duration-200 fixed text-sm leading-6 z-50" + animatedClasses}>
            {openAttr ? 
                <>
          <h2 className="text-lg font-bold">Hire me!</h2>
                    <p><a className="underline" href="mailto:kae.unterseher@gmail.com">kae.unterseher@gmail.com</a></p>
                    <p>(509) 308-5094</p>
          <p>Bluesky: <a className="underline" href="bsky.app/untercurrent">@untercurrent</a></p>
            
            <button
                  type="button"
                  className="close absolute top-1 left-1"
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
            ><svg viewBox="0 0 128 128" width="50px">
            <use xlinkHref={handWave+"#hand"}></use>
        </svg> </button>
                
            }
        </aside>
    );
   
}