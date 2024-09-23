
var n1 = window.prompt(`Digite o primeiro Número: `)
var n2 = window.prompt(`Digite o segundo Número: `)

var soma = (Number(n1) + Number(n2))
var subtracao = (Number(n1) - Number(n2))
var multiplic = (Number(n1) * Number(n2))
var divisao = (Number(n1) / Number(n2))
var resto = (Number(n1) % Number(n2))

document.querySelector('h2').innerHTML = `Bem-vindo, <br>Números digitados N1: ${n1} e N2: ${n2}. 
                                            <br>Os resultados são:  
                                                <br>Soma: ${soma.toFixed(2)}
                                                <br>Subtração: ${subtracao.toFixed(2)}
                                                <br>Multiplicação: ${multiplic.toFixed(2)}
                                                <br>Divisão: ${divisao.toFixed(2)}
                                                <br>Resto da Divisão: ${resto.toFixed(2)}`
document.querySelector('h2').style.visibility = "visible"