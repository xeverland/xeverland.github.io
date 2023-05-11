const imagenes = document.querySelector('.imagenes')
const menu = document.querySelector('.menu-navegacion')

// console.log(menu)
// console.log(imagenes)


imagenes.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})



window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')  && e.target != menu && e.target !=imagenes   ){

            menu.classList.toggle("spread")

    }
})