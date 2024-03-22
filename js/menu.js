// Arrow function - omslutande funktion
const menu = () => {

    // Hämtar element från DOM (HTML)
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.menu')

    const openMenu = () => {
        
        // pendlar mellan, en hamburgermeny med tre streck till att bilda ett minustecken 
        menuButton.classList.toggle('menu-button--close')

        // Pendlar mellan öppen och stängd menylista
        menu.classList.toggle('menu--opened')
    }

    // Lyssnar efter klick
    menuButton.addEventListener('click', openMenu)
}

menu()