function carregar(){

var msg = document.getElementById('msg')
var saud = document.getElementById('saud')
var img = document.getElementById('imagem')

/*var data = new Date()
var hora = data.getHours() == METODO ENSINADO PELO PROFESSOR GUANABARA  */

// var hora = new Date().getHours() == MÉTODO SIMPLIFICADO DO GUANABARA

var hora = `${new Date().getHours()}:${String(new Date().getMinutes())}` // MÉTODO SIMPLIFICADO ONDE CONSIGO PEGAR TANTO AS HORAS, QUANTO OS MINUTOS


msg.innerHTML = `Agora são <strong>${hora}</strong>`

if (hora >= 0 && hora < 12){
    saud.innerHTML = `Bom Dia!`
    img.src = 'foto-manha.jpg'
    document.body.style.background = '#bfd5e0'
} else if (hora >= 12 && hora < 18) { 
    saud.innerHTML = `Boa Tarde!`
    img.scr = 'foto-tarde.jpg'
    document.body.style.background = '#c38a60'
} else {   
    saud.innerHTML = `Boa Noite!`
    img.src = 'foto-noite.jpg'
    document.body.style.background = '#244e7d'
}
}