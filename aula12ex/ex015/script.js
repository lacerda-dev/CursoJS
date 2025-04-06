function verificar() {

    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 17) {
                //criança
                img.setAttribute('src', 'homem-crianca.jpg')
            } else if (idade >= 17 && idade < 35){
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 17) {
                //criança
                img.setAttribute('src', 'mulher-crianca.jpg')
            } else if (idade >= 17 && idade < 35){
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}