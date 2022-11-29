
// --------------------- Vetor com os inputs ---------------------------------------
const inputs = document.querySelectorAll('input')


inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('erro')
        input.parentElement.querySelector('.mensagem-erro').innerHTML = ''

    } else {
        input.parentElement.classList.add('erro')
        input.parentElement.querySelector('.mensagem-erro').innerHTML = mostraMensagemErro(tipoDeInput, input)
    }

}

// ------------------- Array com os erros para que seja tratado. ---------------------------
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',

]

// ------------------- Objeto com os erros --------------------------------------

const mensagemErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    lasname: {
        valueMissing: 'O campo sobrenome não pode estar vazio.'
    },
    telefone: {
        valueMissing: 'O campo telefone não pode estar vazio.',
        patternMismatch: 'Seguir o padrão do telefone.'
    },
    dataNascimento: {
        valueMissing: 'O campo telefone não pode estar vazio.',
        customError: 'Você precisa ser maior que 18 anos para se cadastrar.'
    },
    email: {
        valueMissing: 'O campo email não opde estar vazio.',
        typeMismatch: 'O email digitado não é valido.'
    },
    confirmeEmail: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.',
        customError: 'O e-mail digitado não confere.'
    },
    password: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 à 8 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter caractere especial.'
    },
    confirmePassword: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 à 8 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter caractere especial.',
        customError: 'A senha digita não confere.'
    },
    razaoSocial: {
        valueMissing: 'O campo razão social não pode estar vazio.'
    },
    cnpj: {
        valueMissing: 'O campo de CNPJ não pode estar vazio.'
    },
    cep: {
        valueMissing: 'O campo de CEP não pode estar vazio.',
        patternMismatch: 'O CEP digitado não é válido',
        customError: 'Não foi possivel buscar o CEP.'
    },
    logradouro: {
        valueMissing: 'O campo de endereço não pode estar vazio.'
    },
    bairro: {
        valueMissing: 'O campo de bairro não pode estar vazio.'
    },
    cidade: {
        valueMissing: 'O campo de cidade não pode estar vazio.'
    },
    estado: {
        valueMissing: 'O campo de estado não pode estar vazio.'
    },
    servico: {
        valueMissing: 'O campo de serviço não pode estar vazio.',
        customError: 'Preencha o tipo de serviço prestado.'
    },
    horarioAtendimento: {
        valueMissing: 'O campo de horário de atendimento não pode estar vazio.'
    },
    mensagemBox: {
        valueMissing: 'O campo de mensagem não pode estar vazio.'
    },
    assunto: {
        valueMissing: 'O campo de assunto não pode estar vazio.'
    }



}
// --------------- Responsável em validar as funções e retornar os erros se necessario --------------------------
const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    cep: input => chamaCEP(input),
    confirmeEmail: input => validaEmail(input),
    confirmePassword: input => validaSenha(input)

}

// ------------------- Validação de e-mail, aqui verifica se os campos são iguais ------------------------------
function validaEmail(input) {
    const email = document.querySelector('#email').value
    const confirmeEmail = input.value

    let inf = ''

    if (email == confirmeEmail) {
        inf = ''
        input.setCustomValidity('')
        return

    } else {
        inf = 'O e-mail digitado não confere.'
        input.setCustomValidity('O e-mail digitado não confere.')
        return
    }
}
// ------------------- Validação de senha, aqui verifica se os campos são iguais ------------------------------
function validaSenha(input) {
    const password = document.querySelector('#password').value
    const confirmePassword = input.value

    let inf = ''

    if (password == confirmePassword) {
        inf = ''
        input.setCustomValidity('')
        return

    } else {
        inf = 'A senha digita não confere.'
        input.setCustomValidity('A senha digita não confere.')
        return
    }
}
// ---------------------- responsável em verificar se o input atende as normas -------------------------------
function mostraMensagemErro(tipoDeInput, input) {
    let mensagem = ''

    tiposDeErro.forEach(erro => {

        if (input.validity[erro]) {
            mensagem = mensagemErro[tipoDeInput][erro]
        }
    })

    return mensagem
}
// ---------------------- responsável em Validar a idade e só permitir cadastro se maior que 18 anos.  -------------------------------
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())
    return dataMais18 <= dataAtual
}
// ---------------------- API responsável em fazer a requisição e validação do cep e endereço -------------------------------

function chamaCEP(input) {
    const cep = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${cep}/json`
    const opcoes = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'aplication/jason;charset=utf-8'
        }

    }

    if (!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url, opcoes).then(
            response => response.json()
        ).then(
            data => {

                if (data.erro) {
                    input.setCustomValidity('Não foi possivel buscar o CEP.')
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCep(data)
                return
            }
        )
    }
}

// ---------------------- Essa função faz o preenchimento automatico dos campos endereço. -------------------------------
function preencheCamposComCep(data) {
    const logradouro = document.querySelector('[data-tipo="logradouro"]')
    const cidade = document.querySelector('[data-tipo="cidade"]')
    const estado = document.querySelector('[data-tipo="estado"]')
    const bairro = document.querySelector('[data-tipo="bairro"]')


    logradouro.value = data.logradouro
    cidade.value = data.localidade
    estado.value = data.uf
    bairro.value = data.bairro
}
// ---------------------------- Cadastro usuario -----------------------------------

const confEmail = document.getElementById('confirme-email')
const confSenha = document.getElementById('confirme-password')

function cadastroSucesso(confEmail, confSenha) {

    const dadosLogin = JSON.parse(localStorage.getItem('dadosLogin') || '[]')

    dadosLogin.push({
        email: confEmail.value,
        senha: confSenha.value
    })

    localStorage.setItem('dadosLogin', JSON.stringify(dadosLogin))
}

// --------------------- Autenticação de login -------------------------------

const inputEmail = document.getElementById('emailL')
const inputSenha = document.getElementById('senhaA')

const botaoEntrou = document.getElementById('fomrLogin')

if (botaoEntrou) {
    botaoEntrou.addEventListener('submit', (e) => {
        e.preventDefault()

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
            window.location.replace("/paginas/bemVindo.html")
            return
        } else {
            alert('Acesso negado')
            return
        }

    })


}
