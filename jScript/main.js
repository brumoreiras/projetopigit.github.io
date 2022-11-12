
// -------------- CRIANDO UM EVENTO NO INPUT PARA CHAMAR AS FUNÇÕES ------------------
const inputs = document.querySelectorAll('input')

// laço de repetição para todos os inputs e colocar um blur para todos os inputs. 
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
    // Quero mostra mensagem de erro no input então vou colocar aqui para que aconteça no inicio, do processo de validação 
    if (input.validity.valid) {
        input.parentElement.classList.remove('erro')
        input.parentElement.querySelector('.mensagem-erro').innerHTML = ''

    } else {
        input.parentElement.classList.add('erro')
        input.parentElement.querySelector('.mensagem-erro').innerHTML = mostraMensagemErro(tipoDeInput, input)
    }

}
// ---------- OBJETO QUE FACILITA A CHEGAGEM DE ERRO DO INPUT, QUAL VALID ESTAMOS TRATANTO. -------------
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
    //caso eu tenha mais erros para tratar eu posso incluir ele aqui. 
]

// -------------------- AQUI VOU CRIAR UM OBJETO PARA FACILITAR A TRATATIVA DE TODAS AS MENSAGENS DE ERRO -----------------
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

const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    // CHAMAR AQUI A VALIDA CNPJ
    // vou chamar a função valida CEP dentro da validadores para fazer a validação, assim como faz a de validaDataNascimento()
    cep: input => chamaCEP(input),
    confirmeEmail: input => validaEmail(input),
    confirmePassword: input => validaSenha(input),
    /* emailLogin: input => armazenaEmail(input) */

}
// ------------------ AQUI VOU CRIAR UMA FUNÇÃO QUE MOSTRA MENSAGEM DE ERRO ---------------

function mostraMensagemErro(tipoDeInput, input) {
    let mensagem = ''

    tiposDeErro.forEach(erro => {

        if (input.validity[erro]) {
            mensagem = mensagemErro[tipoDeInput][erro]
        }
    })

    return mensagem
}
// ------------------- VALIDANDO E-MAIL ----------------------

function validaEmail(input) {
    const email = document.querySelector('[data-tipo="email"]')
    const confirmacao = document.querySelector('[data-tipo="confirmeEmail"]')

    let inf = ''

    if (email.value != confirmacao.value) {
        /* console.log('o email é igual') */
        inf = 'O e-mail digitado não confere.'
        input.setCustomValidity('O e-mail digitado não confere.')
        return

    } else {
        /* console.log('diferente') */
        inf = ''
        input.setCustomValidity('')
        return
    }


}
// ------------------- VALIDANDO E-MAIL ----------------------

function validaSenha(input) {
    const password = document.querySelector('[data-tipo="password"]')
    const confirmePassword = document.querySelector('[data-tipo="confirmePassword"]')

    let mensagem = ''

    if (password.value != confirmePassword.value) {
        /* console.log('o email é igual') */
        mensagem = 'A senha digita não confere.'
        input.setCustomValidity('A senha digita não confere.')
        return

    } else {
        /* console.log('diferente') */
        mensagem = ''
        input.setCustomValidity('')
        return
    }


}

// -------------- VALIDANDO DATA DE NASCIMENTO ------------------------
// Essa função transforma o valor de string capturada pelo input e transforma em data. 
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) { // esssa mensagem só é exibida se for falso. 
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar'
    }

    //Para o navegador entender que existe algum erro naquele campo, nós temos que usar uma propriedade do input chamada setCustomValidity 
    input.setCustomValidity(mensagem)
}
// Essa função compara o valor das datas. 
function maiorQue18(data) {
    //Aqui está pegando a data atual. 
    const dataAtual = new Date()
    //agora fazer a comparação pegar a data recebida e somar 18 anos.
    // Para isso vou criar uma nova data para fazer essa comparação. 
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    //agora feito isso eu posso fazer um retorno para chegar se a data digitada é maior que 18 anos. 
    return dataMais18 <= dataAtual
}

// essa é a função chama cep

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
    //so vou fazer a requisição se o valor do patternMismatch for false. 
    if (!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url, opcoes).then(
            response => response.json()
        ).then(
            data => {
                //tratando o erro da requisição 
                //console.log(data)
                if (data.erro) {
                    input.setCustomValidity('Não foi possivel buscar o CEP.')
                    return
                }
                input.setCustomValidity('')
                //validar este campo.
                preencheCamposComCep(data)
                return
            }
        )
    }
}
//preencher os campos. 

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

//----------------- ARMAZENA EMAIL -------------------
const login = document.getElementById('fomrLogin')
const confEmail = document.getElementById('confirme-email')
const confSenha = document.getElementById('confirme-password')
const dadosLogin = JSON.parse(localStorage.getItem('dadosLogin') || '[]')

login.addEventListener('submit', (evento) => {
    evento.preventDefault()

    dadosLogin.push({
        email: confEmail.value,
        senha: confSenha.value
    })

    localStorage.setItem('dadosLogin', JSON.stringify(dadosLogin))

    /*  criaLogin(confEmail.value, confSenha.value) */
    //Aqui me permite pegar apenas o e-mail e senha, que no caso da validação do login é o que eu preciso para buscar e fazer o login com sucesso. 

    login.reset()
})


// ---------------- Acesso login
