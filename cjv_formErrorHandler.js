/*Following code to be deployed on a GTM Custom Javascript Variable and to be used in conjunction with the acompanying CHTML tag code (chtml_formErrorEventListener.html)*/
function(){
    return function(e){
        try{
            //Store form in a locally scoped variable. This needs to be adjusted to your form.
            var formulario = document.querySelector('form#testForm');
            //If I click on the submit button
            if(e.target['type']==='submit'){
                //Leverage checkValidity() method to see if form is complete
                if(formulario.checkValidity()){
                    //Add 1 to formularioCounter variable
                    window.formularioCounter += 1;
                    //dataLayer.push()
                    window.dataLayer.push({
                        event:'form_submit_success',
                        number_of_submits: formularioCounter
                    });
                }
                //If form is not complete
                else{
                    //Add 1 formularioCounter
                    window.formularioCounter += 1;
                    //Storing all form fields in an array. This needs to be adjusted to your form
                    var camposFormulario = Array.from(formulario.querySelectorAll('input[type="text"],#pizza,#genero-musical'));
                    //Create camposFormularioNoRellenados empty array. Will use it later
                    var camposFormularioNoRellenados = [];
                    //I loop through each camposFormulario array items
                    camposFormulario.forEach(function(item){
                        //If not completed...
                        if(!item.checkValidity()){
                            //Text fields
                            if(item.type === 'text'){
                                //Pushing to camposFormularioNoRellenados array fields that aren't filed out
                                camposFormularioNoRellenados.push(item.name);
                            }
                            //Radio button fiels (only one is needed to be accessed as they are all part of the same fieldset)
                            else if(item.id === 'pizza'){
                                //I capture text of legend node
                                var capturedString = item.closest('fieldset').querySelector('legend').innerText;
                                //Cleaning up string
                                var cleanedUpString = capturedString.replace(':','');
                                //Pushing to camposFormularioNoRellenados array loweredCase string
                                camposFormularioNoRellenados.push(cleanedUpString.toLowerCase());
                            }
                            //Dropdown menu
                            else{
                                //Accessing label node text
                                var capturedString = item.previousElementSibling.innerText;
                                //Cleaning up string
                                var cleanedUpString = capturedString.replace(':','');
                                //Pushing to camposFormularioNoRellenados array loweredCase string
                                camposFormularioNoRellenados.push(cleanedUpString.toLowerCase());
                            }
                        }
                    });
                    //dataLayer.push()
                    window.dataLayer.push({
                        event:'form_submit_error',
                        error_number: formularioCounter,
                        error_fields: camposFormularioNoRellenados
                    });
                }
            }
        }catch(error){}
    }
}
