

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