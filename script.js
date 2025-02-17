const numEstrelas = 120;
const fundo = document.getElementById('background-animation');

for (let i = 0; i < numEstrelas; i++) {
    const estrela = document.createElement('div');
    estrela.classList.add('estrela');
    estrela.style.top = `${Math.random() * 100}vh`;
    estrela.style.left = `${Math.random() * 100}vw`;
    estrela.style.animationDuration = `${Math.random() * 3 + 2}s`;
    fundo.appendChild(estrela);
}
