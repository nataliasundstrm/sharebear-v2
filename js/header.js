// Arrow function - omslutande "funktion"
const headerScroll = () => {

    // Hämtar element från DOM (HTML)
    const header = document.querySelector('.header')

    // if: vi scrollar ner 200px och en headern byter färg och minskas 30px
    // else: ifall vi är under 200px, headern byter ej utseende
    const addClassToHeader = () => {

        if (window.scrollY > 200) {
            header.classList.add('header--scrolled')
        } else {
            header.classList.remove('header--scrolled')
        }
    }

    // "lyssnar" efter scroll
    window.addEventListener('scroll', addClassToHeader)

}

headerScroll()