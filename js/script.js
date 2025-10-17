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

const addPlanta = () => {
    plantasContainer.insertAdjacentHTML('beforeend', createPlantaBlock(plantaIndex));
    plantaIndex++;
};
addPlantaBtn.addEventListener('click', addPlanta);
addPlanta(); // Adiciona 1 planta inicial

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

const addTour = () => {
    toursContainer.insertAdjacentHTML('beforeend', createTourBlock(tourIndex));
    tourIndex++;
};
addTourBtn.addEventListener('click', addTour);
addTour(); // Adiciona 1 tour inicial

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

const addPreco = () => {
    precosContainer.insertAdjacentHTML('beforeend', createPrecoBlock(precoIndex));
    precoIndex++;
};
addPrecoBtn.addEventListener('click', addPreco);
addPreco(); // Adiciona 1 pacote inicial

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

const addFaq = () => {
    faqContainer.insertAdjacentHTML('beforeend', createFaqBlock(faqIndex));
    faqIndex++;
};
addFaqBtn.addEventListener('click', addFaq);
addFaq(); // Adiciona 1 FAQ inicial

// =================================================================
// FUNÇÃO PRINCIPAL DE SUBMISSÃO
// =================================================================
document.getElementById('walkaForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // Lógica de simulação de captura (manter para debug)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("--- Dados do Formulário Capturados (Prontos para Automação) ---");
    console.log(data); // Exibe os dados no console para verificação
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.textContent = "Dados Capturados! (Ver Console)";
    submitButton.classList.remove('color-ciano-destaque');
    submitButton.classList.add('color-vermelho-indiano');
    
    setTimeout(() => {
         submitButton.textContent = "Gerar Dados para Hotsite";
         submitButton.classList.remove('color-vermelho-indiano');
         submitButton.classList.add('color-ciano-destaque');
    }, 3000);
});