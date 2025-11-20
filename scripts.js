function generateNumber() {
    const min = Number(document.querySelector('.input-min').value);
    const max = Number(document.querySelector('.input-max').value);

    if (isNaN(min) || isNaN(max)) {
        document.querySelector('.resultado').innerText = "Preencha os dois números!";
        return;
    }

    if (min > max) {
        document.querySelector('.resultado').innerText = "O número inicial deve ser menor que o final!";
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector('.resultado').innerText = `Número sorteado: ${result}`;
}