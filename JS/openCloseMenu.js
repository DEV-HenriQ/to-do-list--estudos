const menuBTN = document.querySelector('#menu')

menuBTN.addEventListener('click', openCloseMenu)

function openCloseMenu()
{
   const menuDIV = document.querySelector('.menu')
   const horario = document.querySelector('.horario')
   const tarefas = document.querySelector('.tarefas')

   if (menuDIV.classList.contains('menu-fechado'))
   {
      menuDIV.classList.remove('menu-fechado')
      menuDIV.classList.add('menu-aberto')

      horario.classList.remove('estado-menu-fechado')
      horario.classList.add('estado-menu-aberto')

      tarefas.classList.remove('estado-menu-fechado')
      tarefas.classList.add('estado-menu-aberto')

      menuBTN.innerHTML = `<img src="./IMG/close-icon.svg">`
   }
   else
   {
      menuDIV.classList.remove('menu-aberto')
      menuDIV.classList.add('menu-fechado')

      horario.classList.remove('estado-menu-aberto')
      horario.classList.add('estado-menu-fechado')

      tarefas.classList.remove('estado-menu-aberto')
      tarefas.classList.add('estado-menu-fechado')

      menuBTN.innerHTML = `<img src="./IMG/menu-icon.svg">`
   }
}