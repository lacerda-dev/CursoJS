function contar(){
    
    var i = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('passos').value)
    var r = document.getElementById('res')

    if (i == " " || f == " " || p == " "){
        alert('[ERRO] Faltam dados!')
    } else {
        r.innerHTML = 'Contando..'

        if (i < f){

        for(var c = i; c <= f; c += p){
            r.innerHTML += ` ${c} \u{1F449} `
        }
        r.innerHTML += `\u{1F3F4}`
        } else {
            for(var c = i; c >= f; c -= p){
                r.innerHTML += ` ${c} \u{1F449} `
            }
            r.innerHTML += `\u{1F3F4}`
        }
    }
}