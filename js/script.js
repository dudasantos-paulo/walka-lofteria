// Função utilitária para criar o botão de remover
const createRemoveButton = (targetId) => `
    <button type="button" data-target="${targetId}" class="remove-btn text-sm text-white font-semibold rounded-full bg-red-500 hover:bg-red-600 p-1 px-3 mt-2 float-right">
        Remover
    </button>
`;

// Remove o bloco pai quando o botão de remoção é clicado
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const targetId = e.target.getAttribute('data-target');
        document.getElementById(targetId)?.remove();
    }
});

// =================================================================
// FUNÇÕES DINÂMICAS (Plantas, Tours, Preços, FAQ)
// ... (Todo o código das funções dinâmicas que já existem)
// =================================================================

// --- INÍCIO DAS FUNÇÕES DINÂMICAS ---
// (Certifique-se de que todo o seu código anterior para addPlanta, addTour, addPreco e addFaq esteja aqui)

// =================================================================
// FUNÇÕES DINÂMICAS: 5. Plantas
// =================================================================
let plantaIndex = 0;
const plantasContainer = document.getElementById('plantas-container');
const addPlantaBtn = document.getElementById('addPlantaBtn');

const createPlantaBlock = (index) => {
    const id = `planta-${index}`;
    return `
        <div id="${id}" class="p-4 border border-violeta-principal/50 rounded-xl bg-white/80 relative">
            ${createRemoveButton(id)}
            <h4 class="font-semibold text-violeta-principal mb-3">Planta ${index + 1}</h4>
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-medium text-gray-700">Título / Nome</label>
                    <input type="text" name="planta[${index}][titulo]" placeholder="Ex: Studio ECO 28m²" class="form-input w-full" required>
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700">Estilo</label>
                    <select name="planta[${index}][estilo]" class="form-input w-full">
                        <option value="ECO">ECO</option>
                        <option value="SLIM">SLIM</option>
                        <option value="URBAN">URBAN</option>
                        <option value="OUTRO">Outro</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700">Pacote</label>
                    <select name="planta[${index}][pacote]" class="form-input w-full">
                        <option value="STANDARD">STANDARD</option>
                        <option value="BASIC">BASIC</option>
                        <option value="ESSENTIAL">ESSENTIAL</option>
                        <option value="DESIGN">DESIGN</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700">Metragem</label>
                    <input type="text" name="planta[${index}][metragem]" placeholder="Ex: 28m²" class="form-input w-full">
                </div>
                <div class="md:col-span-2">
                    <label class="block text-xs font-medium text-gray-700">URL Imagem da Planta</label>
                    <input type="url" name="planta[${index}][imagemUrl]" placeholder="URL da imagem (ex: eco-basic.jpg)" class="form-input w-full" required>
                </div>
            </div>
        </div>
    `;
};

if (addPlantaBtn) {
    const addPlanta = () => {
        plantasContainer.insertAdjacentHTML('beforeend', createPlantaBlock(plantaIndex));
        plantaIndex++;
    };
    addPlantaBtn.addEventListener('click', addPlanta);
    addPlanta(); // Adiciona 1 planta inicial
}

// =================================================================
// FUNÇÕES DINÂMICAS: 6. Tours 360
// =================================================================
let tourIndex = 0;
const toursContainer = document.getElementById('tours-container');
const addTourBtn = document.getElementById('addTourBtn');

const createTourBlock = (index) => {
    const id = `tour-${index}`;
    return `
        <div id="${id}" class="p-4 border border-violeta-principal/50 rounded-xl bg-white/80 relative">
            ${createRemoveButton(id)}
            <h4 class="font-semibold text-violeta-principal mb-3">Tour ${index + 1}</h4>
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-medium text-gray-700">Rótulo do Tour</label>
                    <input type="text" name="tour[${index}][rotulo]" placeholder="Ex: ECO Basic (Tour 360)" class="form-input w-full" required>
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700">URL do Iframe</label>
                    <input type="url" name="tour[${index}][url]" placeholder="URL completa do meutour360.com" class="form-input w-full" required>
                </div>
            </div>
        </div>
    `;
};

if (addTourBtn) {
    const addTour = () => {
        toursContainer.insertAdjacentHTML('beforeend', createTourBlock(tourIndex));
        tourIndex++;
    };
    addTourBtn.addEventListener('click', addTour);
    addTour(); // Adiciona 1 tour inicial
}

// =================================================================
// FUNÇÕES DINÂMICAS: 8. Preços / Pacotes
// =================================================================
let precoIndex = 0;
const precosContainer = document.getElementById('precos-container');
const addPrecoBtn = document.getElementById('addPrecoBtn');

const createPrecoBlock = (index) => {
    const id = `preco-${index}`;
    return `
        <div id="${id}" class="pacote-item p-4 border border-violeta-principal/50 rounded-xl bg-white/80 relative">
            ${createRemoveButton(id)}
            <h3 class="text-lg font-bold mb-3 text-violeta-principal">Pacote ${index + 1}</h3>
            <div class="space-y-3">
                <div><label class="block text-xs font-medium text-gray-700">Título</label><input type="text" name="preco[${index}][titulo]" placeholder="Studio Standard" class="form-input w-full" required></div>
                <div><label class="block text-xs font-medium text-gray-700">Preço 'A partir de'</label><input type="text" name="preco[${index}][preco]" placeholder="R$ 300.000,00" class="form-input w-full" required></div>
                <div><label class="block text-xs font-medium text-gray-700">Destaque (Etiqueta)</label><input type="text" name="preco[${index}][destaque]" placeholder="melhor custo benefício" class="form-input w-full"></div>
                <div><label class="block text-xs font-medium text-gray-700">Características (1 por linha)</label><textarea name="preco[${index}][caracteristicas]" rows="3" placeholder="Ex:&#10;Projeto funcional e bem distribuído;&#10;Sem mobília inclusa;" class="form-input w-full" required></textarea></div>
                <div><label class="block text-xs font-medium text-gray-700">Link Botão CTA</label><input type="url" name="preco[${index}][linkCta]" placeholder="Link do WhatsApp" class="form-input w-full" required></div>
            </div>
        </div>
    `;
};

if (addPrecoBtn) {
    const addPreco = () => {
        precosContainer.insertAdjacentHTML('beforeend', createPrecoBlock(precoIndex));
        precoIndex++;
    };
    addPrecoBtn.addEventListener('click', addPreco);
    addPreco(); // Adiciona 1 pacote inicial
}

// =================================================================
// FUNÇÕES DINÂMICAS: 9. Perguntas Frequentes (FAQ)
// =================================================================
let faqIndex = 0;
const faqContainer = document.getElementById('faq-container');
const addFaqBtn = document.getElementById('addFaqBtn');

const createFaqBlock = (index) => {
    const id = `faq-${index}`;
    return `
        <div id="${id}" class="p-3 border border-violeta-principal/50 rounded-xl bg-white/80 relative">
            ${createRemoveButton(id)}
            <h4 class="font-semibold text-violeta-principal mb-3">FAQ ${index + 1}</h4>
            <label class="block text-sm font-medium text-gray-700 mb-1">Pergunta</label>
            <input type="text" name="faq[${index}][pergunta]" placeholder="Ex: Qual o endereço do empreendimento?" class="form-input w-full mb-2" required>
            <label class="block text-sm font-medium text-gray-700 mb-1">Resposta</label>
            <textarea name="faq[${index}][resposta]" rows="2" placeholder="Ex: O AMS Córrego Grande está localizado na Rua Vera Linhares..." class="form-input w-full" required></textarea>
        </div>
    `;
};

if (addFaqBtn) {
    const addFaq = () => {
        faqContainer.insertAdjacentHTML('beforeend', createFaqBlock(faqIndex));
        faqIndex++;
    };
    addFaqBtn.addEventListener('click', addFaq);
    addFaq(); // Adiciona 1 FAQ inicial
}

// --- FIM DAS FUNÇÕES DINÂMICAS ---


// =================================================================
// FUNÇÃO PRINCIPAL DE SUBMISSÃO (ATUALIZADA)
// =================================================================
document.getElementById('walkaForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Enviando, aguarde...";
    submitButton.disabled = true;

    // *** SUA URL DE WEBHOOK FOI INSERIDA AQUI ***
    const webhookURL = 'https://hooks.zapier.com/hooks/catch/14417228/ur9ljc6/';

    const formData = new FormData(e.target);
    
    // Converte FormData para um formato que o Zapier entende (Query String)
    const data = new URLSearchParams();
    for (const pair of formData) {
        data.append(pair[0], pair[1]);
    }

    // Envia os dados para o Zapier
    // Usamos 'sendBeacon' que é mais confiável para enviar dados
    // sem se preocupar com a página fechando ou mudando
    const sent = navigator.sendBeacon(webhookURL, data);

    if (sent) {
        // Sucesso imediato (não garante recebimento, mas garante envio)
        submitButton.textContent = "Dados Enviados com Sucesso!";
        submitButton.classList.remove('color-ciano-destaque');
        submitButton.classList.add('color-vermelho-indiano');
    } else {
        // Erro ao tentar enviar
        submitButton.textContent = "Erro ao enviar. Tente novamente.";
    }

    // Reseta o botão após 3 segundos
    setTimeout(() => {
         submitButton.textContent = originalText;
         submitButton.classList.remove('color-vermelho-indiano');
         submitButton.classList.add('color-ciano-destaque');
         submitButton.disabled = false;
    }, 3000);
});