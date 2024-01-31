# Tracking errors on your forms with Google Tag Manager (GTM)
This repository includes a dummy html form (form.html) to serve as the testing ground for the acocompanying JS files. These files in turn contain code that has been developed to enable Google Tag Manager error tracking on the aformentioned form. Please keep in mind that all code in this repository has been developed in accordance with the structure of the dummy html form. You will need to adjust it to your form.

This code has been developed so that it is deployed from within Google Tag Manager itself with the aim of: 

-Pushing to the GTM dataLayer successful and unsuccessful form submits

-Pushing to the GTM dataLayer the number of submits the form has required before being successfully submited

-Pushing to the GTM dataLayer the name of the fields that were not successfully filed out and resulted in a submit error


# How to deploy this code on Google Tag Manager (GTM)
Two different approaches can be followed:

-Attach the necessary eventListener and handle the form events from within the same code. This is accomplished through the formTracking.js file, which is intented to be deployed through a Google Tag Manager CHTML tag (a proper trigger will be needed). Following is a screenshot depicting this:

![Captura de pantalla 2024-01-31 a las 22 39 14](https://github.com/temphoyos/form-error-tracking/assets/87236758/a4c7684f-8a56-4539-9a59-52c8683bc115)

-Attach the necessary eventListener to the form through the chtml_formErrorEventListener.js file and manage the form's events and tracking through the eventHandler function developed in the cjv_formErrorHandler.js file. In this case, both files work in conjunction. chtml_formErrorEventListener.js is to be deployed through a GTM CHTML tag (a proper trigger will be needed) and cjv_formErrorHandler.js through a GTM Custom Javascript Variable. Following are two screenshots depciting this: 

![Captura de pantalla 2024-01-31 a las 22 40 58](https://github.com/temphoyos/form-error-tracking/assets/87236758/805520d1-2ef3-4fcb-8851-7d4128af3867)
![Captura de pantalla 2024-01-31 a las 22 43 03](https://github.com/temphoyos/form-error-tracking/assets/87236758/83986e75-fb20-4f61-8b17-d2898f205550)
