This repository includes a dummy html form (form.html) to serve as a the testing ground for the acocompanying JS files. These files in turn contain code that has been developed to enable Google Tag Manager error tracking on the aformentioned form.

This code has been developed so that it is deployed from within Google Tag Manager itself with the aim of: 

-Pushing to the GTM dataLayer successful and unsuccessful form submits

-Pushing to the GTM dataLayer the number of submits the form has required before being successfully submited

-Pushing to the dataLayer the name of the fields that were not successfully filed out and resulted in a submit error

Two different approaches can be followed:

-Attach the necessary eventListener and handle the form events from within the same code. This is accomplished through the formTracking.js file, which is intented to be deployed through a Google Tag Manager CHTML tag. 

-Attach the necessary eventListener to the form through the chtml_formErrorEventListener.js file and manage the form's events and tracking through the eventHandler function developed in the cjv_formErrorHandler.js file. In this case, both files work in conjunction. chtml_formErrorEventListener.js is to be deployed through a GTM CHTML tag and cjv_formErrorHandler.js through a GTM Custom Javascript Variable. 