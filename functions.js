// Función para encriptar texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Función para desencriptar texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Función para copiar texto al portapapeles
function copyToClipboard() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
}

// Función principal que se ejecuta al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");
    const encryptBtn = document.getElementById("encrypt-btn");
    const decryptBtn = document.getElementById("decrypt-btn");
    const copyBtn = document.getElementById("copy-btn");

    // Evento para encriptar texto
    encryptBtn.addEventListener("click", () => {
        const text = inputText.value.toLowerCase();
        outputText.value = encryptText(text);
    });

    // Evento para desencriptar texto
    decryptBtn.addEventListener("click", () => {
        const text = inputText.value.toLowerCase();
        outputText.value = decryptText(text);
    });

    // Evento para copiar texto
    copyBtn.addEventListener("click", () => {
        copyToClipboard();
        alert("Texto copiado al portapapeles");
    });
});
