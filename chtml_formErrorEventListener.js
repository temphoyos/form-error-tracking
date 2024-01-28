/*Following code to be deployed through a GTM Custom HTML tag.*/
//Storing eventHandler that is configured in a GTM Custom Javascript Variable function in a variable
var formErrorHandler = "{{CJS - formErrorHandler}}";/*Remove string quotes and adjust to the name you give to your Custom Javascript variable!*/
//Is the form wo which I want to add tracking available in the DOM? - To be adjusted to your form
if(document.querySelector('form#testForm')){
  //Creating formularioCounter variable in Global namespace to keep a track of total form submits
  var formularioCounter = window.formularioCounter || 0;
  //Storing to be tracked form in a variable - Needs to be adjusted to your form
  var formulario = document.querySelector('form#testForm');
  //Adding 'click' event listener to form. Will be listening to clicks on sbumbit button through eventHandler.
   formulario.addEventListener('click',formErrorHandler,true);
}