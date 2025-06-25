Repository: 0llrayll0-beep/port-online
Files analyzed: 3

Estimated tokens: 8.1k

Directory structure:
└── 0llrayll0-beep-port-online/
    ├── README.md
    ├── index.html
    └── .github/
        └── workflows/
            └── static.yml


================================================
FILE: README.md
================================================
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




================================================
FILE: index.html
================================================
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio | 0llrayll0</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
            overflow-x: hidden;
            background-color: #0f172a;
            color: #e2e8f0;
        }
        
        .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            animation: twinkle var(--duration) infinite ease-in-out;
            opacity: 0;
        }
        
        @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: var(--opacity); transform: scale(1); }
        }
        
        .project-card {
            transition: all 0.3s ease;
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
            border-color: rgba(99, 102, 241, 0.5);
        }
        
        .profile-pic {
            border: 3px solid rgba(99, 102, 241, 0.5);
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
        }
        
        .typewriter {
            border-right: 2px solid #6366f1;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
        }
        
        .gradient-text {
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .section-title {
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
            border-radius: 3px;
        }
    </style>
</head>
<body class="min-h-screen">
    <!-- Animated Stars Background -->
    <div id="stars-container" class="fixed top-0 left-0 w-full h-full -z-10"></div>
    
    <!-- Floating Particles -->
    <div id="particles" class="fixed top-0 left-0 w-full h-full -z-10"></div>
    
    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
        <!-- Header with Navigation -->
        <header class="flex justify-between items-center mb-16">
            <div class="text-2xl font-bold gradient-text">0llrayll0</div>
            <nav class="hidden md:flex space-x-8">
                <a href="#about" class="hover:text-indigo-400 transition">Sobre</a>
                <a href="#skills" class="hover:text-indigo-400 transition">Habilidades</a>
                <a href="#projects" class="hover:text-indigo-400 transition">Projetos</a>
                <a href="#contact" class="hover:text-indigo-400 transition">Contato</a>
            </nav>
            <button id="mobile-menu-button" class="md:hidden text-2xl">
                <i class="fas fa-bars"></i>
            </button>
        </header>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8">
            <button id="close-menu" class="absolute top-6 right-6 text-2xl">
                <i class="fas fa-times"></i>
            </button>
            <a href="#about" class="text-2xl hover:text-indigo-400 transition">Sobre</a>
            <a href="#skills" class="text-2xl hover:text-indigo-400 transition">Habilidades</a>
            <a href="#projects" class="text-2xl hover:text-indigo-400 transition">Projetos</a>
            <a href="#contact" class="text-2xl hover:text-indigo-400 transition">Contato</a>
        </div>
        
        <!-- Hero Section -->
        <section id="about" class="flex flex-col md:flex-row items-center justify-between mb-24">
            <div class="md:w-1/2 mb-12 md:mb-0">
                <h1 class="text-4xl md:text-6xl font-bold mb-4">
                    Olá, eu sou <span class="gradient-text">0llrayll0</span>
                </h1>
                <div class="text-xl md:text-2xl mb-6">
                    <span id="typewriter" class="typewriter"></span>
                </div>
                <p class="text-gray-300 mb-8">
                    Desenvolvedor apaixonado por criar soluções inovadoras com inteligência artificial e sistemas operacionais.
                </p>
                <div class="flex space-x-4">
                    <a href="https://github.com/0llrayll0-beep" target="_blank" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center transition">
                        <i class="fab fa-github mr-2"></i> GitHub
                    </a>
                    <a href="mailto:raulsalvador2008@gmail.com" class="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center transition">
                        <i class="fas fa-envelope mr-2"></i> Email
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <div class="relative">
                    <div class="w-64 h-64 md:w-80 md:h-80 rounded-full profile-pic overflow-hidden">
                        <!-- Placeholder for profile picture -->
                        <div class="w-full h-full bg-indigo-900 flex items-center justify-center">
                            <i class="fas fa-user text-6xl text-indigo-400"></i>
                        </div>
                    </div>
                    <div class="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-full">
                        <i class="fas fa-code mr-2"></i> Desenvolvedor
                    </div>
                </div>
            </div>
        </section>
        
        <!-- About Section -->
        <section class="mb-24">
            <h2 class="text-3xl font-bold mb-8 section-title">Sobre Mim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
                    <h3 class="text-xl font-semibold mb-4 gradient-text">Minha Jornada</h3>
                    <p class="text-gray-300">
                        Sou um programador que possui conhecimento em TensorFlow, scikit-learn, pandas e em outras bibliotecas diversas. Atualmente, estou estudando na escola técnica Fortec de Praia Grande no curso de Informática.
                    </p>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
                    <h3 class="text-xl font-semibold mb-4 gradient-text">Conhecimentos Técnicos</h3>
                    <p class="text-gray-300">
                        Conhecimentos gerais em montagem, desmontagem e manutenção de desktops, além de entendimento de peças de PCs, sistemas operacionais como Windows 10 e 11, Ubuntu e Linux Mint.
                    </p>
                </div>
            </div>
        </section>
        
        <!-- Skills Section -->
        <section id="skills" class="mb-24">
            <h2 class="text-3xl font-bold mb-8 section-title">Habilidades</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fab fa-python text-4xl text-indigo-400 mb-2"></i>
                    <span class="font-medium">Python</span>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fab fa-html5 text-4xl text-orange-400 mb-2"></i>
                    <span class="font-medium">HTML</span>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fab fa-css3-alt text-4xl text-blue-400 mb-2"></i>
                    <span class="font-medium">CSS</span>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fas fa-copyright text-4xl text-purple-400 mb-2"></i>
                    <span class="font-medium">C#/em estudo</span>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fas fa-plus text-4xl text-blue-300 mb-2"></i>
                    <span class="font-medium">C++/em estudo</span>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fas fa-brain text-4xl text-yellow-400 mb-2"></i>
                    <span class="font-medium">TensorFlow</span>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fas fa-chart-line text-4xl text-green-400 mb-2"></i>
                    <span class="font-medium">Pandas</span>
                </div>
                <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                    <i class="fas fa-robot text-4xl text-red-400 mb-2"></i>
                    <span class="font-medium">scikit-learn</span>
                </div>
            </div>
        </section>
        
        <!-- Projects Section -->
        <section id="projects" class="mb-24">
            <h2 class="text-3xl font-bold mb-8 section-title">Meus Projetos</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Project 1 -->
                <div class="project-card p-6 rounded-xl">
                    <div class="w-full h-40 bg-indigo-900 rounded-lg mb-4 flex items-center justify-center">
                        <i class="fas fa-robot text-6xl text-indigo-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 gradient-text">L.U.N.A</h3>
                    <p class="text-gray-300 mb-4">
                        Uma IA simples para pessoas com dicção ruim, que ajuda na comunicação e identificação de comandos de voz.
                    </p>
                    <a href="https://github.com/0llrayll0-beep/luna-advanced" target="_blank" class="text-indigo-400 hover:text-indigo-300 flex items-center transition">
                        <i class="fab fa-github mr-2"></i> Ver no GitHub
                    </a>
                </div>
                
                <!-- Project 2 -->
                <div class="project-card p-6 rounded-xl">
                    <div class="w-full h-40 bg-purple-900 rounded-lg mb-4 flex items-center justify-center">
                        <i class="fas fa-hand-paper text-6xl text-purple-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 gradient-text">Hand and Head Tracking</h3>
                    <p class="text-gray-300 mb-4">
                        Mapeia os movimentos de mãos e cabeça, com o objetivo de futuramente identificar uma pessoa pela forma como ela se move.
                    </p>
                    <a href="#" class="text-indigo-400 hover:text-indigo-300 flex items-center transition">
                        <i class="fab fa-github mr-2"></i> Ver no GitHub
                    </a>
                </div>
                
                <!-- Project 3 -->
                <div class="project-card p-6 rounded-xl">
                    <div class="w-full h-40 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                        <i class="fas fa-laptop-code text-6xl text-blue-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 gradient-text">Nine OS</h3>
                    <p class="text-gray-300 mb-4">
                        Sistema operacional próprio, desenvolvido para treinar habilidades de programação e aprendizado em desenvolvimento(em desenvolvimento).
                    </p>
                    <a href="#" class="text-indigo-400 hover:text-indigo-300 flex items-center transition">
                        <i class="fab fa-github mr-2"></i> Ver no GitHub
                    </a>
                </div>
                
                <!-- Placeholder Projects -->
                <div class="project-card p-6 rounded-xl">
                    <div class="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                        <i class="fas fa-lightbulb text-6xl text-yellow-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 gradient-text">Projeto Futuro</h3>
                    <p class="text-gray-300 mb-4">
                        Um espaço reservado para um projeto inovador que está por vir.
                    </p>
                    <div class="text-gray-500 flex items-center">
                        <i class="fas fa-clock mr-2"></i> Em breve
                    </div>
                </div>
                
                <div class="project-card p-6 rounded-xl">
                    <div class="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                        <i class="fas fa-lightbulb text-6xl text-yellow-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 gradient-text">Projeto Futuro</h3>
                    <p class="text-gray-300 mb-4">
                        Outro espaço reservado para um projeto empolgante no futuro.
                    </p>
                    <div class="text-gray-500 flex items-center">
                        <i class="fas fa-clock mr-2"></i> Em breve
                    </div>
                </div>
                
                <div class="project-card p-6 rounded-xl">
                    <div class="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                        <i class="fas fa-plus text-6xl text-gray-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 gradient-text">Qual será meu Próximo Projeto?</h3>
                    <p class="text-gray-300 mb-4">
                        O que eu vou criar em seguida? O céu é o limite!
                    </p>
                    <div class="text-gray-400">
                        <i class="fas fa-magic mr-2"></i> Sua imaginação
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Contact Section -->
        <section id="contact" class="mb-12">
            <h2 class="text-3xl font-bold mb-8 section-title">Contato</h2>
            <div class="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto">
                <h3 class="text-xl font-semibold mb-6 text-center gradient-text">Vamos conversar!</h3>
                <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <a href="mailto:raulsalvador2008@gmail.com" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition">
                        <i class="fas fa-envelope mr-2"></i> Enviar Email
                    </a>
                    <a href="https://github.com/0llrayll0-beep" target="_blank" class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition">
                        <i class="fab fa-github mr-2"></i> GitHub
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Footer -->
        <footer class="py-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2023 0llrayll0. Todos os direitos reservados.</p>
            <p class="mt-2">Desenvolvido com <i class="fas fa-heart text-red-400"></i> e muito código</p>
        </footer>
    </div>

    <script>
        // Create stars for background
        function createStars() {
            const container = document.getElementById('stars-container');
            const starsCount = 100;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random properties
                const size = Math.random() * 3;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const opacity = Math.random() * 0.8 + 0.2;
                const duration = Math.random() * 5 + 3;
                const delay = Math.random() * 5;
                
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.setProperty('--opacity', opacity);
                star.style.setProperty('--duration', `${duration}s`);
                star.style.animationDelay = `${delay}s`;
                
                container.appendChild(star);
            }
        }
        
        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('absolute', 'rounded-full', 'bg-indigo-500', 'opacity-10');
                
                // Random properties
                const size = Math.random() * 100 + 50;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const blur = Math.random() * 50 + 20;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${x}%`;
                particle.style.top = `${y}%`;
                particle.style.filter = `blur(${blur}px)`;
                
                // Animation
                const duration = Math.random() * 20 + 10;
                particle.style.animation = `float ${duration}s infinite ease-in-out`;
                particle.style.animationDelay = `${Math.random() * 10}s`;
                
                container.appendChild(particle);
            }
            
            // Add keyframes for floating animation
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(20px, 20px) rotate(5deg); }
                    50% { transform: translate(0, 40px) rotate(0deg); }
                    75% { transform: translate(-20px, 20px) rotate(-5deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Typewriter effect
        function typeWriter() {
            const element = document.getElementById('typewriter');
            const phrases = [
                "Desenvolvedor Python",
                "Especialista em IA",
                "Criador de Sistemas",
                "Entusiasta de Tecnologia"
            ];
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            function type() {
                const currentPhrase = phrases[phraseIndex];
                
                if (isDeleting) {
                    element.textContent = currentPhrase.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    element.textContent = currentPhrase.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentPhrase.length) {
                    isDeleting = true;
                    typingSpeed = 1500; // Pause at end of phrase
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typingSpeed = 500; // Pause before typing next phrase
                }
                
                setTimeout(type, typingSpeed);
            }
            
            // Start typing after a delay
            setTimeout(type, 1000);
        }
        
        // Mobile menu toggle
        function setupMobileMenu() {
            const menuButton = document.getElementById('mobile-menu-button');
            const closeButton = document.getElementById('close-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
            });
            
            closeButton.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        }
        
        // Smooth scrolling for anchor links
        function setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Close mobile menu if open
                        const mobileMenu = document.getElementById('mobile-menu');
                        if (mobileMenu.classList.contains('flex')) {
                            mobileMenu.classList.add('hidden');
                            mobileMenu.classList.remove('flex');
                        }
                        
                        // Scroll to target
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
        
        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            createParticles();
            typeWriter();
            setupMobileMenu();
            setupSmoothScrolling();
        });
    </script>
</body>
</html>



================================================
FILE: .github/workflows/static.yml
================================================
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

