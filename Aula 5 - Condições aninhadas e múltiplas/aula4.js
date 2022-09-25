/*Exercício para saber a hora atual - dado pelo computador */

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

/*New Date e getHours são comandos JS para  data de agora e pegar hora do sistema que está rodando*/