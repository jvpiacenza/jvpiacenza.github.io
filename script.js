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
});