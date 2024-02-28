const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feixa", "Sábado"]

const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

const diaDaSemana = document.querySelector('.dia-da-semana')
const dataDeHoje = document.querySelector('.data-de-hoje')
const mesDeHoje = document.querySelector('.mes-de-hoje')
const anoDeHoje = document.querySelector('.ano-de-hoje')

const minhaData = new Date()

diaDaSemana.innerHTML = dias[minhaData.getDay()]
dataDeHoje.innerHTML = minhaData.getDate()
mesDeHoje.innerHTML = meses[minhaData.getMonth()]
anoDeHoje.innerHTML = minhaData.getFullYear()