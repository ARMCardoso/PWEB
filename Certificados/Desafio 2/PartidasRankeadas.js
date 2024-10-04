document.getElementById('rankedForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const vitorias = parseInt(document.getElementById('saldoVitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value); 
    const resultado = calcularNivel(vitorias, derrotas); 

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado; 
});

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; 
    let nivel = '';


    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}
