const menuBTN = document.querySelector('#menu')

menuBTN.addEventListener('click', openCloseMenu)

function openCloseMenu()
{
   const menuDIV = document.querySelector('.menu')
   const horario = document.querySelector('.horario')
   const tarefas = document.querySelector('.tarefas')
   const semTexto = document.querySelectorAll('.texto')

   if (menuDIV.classList.contains('menu-fechado'))
   {
      menuDIV.classList.remove('menu-fechado')
      menuDIV.classList.add('menu-aberto')

      horario.classList.remove('estado-menu-fechado')
      horario.classList.add('estado-menu-aberto')

      tarefas.classList.remove('estado-menu-fechado')
      tarefas.classList.add('estado-menu-aberto')

      menuBTN.children[0].src = "./IMG/arrows-collapse-vertical.svg"

      semTexto.forEach((cada) => cada.classList.remove('sem-texto'))
   }
   else
   {
      menuDIV.classList.remove('menu-aberto')
      menuDIV.classList.add('menu-fechado')

      horario.classList.remove('estado-menu-aberto')
      horario.classList.add('estado-menu-fechado')

      tarefas.classList.remove('estado-menu-aberto')
      tarefas.classList.add('estado-menu-fechado')

      menuBTN.children[0].src = "./IMG/arrows-expand-vertical.svg"

      semTexto.forEach((cada) => cada.classList.add('sem-texto'))
   }
}