const mobileMenuButton = document.querySelector('.mobile-menu')
const menu = document.querySelector('.menu-2')
const home = document.querySelector('.home')

mobileMenuButton.onclick = () => {

  if(!menu.classList.contains('show-menu')) {
    menu.classList.add('show-menu')
    menu.classList.remove('hide-menu')
    mobileMenuButton.classList.add('close')
  } else if (menu.classList.contains('show-menu')) {
    menu.classList.add('hide-menu')
    menu.classList.remove('show-menu')
    mobileMenuButton.classList.remove('close')
  }
 
}

window.onresize = () => {
  if (screen.width > 375) {
    menu.classList.remove('show-menu')
    menu.classList.remove('hide-menu')
  }
}

home.onclick = () => {
  alert('sss')
}