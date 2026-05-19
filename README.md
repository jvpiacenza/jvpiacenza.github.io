# jvpiacenza.github.io

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>João Victor | Engenheiro de Software</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Header de navegação fixo -->
    <header class="navbar">
        <nav class="container nav-container">
            <ul class="nav-links">
                <li><a href="#hero">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#calculadora">Calculadora</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="container hero-content">
            <div class="hero-text">
                <p class="subtitle">Engenheiro de Software & Consultor em IA Generativa</p>
                <p class="description">Transformo ideias em soluções digitais eficientes, com auxílio de inteligência
                    artificial para acelerar resultados.</p>
                <a href="#calculadora" class="btn-primary">Solicitar Orçamento</a>
            </div>
            <div class="hero-photo">
                <img src="foto_minha.png" alt="Foto profissional de João Victor" class="foto-profissional">
            </div>
        </div>
    </section>

    <!-- Seção Sobre -->
    <section id="sobre" class="sobre">
        <div class="container">
            <h2>Sobre Mim</h2>

            <div class="cards_sobre">
                <div class="card_sobre">
                    <p>Sou João Victor, engenheiro de software com mais de 8 anos de experiência em desenvolvimento web,
                        mobile
                        e integração de APIs de inteligência artificial generativa. Utilizo modelos como GPT-4 e Gemini
                        para
                        criar assistentes virtuais, automatizar fluxos de trabalho e acelerar entregas. Acredito em
                        código
                        limpo, metodologias ágeis e aprendizado contínuo. Meu objetivo é transformar desafios complexos
                        em
                        soluções elegantes e escaláveis.
                    </p>
                </div>
            </div>
        </div>

    </section>

    <!-- Seção Serviços -->
    <section id="servicos" class="servicos">
        <div class="container">
            <h2>Serviços</h2>
            <div class="cards">
                <div class="card">
                    <h3>Desenvolvimento Web & Mobile</h3>
                    <p>Criação de aplicações modernas, responsivas e de alta performance, do front-end ao back-end.</p>
                </div>
                <div class="card">
                    <h3>Integração de IA Generativa</h3>
                    <p>Chatbots inteligentes, assistentes virtuais e automações usando GPT-4, Gemini e outros modelos.
                    </p>
                </div>
                <div class="card">
                    <h3>Consultoria em Arquitetura</h3>
                    <p>Desenho de sistemas escaláveis, escolha de tecnologias e definição de boas práticas para seu
                        projeto.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Seção Calculadora -->
    <section id="calculadora" class="calculadora">
        <div class="container">
            <h2>Simule seu Projeto</h2>
            <p class="section-description">Preencha os campos abaixo e veja uma estimativa de prazo e valor para o
                desenvolvimento do seu software. Esta ferramenta usa IA para calcular de forma inteligente, considerando
                complexidade e tamanho do projeto.</p>
            <div class="calculator-box">
                <div class="form-group">
                    <label for="valorHora">Valor da hora de trabalho (R$)</label>
                    <input type="number" id="valorHora" placeholder="150" value="150" min="1">
                </div>
                <div class="form-group">
                    <label for="horasDia">Horas trabalhadas por dia</label>
                    <input type="number" id="horasDia" placeholder="6" value="6" min="1" max="12">
                </div>
                <div class="form-group">
                    <label for="numFuncionalidades">Número de funcionalidades / tarefas</label>
                    <input type="number" id="numFuncionalidades" placeholder="10" value="10" min="1">
                </div>
                <div class="form-group">
                    <label for="complexidade">Complexidade do projeto</label>
                    <select id="complexidade">
                        <option value="baixa">Baixa (4h por funcionalidade)</option>
                        <option value="media" selected>Média (8h por funcionalidade)</option>
                        <option value="alta">Alta (16h por funcionalidade)</option>
                    </select>
                </div>
                <button id="calcularBtn" class="btn-primary">Calcular</button>
                <div id="resultado" class="resultado" style="display: none;">
                    <div class="result-item">
                        <span class="result-label">Prazo total estimado:</span>
                        <span id="prazoDias" class="result-value"></span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Custo total estimado:</span>
                        <span id="custoTotal" class="result-value"></span>
                    </div>
                    <p class="result-note">Este cálculo considera um engenheiro dedicado e pode variar conforme
                        requisitos específicos.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Seção Contato -->
    <section id="contato" class="contato">
        <div class="container">
            <h2>Contato</h2>
            <ul class="contato-lista">
                <li><span class="label">Email:</span> joao.victor@exemplo.com</li>
                <li><span class="label">Telefone:</span> (11) 99999-9999</li>
                <li><span class="label">LinkedIn:</span> linkedin.com/in/joaovictor</li>
            </ul>
        </div>
    </section>

    <!-- Rodapé -->
    <footer class="rodape">
        <div class="container">
            <p>© 2026 João Victor – Todos os direitos reservados. Projeto acadêmico fictício.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>
