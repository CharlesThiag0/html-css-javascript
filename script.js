const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');
const botaoCopiar = document.querySelector('.btn-copiar');
let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function bntDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
}

function desencriptar(stringDesencriptar) {
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar;
}

botaoCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
    mensagem.select();

    document.execCommand("copy");

    alert("Texto copiado!");
}

