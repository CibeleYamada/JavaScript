function contar() {
    let s = window.document.getElementById('txti')
    let f = window.document. getElementById('txtf')
    let p = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    
    if (s.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('Valor inserido incorreto. Verifique e tente de novo')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(s.value)
        let e = Number(f.value)
        let pass = Number(p.value)
        if (i < e) {
            //contagem crescente
            for (let c = i; c <= e; c += pass) {
                res.innerHTML += `${c} \u{1F603}`
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= e; c -= pass) {
                res.innerHTML += ` ${c}`
            }
        }
    }
}