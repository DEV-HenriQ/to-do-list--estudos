const setTasks = document.querySelector('#setTasks')
const closePopupBTN = document.querySelector('#close-pop-up-setTasks')

setTasks.addEventListener('click', openCloseDiv)
closePopupBTN.addEventListener('click', openCloseDiv)

function openCloseDiv()
{
   const divBG = document.querySelector('.pop-up-setTasks-background')

   divBG.classList.toggle('sem-texto')
}