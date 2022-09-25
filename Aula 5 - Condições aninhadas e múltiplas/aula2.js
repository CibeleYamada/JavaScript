var idade = 67
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

/* Se a idade for menor que 16 = não vota
    senão (é obrigatoriamente maior que 16), mas se for menor que 18 ou maior que 65, o voto é opcional. Senão, (para maior que 16 - 1ª condição, e não for menor que 18 ou maior que 65 - 2ª condição), o voto é obrigatório. */
/* || significa ou. */