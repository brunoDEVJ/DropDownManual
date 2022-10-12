let iconMenu = document.querySelectorAll('.icon-menu');

iconMenu[0].addEventListener('click', () => {
    let menu = document.getElementById('menu')
    if(menu.classList.contains('hidden')) {
        menu.classList.add('show')
        menu.classList.remove('hidden')
    }else {
        
        menu.classList.remove('show')
        menu.classList.add('hidden')
    }
   
})