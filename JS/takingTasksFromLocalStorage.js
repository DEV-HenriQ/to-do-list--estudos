function pegarTarefas()
{
   const diaDeHoje = new Date().getDay()
   recuperar()
   document.querySelector('.minhas-tarefas').innerHTML = ''
   switch(diaDeHoje)
   {
      case 0:
         let txt6 = document.querySelector('.txt6')
         if (txt6.innerHTML == '')
         {
            return
         }
         else
         {
            const numFilhos = txt6.childNodes.length
            for (let i = 0; i < numFilhos; i++)
            {
               let texto = txt6.children[i].children[0].innerText
               adicionarNaLista(texto)
            }
         }
      break
      case 1:
         let txt0 = document.querySelector('.txt0')
         if (txt0.innerHTML == '')
         {
            return
         }
         else
         {
            const numFilhos = txt0.childNodes.length
            for (let i = 0; i < numFilhos; i++)
            {
               let texto = txt0.children[i].children[0].innerText
               adicionarNaLista(texto)
            }
         }
      break
      case 2:
         let txt1 = document.querySelector('.txt1')
         if (txt1.innerHTML == '')
         {
            return
         }
         else
         {
            const numFilhos = txt1.childNodes.length
            for (let i = 0; i < numFilhos; i++)
            {
               let texto = txt1.children[i].children[0].innerText
               adicionarNaLista(texto)
            }
         }
      break
      case 3:
         let txt2 = document.querySelector('.txt2')
         if (txt2.innerHTML == '')
         {
            return
         }
         else
         {
            const numFilhos = txt2.childNodes.length
            for (let i = 0; i < numFilhos; i++)
            {
               let texto = txt2.children[i].children[0].innerText
               adicionarNaLista(texto)
            }
         }
      break
      case 4:
         let txt3 = document.querySelector('.txt3')
         if (txt3.innerHTML == '')
         {
            return
         }
         else
         {
            const numFilhos = txt3.childNodes.length
            for (let i = 0; i < numFilhos; i++)
            {
               let texto = txt3.children[i].children[0].innerText
               adicionarNaLista(texto)
            }
         }
      break
      case 5:
         let txt4 = document.querySelector('.txt4')
         if (txt4.innerHTML == '')
         {
            return
         }
         else
         {
            const numFilhos = txt4.childNodes.length
            for (let i = 0; i < numFilhos; i++)
            {
               let texto = txt4.children[i].children[0].innerText
               adicionarNaLista(texto)
            }
         }
      break
      case 6:
         let txt5 = document.querySelector('.txt5')
         if (txt5.innerHTML == '')
         {
            return
         }
         else
         {
            const numFilhos = txt5.childNodes.length
            for (let i = 0; i < numFilhos; i++)
            {
               let texto = txt5.children[i].children[0].innerText
               adicionarNaLista(texto)
            }
         }
      break
      default: return
      break
   }
}

function adicionarNaLista(texto)
{
   const minhasTarefas = document.querySelector('.minhas-tarefas')
   const li = document.createElement('li')
   const checkbox = document.createElement('input')
   const label = document.createElement('label')

   let numeroDeTarefas = minhasTarefas.children.length

   checkbox.type = 'checkbox'
   checkbox.id = 'at' + (numeroDeTarefas+1)
   label.htmlFor = checkbox.id
   label.innerHTML = `${texto}`

   li.append(checkbox,label)
   minhasTarefas.append(li)
}