$(document).ready(function(){
    $("#urlap").validate({
        rules: {
            nev: "required",
            email:{
                required: true,
                email: true,
            },
            sport: {
                required: true,
                minlength: 3,
            },
            vernyomas:{
                required: true,
            },
            leiras:{
                required:true,
                minlength:33,
            }
            
        },
        messages:{
            nev: "Kérjük adja meg a nevét!",
            email: "Kérjük valós email-t adjon meg!",
            sport:{
                required: "Kérjük adja meg mit sportol!",
                minlength: "Legalább 3 karakterben kérjük!",
            },
            vernyomas:"Kérjük válassza ki a vérnyomását!",
            leiras:{
                required:"Kérjük töltse ki!",
                minlength: "Kérjük legalább 33 karakterben!"
            }
        },
    });
});