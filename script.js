// Pegar o elemento da mensagem e deixar dinamico OK
// Deixar a foto dinamica OK
// Criar uma função pra englobar o codigo OK -- colocar a função no html OK
// Pegar a data e hora atual OK
// colocar o msg em um inner html em interpolação OK
// fazer um if com as horas dia tarde e noite com as respectivas imagens OK
// mudar cor de fundo dinamicamente OK


function alterarHora() {

    const msg = document.querySelector('#msg');
    const foto = document.querySelector('img');
    let hora = new Date();
    let agora = hora.getHours();
    msg.innerHTML = `Agora são ${agora} horas.`

    if (agora >= 6 && agora < 12) {
        foto.src = "img/foto-manha.jpg"
        document.body.style.backgroundColor = '#9bb4e9'
    } else if (agora >= 12 && agora < 18) {
        foto.src = "img/foto-tarde.jpg"
        document.body.style.backgroundColor = '#df9f80'
    } else {
        foto.src = "img/foto-noite.jpg"
        document.body.style.backgroundColor = '#182b2f'
    }

}