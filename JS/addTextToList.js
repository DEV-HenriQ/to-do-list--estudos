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