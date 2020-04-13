var pacientes = document.querySelectorAll(".paciente");

paciente.forEach(function(paciente){
    paciente.addEventListener("dbclick", function(){
        console.log("Fui cliclado com um duplo click");
    });
});

