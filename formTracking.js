var formularioCounter = window.formularioCounter || 0;
//Formulario 
var formulario = document.querySelector('form');
//Código 
formulario.addEventListener('click',function(e){
    if(e.target['type']==='submit'){
        if(formulario.checkValidity()){
            formularioCounter += 1;
            window.dataLayer.push({
                event:'form_submit_success',
                number_of_submits: formularioCounter
            });
        }
        else{
            formularioCounter += 1;
            var camposFormulario = Array.from(document.querySelectorAll('input[type="text"],#pizza,#genero-musical'));
            var camposFormularioNoRellenados = [];

            camposFormulario.forEach(function(item){
                if(!item.checkValidity()){
                    if(item.type === 'text'){
                        console.log(item.name);
                        camposFormularioNoRellenados.push(item.name);
                    }
                    else if(item.id === 'pizza'){
                        var capturedString = item.closest('fieldset').querySelector('legend').innerText;
                        var cleanedUpString = capturedString.replace(':','');
                        console.log(cleanedUpString.toLowerCase());
                        camposFormularioNoRellenados.push(cleanedUpString.toLowerCase());
                    }
                    else{
                        var capturedString = item.previousElementSibling.innerText;
                        var cleanedUpString = capturedString.replace(':','');
                        console.log(cleanedUpString.toLowerCase());
                        camposFormularioNoRellenados.push(cleanedUpString.toLowerCase());
                    }
                }
            });

            window.dataLayer.push({
                event:'form_submit_error',
                error_number: formularioCounter,
                error_fields: camposFormularioNoRellenados
            });
        }
    }
});