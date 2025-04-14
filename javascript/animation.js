
// Seleciona todos os elementos que possuem animações
// Seleciona todos os elementos que possuem animações
const elements = document.querySelectorAll('#math .math-back > [id]');

if (elements.length === 0) {
    console.error("Nenhum elemento foi encontrado com o seletor '#math .math-back [id]'.");
} else {
    console.log(`Foram encontrados ${elements.length} elementos.`);
}

// Função para gerar tempos de animação diferentes para cada elemento
elements.forEach((element, index) => {
    // Gera um tempo de duração aleatório entre 3s e 7s
    const animationTime = `${Math.floor(Math.random() * 4) + 3}s`; // Valores entre 3s e 7s
    const animationTimeInSeconds = parseFloat(animationTime); // Extrai o valor numérico em segundos
    const animationDelay = `${(Math.random() * 5) / 10}s`;
    // Gera uma posição aleatória no eixo X
    const randomPos = (Math.floor(Math.random() * 28) - 14) * 10; // Gera números de -150 a 150 em passos de 10

    // Aplica as variáveis CSS dinamicamente
    element.style.setProperty('--animationTime', animationTime);
    element.style.setProperty('--randomPos', `${randomPos}px`);
    element.style.setProperty('--animationDelay', animationDelay);
    console.log(
        `Elemento ${index + 1} - Tempo: ${animationTime}, Atraso: ${animationDelay}, Posição X: ${randomPos}px`
    );

    // Atualiza a posição no início de cada ciclo de animação
    function updatePosition() {
        const animationTime = `${Math.floor(Math.random() * 4) + 3}s`;
        const newRandomPos = (Math.floor(Math.random() * 28) - 14) * 10; // Gera nova posição

        element.style.setProperty('--randomPos', `${newRandomPos}px`);
        //console.log(`Elemento ${index + 1} - Nova posição X: ${newRandomPos}px`);
        console.log(`Elemento ${index + 1} - Tempo de animação gerado: ${animationTime}`);
        // Chama novamente o updatePosition após o tempo de animação
        setTimeout(updatePosition, animationTimeInSeconds * 1000);
    }

    // Inicia o ciclo de atualização
    setTimeout(updatePosition, animationTimeInSeconds * 1000);
});