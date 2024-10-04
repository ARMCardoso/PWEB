class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'não tem um ataque definido';
        }


        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}


document.getElementById('heroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const tipo = document.getElementById('tipo').value;


    const heroi = new Heroi(nome, idade, tipo);

 
    const resultado = heroi.atacar();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado; 
});
