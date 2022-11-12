
const inputEmail = document.getElementById('emailL')
const inputSenha = document.getElementById('senhaA')
const loginPag = document.getElementById('loginAcesso')

loginPag.addEventListener('submit', (evento) => {
    evento.preventDefault()

    let listLogin = []
    let objLogin = {
        emails: '',
        senhas: ''
    }

    listLogin = JSON.parse(localStorage.getItem('dadosLogin'))

    listLogin.forEach((item) => {
        if (inputEmail.value == item.email && inputSenha.value == item.senha) {

            objLogin = {
                emails: item.email,
                senhas: item.senha
            }
        }

    })
    if (inputEmail.value == objLogin.emails && inputSenha.value == objLogin.senhas) {
        alert('Acesso permitido')
    } else {
        alert('Acesso negado')
    }

    loginPag.reset()
})