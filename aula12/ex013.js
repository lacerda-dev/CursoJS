var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-seira')
        break
    case 2:
        console.log('Terça-seira')
        break
    case 3:
        console.log('Quarta-seira')
        break
    case 4:
        console.log('Quinta-seira')
        break
    case 5:
        console.log('Sexta-seira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido')
        break
}