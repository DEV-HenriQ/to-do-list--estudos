function salvar()
{
   const popUp = document.querySelector(".pop-up-setTasks").innerHTML
   localStorage.setItem("tarefas", popUp)
   pegarTarefas()
}

function recuperar()
{
   if (localStorage.getItem("tarefas") == null)
   {
      return
   }
   else
   {
      let popUp = document.querySelector(".pop-up-setTasks")
      popUp.innerHTML = localStorage.getItem("tarefas")
      recuperarFuncao()
   }
}

function recuperarFuncao()
{
   // Função de abrir e fechar o dia
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

   // Função de adicionar tarefa
   const allMyDiv = document.querySelectorAll('.myDiv')
   allMyDiv.forEach(function(cadaDiv)
   {
      cadaDiv.children[1].addEventListener('click', function()
      {
         let valorInput = cadaDiv.children[0].value
         if (valorInput == false)
         {
            alert('IMPOSSÍVEL ADICIONAR TAREFA VAZIA...')
            return
         }
         const li = document.createElement('li')
         const span1 = document.createElement('span')
         const span2 = document.createElement('span')

         span1.innerHTML = valorInput
         span2.innerHTML = `<img class="apagar-tarefa" src="./IMG/trash-bin.svg" alt=""></span>`

         li.append(span1,span2)

         let txtX = 'txt' + cadaDiv.classList[0].slice(5,6)
         let ulX = document.querySelector(`.${txtX}`)
         ulX.append(li)

         cadaDiv.children[0].value = ''
         cadaDiv.classList.add('hide')
         cadaDiv.classList.remove('show')
         let titleX = 'title' + cadaDiv.classList[0].slice(5,6)
         document.querySelector(`.${titleX}`).children[1].innerHTML = '+'
         setarApagarTarefa()
         salvar()
      })
   })

   // Função de apagar tarefa
   setarApagarTarefa()

   const setTasks = document.querySelector('#setTasks')
   const closePopupBTN = document.querySelector('#close-pop-up-setTasks')

   setTasks.addEventListener('click', openCloseDiv)
   closePopupBTN.addEventListener('click', openCloseDiv)
}