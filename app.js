var contagem = 0;

function quest1(){
    let input1 = document.getElementById("valor-1");
    let input2 = document.getElementById("valor-2");
    let input3 = document.getElementById("valor-3");
    let input = [input1.value, input2.value, input3.value];
    input.sort((a,b)=>b-a);
    let resposta = document.getElementById("resposta");
    if(input[0] === input[1] && input[1] === input[2]){
        resposta.style.display = "flex";
        resposta.innerHTML = "Este triângulo é Equilátero";
    } else if(input[0] != input[1] && input[1] != input[2]){
        resposta.style.display = "flex";
        resposta.innerHTML = "Este triângulo é Escaleno";
    } else if(input[0] === input[1] || input[1] === input[2] || input[0] === input[2]){
        resposta.style.display = "flex";
        resposta.innerHTML = "Este triângulo é Isósceles";
    }
} 

function quest2(){
    var input1 = parseInt(document.getElementById("valor-1-q2").value);
    let resposta = document.getElementById("resposta-2");
    resposta.style.display = 'flex';
    resposta.innerHTML = `O Valor do carro com todos impostos e custo de fabrica sai! ${(((input1*0.28)+input1)*(0.45))+input1} R$`
}

function quest3(){
    var input1 = document.getElementById("valor-1-q3");
    var input2 = document.getElementById("valor2q3");
    var input3 = document.getElementById("valor-3q3");
    var resposta = document.getElementById("resposta-3");
    if(input2.value < input1.value){
    resposta.style.display = 'flex';
    resposta.innerHTML = `Você pagara de imposto ${(input2.value * 0.038).toFixed(2)} R$ em um unico cheque`;
    if(input3.value > 0 && input1.value > input3.value){
    resposta.innerHTML = `Você pagara de imposto ${(input2.value * 0.038)+(input3.value * 0.038)} R$ em ambos cheques`;
    } if(input2.value == ""){
        resposta.style.display = 'flex';
        resposta.innerHTML = `Você pagara de imposto ${(input3.value * 0.038).toFixed(2)} R$ em um unico cheque`;
    }
    }else{
        resposta.style.display = 'flex';
        resposta.innerHTML = 'Valor do cheque indisponivel'
    } 
}

function quest4(){
    var input1 = document.getElementById("valor-1-q4");
    var input2 = document.getElementById("valor-2-q4");
    var resposta = document.getElementById("resposta-4")
    let imc = input2.value/input1.value**2;
    if(imc < 18.5){
        resposta.style.display = 'flex';
        resposta.innerHTML = "Sua categoria na tabela IMC é Magreza";
    }else if(imc > 18.5 && imc < 25){
        resposta.style.display = 'flex';
        resposta.innerHTML = "Sua categoria na tabela IMC é Normal";
    }else if(imc > 24.9 && imc < 30){
        resposta.style.display = 'flex';
        resposta.innerHTML = "Sua categoria na tabela IMC é Sobrepeso";
    }else if(imc > 29.9 && imc < 40){
        resposta.style.display = 'flex';
        resposta.innerHTML = "Sua categoria na tabela IMC é Obesidade";
    }else if(imc > 39.9){
        resposta.style.display = 'flex';
        resposta.innerHTML = "Sua categoria na tabela IMC é Obesidade Grave";
    }
}

function quest5(){
    const radioButtons = document.querySelectorAll('input[name="default-radio"]');
    var input1 = document.getElementById("valor-1-q5");
    var input2 = document.getElementById("valor-2-q5");
    var input3 = document.getElementById("valor-3-q5");
    var resposta = document.getElementById("resposta-5");
    radioButtons.forEach(radio => {
        if (radio.checked) {
            if(radio.value == 0){
                resposta.style.display = 'flex';
                resposta.innerHTML = `Sua média aritimetica é ${((parseFloat(input1.value)+parseFloat(input2.value)+parseFloat(input3.value))/3).toFixed(1)}`
            }else if(radio.value == 1){
                resposta.style.display = 'flex';
                resposta.innerHTML = `Sua média ponderada é ${(((parseFloat(input1.value)*3) +(parseFloat(input2.value)*3)+(parseFloat(input3.value)*4))/10).toFixed(1)}`
            }
            
        }
    });
}






