export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(validaNumeroRepetidos(cpf));
    
}

function validaNumeroRepetidos(cpf) {
    const numeroRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numeroRepetidos.includes(cpf); //O método includes() determina se um array contém um determinado elemento, retornando true ou false.
}