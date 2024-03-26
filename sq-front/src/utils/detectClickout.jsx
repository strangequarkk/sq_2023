

export const detectClickOut = (clickableElement, handleClickOut) => {

    window.onclick = (event) => {
        if (event.target != clickableElement)  {
            handleClickOut()
        }
    }
}