/* Primeiro: criar variáveis para pegar dados inseridos (números digitados - let num), dados da lista (let lista), os resultados (let res) e valores (let valores)
*/
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // se o número é um número mesmo E se esse número não está na lista
        valores.push(Number(num.value)) // .push = adiciona um elemento (Número - valor da variável num) ao vetor. Se parar aqui, ele adiciona na lista, mas não mostra (não há retorno visual)
        let item = document.createElement('option') // para mostrar na tag Select, temos que criar um Option, criando uma variável (let) item, cujo valor é um elemento criado (adicionado). createElement (do tipo option - cria uma tag option) cria elementos de forma dinâmica no JS.
        item.text = `Valor ${num.value} adicionado.` // pedimos para mostrar, na forma de texto, o item adicionado.
        lista.appendChild(item) // para adicionar o item criado à lista, temos que usar o método appendChild(filho), que será adicionado ao pai lista.
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ""
    num.focus()
    
}