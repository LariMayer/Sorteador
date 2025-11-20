
function generateNumber() {
    const min = Number(document.querySelector('.input-min').value); // Convertido explicitamente para número
    const max = Number(document.querySelector('.input-max').value); // Convertido explicitamente para número

    // Garante que min e max sejam inteiros para o cálculo
    const result = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

    console.log(result);
}