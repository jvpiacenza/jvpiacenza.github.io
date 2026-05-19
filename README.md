# jvpiacenza.github.io

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>João Victor | Engenheiro de Software</title>
    
</head>
<style>
    /* style.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #dfe6f0;
  /* tom de fundo geral suave, próximo ao sugerido */
  color: #e4eaf1;
  line-height: 1.6;
  padding-top: 70px;
  /* compensar header fixo */
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 0;
}

/* Header / Navbar fixo */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  height: 70px;
  display: flex;
  align-items: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  transition: color 0.3s;
  font-size: 1rem;
}

.nav-links a:hover {
  color: #0077b6;
}

/* Hero */
.hero {
  background-color: #f0f4fa;
  min-height: 70vh;
  /* ocupa 90% da altura da janela */
  display: flex;
  align-items: center;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.hero-text {
  flex: 1 1 400px;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: #1e293b;
}

.subtitle {
  font-size: 2.5rem;
  color: #0077b6;
  margin-bottom: 15px;
  font-weight: 500;
}

.description {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #475569;
}

.btn-primary {
  display: inline-block;
  background-color: #0077b6;
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background-color: #005f8a;
  transform: translateY(-2px);
}

.hero-photo {
  flex: 0 0 260px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foto-placeholder {
  width: 250px;
  height: 250px;
  border-radius: 20px;
  background-color: #f1f5f9;
  border: 2px dashed #0077b6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}


.foto-profissional {
  width: 350px;
  height: 350px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}


/* Seções */
section h2 {
  font-size: 2.2rem;
  margin-bottom: 25px;
  color: #1e293b;
  text-align: center;
}

.sobre p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #334155;
  border-radius: 12px;
}

/* Serviços */
.servicos {
  background-color: #dde5f0;
}

.cards {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px 25px;
  flex: 1 1 250px;
  max-width: 450px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.cards_sobre {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.card_sobre {
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px 25px;
  flex: 1 1 250px;
  max-width: 700px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.card h3 {
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 10px;
}

.card p {
  color: #475569;
  font-size: 1.0rem;
}

/* Calculadora */
.calculadora {
  background-color: #dfe6f0;
}

.section-description {
  text-align: center;
  color: #475569;
  margin-bottom: 35px;
}

.calculator-box {
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px;
  max-width: 550px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #1e293b;
}

input,
select {
  width: 100%;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background-color: #f8fafc;
  color: #1e293b;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;
}

input:focus,
select:focus {
  border-color: #0077b6;
}

button {
  width: 100%;
  padding: 14px;
  font-size: 1.1rem;
  margin-top: 10px;
}

/* Resultado */
.resultado {
  margin-top: 25px;
  padding: 20px;
  background: #f0f9ff;
  border-radius: 12px;
  border-left: 4px solid #0077b6;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.result-label {
  font-weight: 600;
  color: #1e293b;
}

.result-value {
  color: #0077b6;
  font-weight: 700;
}

.result-note {
  margin-top: 15px;
  font-size: 0.9rem;
  color: #475569;
  font-style: italic;
}

/* Contato */
.contato {
  background-color: #dde5f0;
}

.contato-lista {
  list-style: none;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.1rem;
}

.contato-lista li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: #334155;
}

.label {
  font-weight: 600;
  width: 80px;
  color: #1e293b;
}

/* Rodapé */
.rodape {
  background: #dfe6f0;
  text-align: center;
  padding: 5px ;
  font-size: 0.9rem;
  color: #475569;
}


/* Responsivo */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-text h1 {
    font-size: 2.2rem;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 100%;
  }

  .container {
    padding: 40px 0;
  }

  .nav-links {
    gap: 15px;
  }
}
</style>

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

    <script>
    document.addEventListener('DOMContentLoaded', function() {
  const calcularBtn = document.getElementById('calcularBtn');
  const resultadoDiv = document.getElementById('resultado');
  
  const prazoDiasSpan = document.getElementById('prazoDias');
  const custoTotalSpan = document.getElementById('custoTotal');

  const complexidadeHoras = {
    baixa: 4,
    media: 8,
    alta: 16
  };

  calcularBtn.addEventListener('click', function() {
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    const horasDia = parseFloat(document.getElementById('horasDia').value);
    const numFuncionalidades = parseInt(document.getElementById('numFuncionalidades').value);
    const complexidade = document.getElementById('complexidade').value;

    if (isNaN(valorHora) || isNaN(horasDia) || isNaN(numFuncionalidades) ||
        valorHora <= 0 || horasDia <= 0 || numFuncionalidades <= 0) {
      alert('Por favor, preencha todos os campos com valores positivos.');
      return;
    }

    const horasPorFuncionalidade = complexidadeHoras[complexidade];
    const horasTotais = numFuncionalidades * horasPorFuncionalidade;
    const prazoDias = horasTotais / horasDia;
    const custoTotal = horasTotais * valorHora;

    const prazoFormatado = prazoDias % 1 === 0 ? prazoDias : prazoDias.toFixed(1);
    const custoFormatado = custoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    prazoDiasSpan.textContent = `${prazoFormatado} dias`;
    custoTotalSpan.textContent = custoFormatado;
    
    resultadoDiv.style.display = 'block';
    resultadoDiv.style.animation = 'none';
    resultadoDiv.offsetHeight;
    resultadoDiv.style.animation = 'fadeIn 0.5s ease';
  });
});</script>
</body>

</html>
