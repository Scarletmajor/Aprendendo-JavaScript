    
		var titulo = document.querySelector(".titulo")
        titulo.textContent = "Aparecida Nutricionista";
        
        var pacientes = document.querySelectorAll(".paciente");

        for(var i = 0; i < pacientes.length; i++){

            var paciente = pacientes[i];

            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;
    
            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;
    
            var tdImc = paciente.querySelector(".info-imc");
    
            var pesoEhValido = ValidaPeso(peso);
            var alturaEhValido = ValidaAltura(altura);
    
            if(!pesoEhValido){
                console.log("Peso inválido!");
                pesoEhValido = false;
                tdImc.textContent = "Peso Inválido!";
                paciente.classList.add("paciente-invalido");
            }
                
    
            if(!alturaEhValido){
                console.log("Altura inválida!");
                alturaEhValido = false;
                tdImc.textContent = "Altura Inválida!";
                paciente.classList.add("paciente-invalido");
            }
    
            if(pesoEhValido && alturaEhValido){
                var imc = calculaImc(peso,altura);
                tdImc.textContent = imc;
            }
        }

        function ValidaPeso(peso){
            if(peso >= 0 && peso < 1000){
                return true;
            }else {
                return false;
            }
        }

        function ValidaAltura(altura){
            if(altura >= 0 && altura <= 3.0){
                return true;
            }else{
                return false;
            }

        }

        function calculaImc(peso,altura){
            var imc = 0;
            imc = peso / (altura * altura);
            return imc.toFixed(2);
        }