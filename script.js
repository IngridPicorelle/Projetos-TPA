//Pegando o evento de clique do botão calcular
const calcular = document.getElementById("calcular");

//Criação da função que realizará o cálculo
function imc () {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    //Validação da entrada de dados
    if (nome !== "" && altura !== "" && peso !== "") {

        const valorIMC = (peso/(altura**2)).toFixed(1);
        
        let classificacao = "", menor, maior;

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso.";
        }else if (valorIMC < 25) {
            classificacao = "com o peso ideal. Parabéns!";
        }else if (valorIMC < 30) {
            classificacao = "levemente acima do peso.";
        }else if (valorIMC < 35) {
            classificacao = "com obesidade grau I.";
        }else if (valorIMC < 40) {
            classificacao = "com obesidade grau II.";
        }else {
            classificacao = "com obesidade grau III.";
        }

        menor = (18.6 * (altura**2)).toFixed(1);
        maior = (24.9 * (altura**2)).toFixed(1);

        //Imprimir o resultado visto que foi tudo inserido corretamente
        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao} Procure manter o seu peso entre ${menor}kg e ${maior}kg`;

    }else {
        //Imprimir aviso caso os dados não tenham sido inseridos corretamente
        resultado.textContent = "Para calcular o seu IMC , preencha todos os campos!";
    }

}
calcular.addEventListener("click", imc);