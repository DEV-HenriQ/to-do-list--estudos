const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

const x = setInterval(takeCurrentHour, 10)

function takeCurrentHour()
{
   const minhaData = new Date()

   horas.innerHTML = minhaData.getHours()
   minutos.innerHTML = minhaData.getMinutes()
   segundos.innerHTML = minhaData.getSeconds()

   if (horas.innerHTML < 10)
   {
      horas.innerHTML = '0' + horas.innerHTML
   }

   if (minutos.innerHTML < 10)
   {
      minutos.innerHTML = '0' + minutos.innerHTML
   }

   if (segundos.innerHTML < 10)
   {
      segundos.innerHTML = '0' + segundos.innerHTML
   }
}