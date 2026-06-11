// 1. Efeito Perspectiva 3D nos Cards (Ajustado e Otimizado)
const cards = document.querySelectorAll(".card3d");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 25;
        const rotateX = (y / rect.height - 0.5) * -25;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
});

// 2. Renderização do Gráfico do Chart.js
const ctx = document.getElementById('grafico');

if (ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2022', '2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Adoção de Práticas Sustentáveis (%)',
                data: [40, 55, 65, 82, 98],
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: '#ffffff' }
                }
            },
            scales: {
                y: { ticks: { color: '#ffffff' } },
                x: { ticks: { color: '#ffffff' } }
            }
        }
    });
}

// 3. Simulador Ecológico
function simular() {
    const inputArvores = document.getElementById("arvores");
    const resultado = document.getElementById("resultado");
    
    let arvores = inputArvores.value;

    if (arvores === "" || arvores <= 0) {
        resultado.innerHTML = "Por favor, insira uma quantidade válida de árvores.";
        return;
    }

    // Cálculo estimado: 1 árvore absorve cerca de 21kg de CO2 por ano
    let impacto = arvores * 21;

    resultado.innerHTML = `Essas árvores juntas podem absorver aproximadamente ${impacto} kg de CO₂ por ano! 🌳`;
}

// 4. Funções de Acessibilidade
let fonte = 16;

function aumentarFonte() {
    fonte += 2;
    document.body.style.fontSize = fonte + "px";
}

function disminuirFonte() {
    if (fonte > 12) { // Evita que a fonte fique legível de tão pequena
        fonte -= 2;
        document.body.style.fontSize = fonte + "px";
    }
}

function contraste() {
    document.body.classList.toggle("contraste");
}

function lerPagina() {
    // Cancela leituras anteriores caso o usuário clique múltiplas vezes
    window.speechSynthesis.cancel();
    
    const texto = document.body.innerText;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    
    window.speechSynthesis.speak(fala);
}