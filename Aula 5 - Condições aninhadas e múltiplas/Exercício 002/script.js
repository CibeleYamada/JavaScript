function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('inasc')
    var res = window.document.querySelector('div#res')
    if (nasc.value.lenght == 0 || Number(nasc.value) > data) {
        window.alert('Verifique os dados inseridos e tente novamente')
    } else {
        var sex = window.document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        res.innerHTML = `Idade calculada ${idade}`    }

}
