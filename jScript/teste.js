

const loginPag = document.getElementById('loginAcesso')
function validaLogin(dadosLogin){
const inputEmail = document.getElementById('emailL')
    const inputSenha = document.getElementById('senhaA')

    let listLogin = []
    const objLogin = {
        emails: '',
        senhas: ''
    } 

    listLogin = JSON.parse(localStorage.getItem('dadosLogin'))

    listLogin.forEach((item) => {
        if (inputEmail.value == item.emails && inputSenha.value == item.senhas) {

            objLogin = {
                emails: item.email,
                senhas: item.senha
            }
        }
        console.log(objLogin)
      /*   if (inputEmail.value == objLogin.email && inputSenha.value == objLogin.senha) {
            alert('Acesso permitido')
        } else {
            alert('Acesso negado')
        } */
    });
}


loginPag.addEventListener('submit', (evento) => {
    evento.preventDefault()
    /* comparar(dadosLogin) */
    const inputEmail = document.getElementById('emailL')
    const inputSenha = document.getElementById('senhaA')

    let listLogin = []
    const objLogin = {
        emails: '',
        senhas: ''
    } 

    listLogin = JSON.parse(localStorage.getItem('dadosLogin'))

    listLogin.forEach((item) => {
        if (inputEmail.value == item.emails && inputSenha.value == item.senhas) {

            objLogin = {
                emails: item.email,
                senhas: item.senha
            }
        }
        console.log(objLogin)
      /*   if (inputEmail.value == objLogin.email && inputSenha.value == objLogin.senha) {
            alert('Acesso permitido')
        } else {
            alert('Acesso negado')
        } */
    });


    loginPag.reset()
})




// ---------------------------------------------------------------------------------------------------------------------------
/* 
const loginPag = document.getElementById('loginAcesso')

loginPag.addEventListener('submit', (evento) => {
    evento.preventDefault()
    comparar(dadosLogin)

    loginPag.reset()
})

function comparar(dadosLogin) {
    const inputEmail = document.getElementById('senhaA')
    const inputSenha = document.getElementById('emailL')

    let listLogin = []
    const objLogin = {
        email: '',
        senha: ''
    }
    listLogin = JSON.parse(localStorage.getItem('dadosLogin'))

    listLogin.forEach((item) => {
        if (inputEmail.value == item.email && inputSenha.value == item.senha) {
            objLogin = {
                email: item.email,
                senha: item.senha
            }
        }

        if (inputEmail.value == objLogin.email && inputSenha.value == objLogin.senha) {
            alert('Acesso permitido')
        } else {
            alert('Acesso negado')
        }
    });
 */
    /* console.log(listLogin) */

    /* console.log(inputEmail.value)
    console.log(inputSenha.value) */
    /* 
       
        console.log('funcionou') */


/* (teste1 == inputEmail && teste2 == inputSenha) */

//--------------------------------------------------------------------
/* 
const loginPag = document.getElementById('loginAcesso')

loginPag.addEventListener('submit', (evento) => {
    evento.preventDefault()
    comparar(dadosLogin)
    const inputEmail = document.getElementById('emailL')
    const inputSenha = document.getElementById('senhaA')

    let listLogin = []
    const objLogin = {
        emails: '',
        senhas: ''
    } 

    listLogin = JSON.parse(localStorage.getItem('dadosLogin'))

    listLogin.forEach((item) => {
        if (inputEmail.value == item.emails && inputSenha.value == item.senhas) {

            objLogin = {
                emails: item.email,
                senhas: item.senha
            }
        }
        console.log(objLogin)
        if (inputEmail.value == objLogin.email && inputSenha.value == objLogin.senha) {
            alert('Acesso permitido')
        } else {
            alert('Acesso negado')
        }
    });


    loginPag.reset()
})  */