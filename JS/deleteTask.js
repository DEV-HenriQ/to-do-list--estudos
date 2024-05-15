function apagarTarefa()
{
   const allTrash = document.querySelectorAll('.apagar-tarefa')
   allTrash.forEach(function(cadaTrash)
   {
      cadaTrash.addEventListener('click', function()
      {
         cadaTrash.parentNode.parentNode.remove()
      })
   })
}