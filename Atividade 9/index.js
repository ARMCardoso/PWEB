
 
document.getElementById('formu1').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const n1 = Number(document.getElementById('numero1').value);
    const n2 = Number(document.getElementById('numero2').value);
    const n3 = Number(document.getElementById('numero3').value);

    const mAior = [n1, n2, n3];
    const mor = Math.max(...mAior);


    document.getElementById('formu1').reset();
    document.getElementById('saida1').value = mor;
 
});


document.getElementById('formu2').addEventListener('submit', function(event) {
    event.preventDefault();

    const n1 = Number(document.getElementById('numero4').value);
    const n2 = Number(document.getElementById('numero5').value);
    const n3 = Number(document.getElementById('numero6').value);

    const mAior = [n1, n2, n3];
    const mor = mAior.sort();


    document.getElementById('formu2').reset();
    document.getElementById('saida2').value = mor;

});

document.getElementById('formu3').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const str1 = document.getElementById('frase1').value
    const stringSemEspec = str1.replace(/[^a-z0-9]/gi, '').toUpperCase();
    const str1inversa = stringSemEspec.split('').reverse().join('');


    document.getElementById('formu3').reset();

    if(stringSemEspec == str1inversa){
        document.getElementById('saida3').value = "É Palíndromo";
    }else{
        document.getElementById('saida3').value = "Não é Palíndromo";
    }


});

document.getElementById('formu4').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const n1 = Number(document.getElementById('lado1').value);
    const n2 = Number(document.getElementById('lado2').value);
    const n3 = Number(document.getElementById('lado3').value);


    document.getElementById('formu4').reset();

    if(n1 == n2 && n2 == n3){
        document.getElementById('saida4').value = "Triangulo Equilatero";
    }else if (n1 === n2 || n1 === n3 || n2 === n3) {
        document.getElementById('saida4').value = "Triangulo Isósceles";
    }else {
        document.getElementById('saida4').value = "Triangulo Escaleno";
    }


});