const buttonsPlus = document.querySelectorAll('.plus')
buttonsPlus.forEach(function(cada)
{
   cada.addEventListener('click', function abrirJanelinha()
{
   let classePai = cada.parentNode.classList[0]
   let inputX = 'input' + classePai.slice(5,6)
   let divX = document.querySelector(`.${inputX}`)
   let result = divX.classList.contains('hide')
   if(result)
   {
      divX.classList.add('show')
      divX.classList.remove('hide')
      cada.innerHTML = '-'
   }
   else
   {
      divX.classList.add('hide')
      divX.classList.remove('show')
      cada.innerHTML = '+'
   }
})
})