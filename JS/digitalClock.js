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

   /* getCurrentDate.js */

   const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feixa", "Sábado"]

   const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

   const diaDaSemana = document.querySelector('.dia-da-semana')
   const dataDeHoje = document.querySelector('.data-de-hoje')
   const mesDeHoje = document.querySelector('.mes-de-hoje')
   const anoDeHoje = document.querySelector('.ano-de-hoje')

   const minhaData2 = new Date()

   diaDaSemana.innerHTML = dias[minhaData2.getDay()]
   dataDeHoje.innerHTML = minhaData2.getDate()
   mesDeHoje.innerHTML = meses[minhaData2.getMonth()]
   anoDeHoje.innerHTML = minhaData2.getFullYear()
}