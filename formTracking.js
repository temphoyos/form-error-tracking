//Creo variable en objeto Window (Globsl namespace) para seguir la cuenta de los envíos de formulario
var formularioCounter = window.formularioCounter || 0;
//Alojo formulario en una variable
var formulario = document.querySelector('form');
//Añado eventListener a formulario para escuchar eventos de tipo click en botón submit
formulario.addEventListener('click',function(e){
    //Si hago clic en botón submit
    if(e.target['type']==='submit'){
        //Uso método checkValidity() para saber si el formulario está correctamente validao
        if(formulario.checkValidity()){
            //Sumo uno a la variable formularioCounter
            formularioCounter += 1;
            //Ejecuto dataLayer.push()
            window.dataLayer.push({
                event:'form_submit_success',
                number_of_submits: formularioCounter
            });
        }
        //Si el formulario no está correctamente validado al hacer clic 
        else{
            //Sumo uno a variable formularioCounter
            formularioCounter += 1;
            //Alojo todos los campos del formulario en un array
            var camposFormulario = Array.from(document.querySelectorAll('input[type="text"],#pizza,#genero-musical'));
            //Creo array camposFormularioNoRellenados vacío que usaré más adelante
            var camposFormularioNoRellenados = [];
            //Recorro cada uno de los items del array camposFormulario
            camposFormulario.forEach(function(item){
                //Si no están correctamente validados...
                if(!item.checkValidity()){
                    //Campos tipo texto
                    if(item.type === 'text'){
                        //console.log(item.name);
                        //Empujo al al array camposFormularioNoRellenados campos de texto no rellenados
                        camposFormularioNoRellenados.push(item.name);
                    }
                    //Campos radio button (sólo hace falta leer uno ya que todos forman parte del mismo fieldset)
                    else if(item.id === 'pizza'){
                        //Capturo teto de nodo legend
                        var capturedString = item.closest('fieldset').querySelector('legend').innerText;
                        //Limpio el texto
                        var cleanedUpString = capturedString.replace(':','');
                        //console.log(cleanedUpString.toLowerCase());
                        //Empujo a array camposFormularioNoRellenados en minúsculas
                        camposFormularioNoRellenados.push(cleanedUpString.toLowerCase());
                    }
                    //Desplegable
                    else{
                        //Capturo texto de nodo label 
                        var capturedString = item.previousElementSibling.innerText;
                        //Limpio string
                        var cleanedUpString = capturedString.replace(':','');
                        //console.log(cleanedUpString.toLowerCase());
                        //Empujo a array camposFormularioNoRellenados en minúsculas
                        camposFormularioNoRellenados.push(cleanedUpString.toLowerCase());
                    }
                }
            });
            //Ejecuto dataLayer.push()
            window.dataLayer.push({
                event:'form_submit_error',
                error_number: formularioCounter,
                error_fields: camposFormularioNoRellenados
            });
        }
    }
});