# portifolio-online
Repository: 0llrayll0-beep/port-online
Files analyzed: 4

Estimated tokens: 2.4k

Directory structure:
└── 0llrayll0-beep-port-online/
    ├── README.md
    ├── index.html
    ├── script.js
    └── styles.css


================================================
FILE: README.md
================================================
# portifolio-online



================================================
FILE: index.html
================================================
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Fundo animado com estrelas -->
    <div class="background-animation" id="background-animation"></div>

    <!-- Container de informações -->
    <div class="info-container">
        <h1>0llrayll0</h1>
        <p>Programador Python, CSS, HTML, C#, C++.</p>
        <p>
            Sou um programador que possui conhecimento em TensorFlow, scikit-learn, pandas e em outras bibliotecas diversas.
            Projetos que já fiz: Luna, uma IA simples para pessoas com dicção ruim; Hand and Head Tracking, que mapeia os seus movimentos e, futuramente, digitaliza e identifica uma pessoa só pela forma dela se mexer; e atualmente no Nine OS, um sistema operacional próprio só para treinar as habilidades.
        </p>
        <p>
            Conhecimentos gerais em montagem, desmontagem e manutenção de desktops, além de entendimento de peças de PCs, sistemas operacionais como Windows 10 e 11, Ubuntu e Linux Mint.
        </p>
        <p>Atualmente, estou estudando na escola técnica Fortec de Praia Grande.</p>
        <p>Informática</p>
        <p>Me encontre nas redes sociais:</p>
        
        <!-- Links para redes sociais -->
        <ul>
            <li><a href="https://github.com/0llrayll0-beep" target="_blank">GitHub</a></li>
            <li><a href="raulsalvador2008@gmail.com">Email</a></li>
        </ul>

        <!-- Foto do perfil -->
        <img src="sua-foto.jpg" alt="Sua Foto">
    </div>

    <!-- Seção de Projetos -->
    <div class="projects-container">
        <h2>Meus Projetos</h2>
        <div class="project-square">
            <div class="projects-content">
                <div class="project">
                    <h3>L.U.N.A</h3>
                    <p>Uma IA simples para pessoas com dicção ruim, que ajuda na comunicação e identificação de comandos de voz.</p>
                    <a href="https://github.com/0llrayll0-beep/luna-advanced" target="_blank">Veja no GitHub</a>
                </div>
                <div class="project">
                    <h3>Hand and Head Tracking</h3>
                    <p>Mapeia os movimentos de mãos e cabeça, com o objetivo de futuramente identificar uma pessoa pela forma como ela se move.</p>
                    <a href="https://github.com" target="_blank">Veja no GitHub</a>
                </div>
                <div class="project">
                    <h3>Nine OS</h3>
                    <p>Sistema operacional próprio, desenvolvido para treinar habilidades de programação e aprendizado em desenvovimento.</p>
                    <a href="https://github.com" target="_blank">Veja no GitHub</a>
                </div>
            </div>
        </div>

        <!-- Segundo Quadrado com os Projetos -->
        <div class="project-square">
            <div class="projects-content">
                <div class="project">
                    <h3>Projeto futuro</h3>
                    <p>reservado para um projeto futuro.</p>
                    <a href="https://github.com" target="_blank">Veja no GitHub</a>
                </div>
                <div class="project">
                    <h3>Projeto futuro</h3>
                    <p>reservado para um projeto futuro.</p>
                    <a href="https://github.com" target="_blank">Veja no GitHub</a>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>



================================================
FILE: script.js
================================================
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



================================================
FILE: styles.css
================================================
body { 
    margin: 0;
    padding: 0;
    overflow: auto; /* Permite que a página role caso o conteúdo ultrapasse a tela */
    background: radial-gradient(circle, #0f2027, #203a43, #2c5364);
    color: #fff;
    font-family: Arial, sans-serif;
    height: 100vh; /* Garante que a altura ocupe a tela inteira */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

/* Info Container */
.info-container {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    color: #fff;
    width: 300px;
    height: 300px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transform-origin: center;
    transition: transform 0.5s ease, padding 0.5s ease, opacity 0.5s ease, width 0.5s ease, height 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

/* Texto dentro do container */
.info-container h1, .info-container p {
    font-size: 1rem;
    transition: font-size 0.5s ease;
    margin: 5px 0;
}

/* Estilo da imagem */
.info-container img {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transition: top 0.5s ease, left 0.5s ease;
}

/* Efeito de hover para expansão */
.info-container:hover {
    transform: scale(1.05);
    padding: 30px;
    width: 80vw;
    height: 60vh;
    opacity: 1;
}

.info-container:hover h1, .info-container:hover p {
    font-size: 1.2rem;
}

.info-container:hover img {
    top: 10px;
    left: 10px;
    width: 80px;
    height: 80px;
}

/* Animação de fundo */
.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.estrela {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    animation: piscar 3s infinite;
    opacity: 0.8;
}

@keyframes piscar {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

/* Animações para suavizar a entrada do conteúdo */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.info-container h1, .info-container p {
    animation: fadeInUp 1s ease-in-out;
}

/* Fontes */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;600&display=swap');

body {
    font-family: 'Open Sans', sans-serif;
}

h1, h2 {
    font-family: 'Roboto', sans-serif;
    color: #fff;
}

/* Botões */
button {
    padding: 10px 20px;
    background-color: #2193b0;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #6dd5ed;
}

/* Responsividade */
@media (max-width: 768px) {
    .info-container {
        width: 90vw;
        height: 50vh;
        font-size: 0.9rem;
    }

    .info-container img {
        width: 70px;
        height: 70px;
    }
}

@media (max-width: 480px) {
    .info-container {
        width: 95vw;
        height: 45vh;
        font-size: 0.8rem;
    }

    .info-container img {
        width: 60px;
        height: 60px;
    }
}

/* Seção de projetos */
.projects-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap; /* Permite que os projetos fiquem em várias linhas se necessário */
    margin-top: 30px;
}

.project {
    width: 250px;  /* Ajuste do tamanho */
    height: 250px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    padding: 20px;
    flex-shrink: 0;
}

.project:hover {
    transform: scale(1.05);
    width: 270px;
    height: 270px;
}

.project h3 {
    font-size: 1.2rem;
    color: #fff;
}

