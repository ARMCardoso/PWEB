
var nome = window.prompt("Digite o Nome do Aluno(a):")
var nota1 = window.prompt(`Digite a Nota 1 do(a) aluno(a) ${nome}:`)
var nota2 = window.prompt(`Digite a Nota 2 do(a) aluno(a) ${nome}:`)
var nota3 = window.prompt(`Digite a Nota 3 do(a) aluno(a) ${nome}:`)
var nota4 = window.prompt(`Digite a Nota 4 do(a) aluno(a) ${nome}:`)
var media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

document.querySelector('h2').innerHTML = `Bem-vindo ao Media, a nota do(a) aluno(a) ${nome} é ${media.toFixed(2)}`
document.querySelector('h2').style.visibility = "visible"