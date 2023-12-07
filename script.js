const formularioHTML = document.getElementById('form').addEventListener('submit', (event)=>{
      event.preventDefault();
      
      const areasHTML = document.querySelectorAll('input[name = "area-interest"]:checked')

      const listAreas = []

      for (const area of areasHTML){
            listAreas.push(area.value)
      }
      
      if(listAreas.length === 0)
      return alert('"Voce precisa selecionar pelo menos 1 area de interesse"')

      console.log('Nome: ' + nome.value);
      console.log('Endereço: ' + endereco.value);
      console.log('Cidade: ' + cidade.value);
      console.log('Estado: ' + estado.value);
      console.log('Curriculo: ' + curriculum.value);

      console.log('cargo ' + document.querySelector('input[name="cargo"]:checked').value);


})
