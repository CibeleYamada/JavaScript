/*Exercício: dar bom dia, boa tarde ou boa noite. 1º criar uma variável para saber a hora */

var hora = 2
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}