let respostas = [];

document.getElementById('formu').addEventListener('submit', function(event) {
    event.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    respostas.push({ idade, sexo, opiniao });


    const idades = respostas.map(item => item.idade);
    const minIdade = Math.min(...idades);
    const maxIdade = Math.max(...idades);

    
    const sum = idades.reduce((acc, curr) => acc + curr, 0);
    const media = sum / idades.length;

 
    let countBoaOtima = 0;
    let countPessimo = 0;

    respostas.forEach(resposta => {
        if (resposta.opiniao === 3 || resposta.opiniao === 4) {
            countBoaOtima++;
        } else if (resposta.opiniao === 1) {
            countPessimo++;
        }
    });


    const totalRespostas = respostas.length;
    const porcentagemBoaOtima = ((countBoaOtima / totalRespostas) * 100).toFixed(2);


    const countHomens = respostas.filter(resposta => resposta.sexo === 'M').length;
    const countMulheres = respostas.filter(resposta => resposta.sexo === 'F').length;


    document.getElementById('mediaIdade').innerText = `Média da Idade: ${media.toFixed(2)}`;
    document.getElementById('idadeVelha').innerText = `Idade da Pessoa Mais Velha: ${maxIdade}`;
    document.getElementById('idadeNova').innerText = `Idade da Pessoa Mais Nova: ${minIdade}`;
    document.getElementById('pessimoQtd').innerText = `Quantidade de Respostas "Péssimo": ${countPessimo}`;
    document.getElementById('percentOtimoBom').innerText = `Porcentagem de Respostas "Ótimo" e "Bom": ${porcentagemBoaOtima}%`;
    document.getElementById('homensMulheres').innerText = `Número de Homens: ${countHomens}, Mulheres: ${countMulheres}`;


    document.getElementById('formu').reset();
});
