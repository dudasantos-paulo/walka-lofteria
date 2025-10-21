// Tabs + Troca de iframes dos tours 360 + Back-to-top + Smooth scroll
(function(){
  // Tabs
  const tabs = document.querySelectorAll('.tab');
  const panels = {
    eco: document.getElementById('panel-eco'),
    slim: document.getElementById('panel-slim'),
    urban: document.getElementById('panel-urban'),
  };
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x=>x.classList.remove('is-active'));
    t.classList.add('is-active');
    const key = t.dataset.tab;
    Object.values(panels).forEach(p=>p.classList.remove('is-active'));
    panels[key]?.classList.add('is-active');
    document.getElementById('tours')?.scrollIntoView({behavior:'smooth', block:'start'});
  }));

  // Troca de iframe por linha (Basic / Essential / Design)
  document.querySelectorAll('.tour-selector').forEach(group => {
    const wrap = group.nextElementSibling?.querySelector('iframe');
    if(!wrap) return;
    group.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.btn').forEach(b=>b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const url = btn.dataset.iframe;
        if(url) wrap.src = url;
      });
    });
  });

  // Smooth scroll para todos os links âncora
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Botão "Voltar ao topo" visível após rolagem
  const backTop = document.querySelector('.back-to-top');
  const onScroll = () => {
    if(!backTop) return;
    if(window.scrollY > 480){
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Acordeão (com details/summary já nativo; aqui apenas melhora foco/teclado)
  document.querySelectorAll('.faq-item > summary').forEach(sum => {
    sum.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        sum.parentElement.open = !sum.parentElement.open;
      }
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const styleBtns = document.querySelectorAll(".style-tabs .btn");
  const packageBtns = document.querySelectorAll(".package-tabs .btn");
  const img = document.getElementById("planta-img");
  const nome = document.getElementById("planta-nome");
  const desc = document.getElementById("planta-desc");

  let currentStyle = "eco";
  let currentPackage = "standard";

  // ===================================================================
  // MODIFICAÇÃO PRINCIPAL: O Python vai injetar o objeto imgMap aqui.
  // ===================================================================
  const imgMap = {{IMG_MAP_JSON}};
  // ===================================================================

  const infoMap = {
    standard: "Studio Standard - Imóvel entregue padrão",
    basic: "Studio Basic - Solução prática e econômica para investidores que buscam agilidade na venda ou locação anual do imóvel",
    essential: "Studio Essential - Pensado para imóveis de short stay, com foco em performance e controle de custos",
    design: "Studio Design - Projetado para imóveis de estadia premium, com foco em estética refinada e alto valor percebido"
  };

  function updatePlanta() {
    // Garante que o objeto existe antes de tentar acessá-lo
    if (!imgMap[currentStyle] || !imgMap[currentStyle][currentPackage]) {
      console.warn(`Imagem não encontrada para: ${currentStyle} ${currentPackage}`);
      // Define uma imagem padrão ou simplesmente para a execução
      // img.src = 'images/default-planta.jpg'; 
      return; 
    }
    
    img.src = imgMap[currentStyle][currentPackage];
    img.alt = `Studio ${currentStyle} ${currentPackage}`;
    nome.textContent = `Studio ${capitalize(currentPackage)} — ${capitalize(currentStyle)}`;
    desc.textContent = infoMap[currentPackage];
  }

  const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

  styleBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      styleBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentStyle = btn.dataset.style;
      updatePlanta();
    });
  });

  packageBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      packageBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentPackage = btn.dataset.package;
      updatePlanta();
    });
  });
  
  // Inicia a planta com os valores padrão
  updatePlanta();
});

// ================= GALERIA SCROLL + LIGHTBOX =================

// Scroll horizontal com setas
const scrollContainer = document.querySelector(".horizontal-scroll-container");
const leftArrow = document.querySelector(".gallery-arrow-left");
const rightArrow = document.querySelector(".gallery-arrow-right");

if (leftArrow && rightArrow && scrollContainer) {
  leftArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollContainer.clientWidth * 0.8, behavior: "smooth" });
  });
  rightArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollContainer.clientWidth * 0.8, behavior: "smooth" });
  });
}

// Modal Lightbox
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");
const modalArrowLeft = document.querySelector(".modal-arrow-left");
const modalArrowRight = document.querySelector(".modal-arrow-right");
const galleryImages = document.querySelectorAll(".gallery-image");

let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
    currentIndex = index;
  });
});

const showImage = (index) => {
  if (galleryImages.length === 0) return; // Previne erro se galeria estiver vazia
  if (index < 0) index = galleryImages.length - 1;
  if (index >= galleryImages.length) index = 0;
  currentIndex = index;
  modalImg.src = galleryImages[currentIndex].src;
};

if (modalArrowLeft && modalArrowRight) {
  modalArrowLeft.addEventListener("click", () => showImage(currentIndex - 1));
  modalArrowRight.addEventListener("click", () => showImage(currentIndex + 1));
}

if (closeModal && modal) {
  closeModal.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

// Teclas do teclado
document.addEventListener("keydown", (e) => {
  if (!modal || !modal.classList.contains("active")) return;
  if (e.key === "ArrowLeft") showImage(currentIndex - 1);
  if (e.key === "ArrowRight") showImage(currentIndex + 1);
  if (e.key === "Escape") modal.classList.remove("active");
});

})();