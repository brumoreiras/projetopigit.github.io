/* // -------------- Chamando o arquivo validacao. ------------------

import { valida } from './main.js'


// constante para pegar todos os inputs 
const inputs = document.querySelectorAll('input')

// laço de repetição para todos os inputs e colocar um blur para todos os inputs. 
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})
 */