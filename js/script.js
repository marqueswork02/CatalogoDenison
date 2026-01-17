/* ============================================
   JavaScript - Imobiliária Moderna
   Funcionalidades: Menu, Modal, Formulário, WhatsApp, Pesquisa, Sliders
   ============================================ */

// Dados dos imóveis
const properties = [
    {
        id: 1,
        title: 'Apartamento Butantã',
        location: 'Butantã, São Paulo',
        price: 450000,
        formattedPrice: 'R$ 450.000',
        area: 200,
        formattedArea: '200m²',
        bedrooms: 3,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 2,
        title: 'Apartamento Faria Lima',
        location: 'Faria Lima, São Paulo',
        price: 650000,
        formattedPrice: 'R$ 650.000',
        area: 150,
        formattedArea: '150m²',
        bedrooms: 2,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 3,
        title: 'Apartamento Av Paulista',
        location: 'Av Paulista, São Paulo',
        price: 550000,
        formattedPrice: 'R$ 550.000',
        area: 120,
        formattedArea: '120m²',
        bedrooms: 3,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 4,
        title: 'Casa de Luxo Jardins',
        location: 'Jardins, São Paulo',
        price: 1200000,
        formattedPrice: 'R$ 1.200.000',
        area: 350,
        formattedArea: '350m²',
        bedrooms: 4,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 5,
        title: 'Studio Moderno Pinheiros',
        location: 'Pinheiros, São Paulo',
        price: 280000,
        formattedPrice: 'R$ 280.000',
        area: 45,
        formattedArea: '45m²',
        bedrooms: 1,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 6,
        title: 'Cobertura Vila Mariana',
        location: 'Vila Mariana, São Paulo',
        price: 890000,
        formattedPrice: 'R$ 890.000',
        area: 220,
        formattedArea: '220m²',
        bedrooms: 3,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 7,
        title: 'Cobertura Vila Mariana',
        location: 'Vila Mariana, São Paulo',
        price: 890000,
        formattedPrice: 'R$ 890.000',
        area: 220,
        formattedArea: '220m²',
        bedrooms: 3,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 8,
        title: 'Cobertura Vila Mariana',
        location: 'Vila Mariana, São Paulo',
        price: 890000,
        formattedPrice: 'R$ 890.000',
        area: 220,
        formattedArea: '220m²',
        bedrooms: 3,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    },
    {
        id: 9,
        title: 'Cobertura Vila Mariana',
        location: 'Vila Mariana, São Paulo',
        price: 890000,
        formattedPrice: 'R$ 890.000',
        area: 220,
        formattedArea: '220m²',
        bedrooms: 3,
        images: ['images/apartment-showcase.jpg', 'images/hero-banner.jpg', 'images/location-feature.jpg']
    }
];

// ============================================
// Inicializar Slider Hero
// ============================================

function initHeroSlider() {
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
}

// ============================================
// Menu Toggle
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// Renderizar Cards de Imóveis com Sliders
// ============================================

function renderProperties(filteredProperties = properties) {
    const propertiesGrid = document.getElementById('propertiesGrid');
    if (!propertiesGrid) return;
    
    if (filteredProperties.length === 0) {
        propertiesGrid.innerHTML = `
            <div class="no-results">
                <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🔍</span>
                <h3>Nenhum imóvel encontrado</h3>
                <p>Tente ajustar seus filtros para encontrar o que procura.</p>
            </div>
        `;
        return;
    }

    propertiesGrid.innerHTML = filteredProperties.map(property => `
        <div class="property-card">
            <div class="property-image-container">
                <div class="swiper propertySwiper-${property.id}">
                    <div class="swiper-wrapper">
                        ${property.images.map(image => `
                            <div class="swiper-slide">
                                <img src="${image}" alt="${property.title}" class="property-image">
                            </div>
                        `).join('')}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <button class="property-favorite" title="Adicionar aos favoritos">
                    ❤️
                </button>
            </div>
            
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                
                <div class="property-location">
                    <span class="property-location-icon">📍</span>
                    <span>${property.location}</span>
                </div>
                
                <div class="property-details">
                    <div class="property-detail">
                        <span class="property-detail-icon">📐</span>
                        <span>${property.formattedArea}</span>
                    </div>
                    <div class="property-detail">
                        <span class="property-detail-icon">🛏️</span>
                        <span>${property.bedrooms} ${property.bedrooms > 1 ? 'quartos' : 'quarto'}</span>
                    </div>
                </div>
                
                <div class="property-footer">
                    <div>
                        <div class="property-price-label">Preço</div>
                        <div class="property-price">${property.formattedPrice}</div>
                    </div>
                    <button class="btn btn-secondary property-button" onclick="openInterestModal(${property.id})">
                        Tenho Interesse
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Inicializar sliders para cada propriedade
    filteredProperties.forEach(property => {
        new Swiper(`.propertySwiper-${property.id}`, {
            loop: true,
            pagination: {
                el: `.propertySwiper-${property.id} .swiper-pagination`,
                clickable: true,
            },
            navigation: {
                nextEl: `.propertySwiper-${property.id} .swiper-button-next`,
                prevEl: `.propertySwiper-${property.id} .swiper-button-prev`,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
            }
        });
    });
}

// ============================================
// Funcionalidade de Pesquisa e Filtros
// ============================================

const searchForm = document.getElementById('searchForm');
const clearSearchBtn = document.getElementById('clearSearch');

if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const location = document.getElementById('searchLocation').value.toLowerCase();
        const maxPrice = document.getElementById('searchPrice').value;
        const minArea = document.getElementById('searchArea').value;
        const minBedrooms = document.getElementById('searchBedrooms').value;
        
        const filtered = properties.filter(property => {
            const matchLocation = !location || property.location.toLowerCase().includes(location) || property.title.toLowerCase().includes(location);
            const matchPrice = !maxPrice || property.price <= parseInt(maxPrice);
            const matchArea = !minArea || property.area >= parseInt(minArea);
            const matchBedrooms = !minBedrooms || property.bedrooms >= parseInt(minBedrooms);
            
            return matchLocation && matchPrice && matchArea && matchBedrooms;
        });
        
        renderProperties(filtered);
        
        // Scroll suave para o catálogo após pesquisar
        document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
        searchForm.reset();
        renderProperties(properties);
    });
}

// ============================================
// Modal de Interesse
// ============================================

const interestModal = document.getElementById('interestModal');
const modalClose = document.getElementById('modalClose');
const cancelBtn = document.getElementById('cancelBtn');
const interestForm = document.getElementById('interestForm');
let selectedProperty = null;

// Abrir modal
function openInterestModal(propertyId) {
    selectedProperty = properties.find(p => p.id === propertyId);
    
    // Preencher informações do imóvel
    const propertyInfo = document.getElementById('propertyInfo');
    if (propertyInfo) {
        propertyInfo.innerHTML = `
            <div class="property-info-label">Imóvel de Interesse</div>
            <div class="property-info-title">${selectedProperty.title}</div>
            <div class="property-info-location">📍 ${selectedProperty.location}</div>
            <div class="property-info-price">${selectedProperty.formattedPrice}</div>
        `;
    }
    
    // Limpar formulário
    if (interestForm) {
        interestForm.reset();
        clearErrors();
    }
    
    // Mostrar modal
    if (interestModal) {
        interestModal.classList.add('active');
    }
}

// Fechar modal
function closeInterestModal() {
    if (interestModal) {
        interestModal.classList.remove('active');
    }
    selectedProperty = null;
}

if (modalClose) modalClose.addEventListener('click', closeInterestModal);
if (cancelBtn) cancelBtn.addEventListener('click', closeInterestModal);

// Fechar modal ao clicar fora
if (interestModal) {
    interestModal.addEventListener('click', (e) => {
        if (e.target === interestModal) {
            closeInterestModal();
        }
    });
}

// ============================================
// Validação de Formulário
// ============================================

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
    });
    document.querySelectorAll('input, textarea').forEach(el => {
        el.classList.remove('error');
    });
}

function validateForm(formData) {
    const errors = {};
    
    // Validar nome
    if (!formData.name.trim()) {
        errors.name = 'Nome é obrigatório';
    }
    
    // Validar email
    if (!formData.email.trim()) {
        errors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Email inválido';
    }
    
    // Validar telefone
    if (!formData.phone.trim()) {
        errors.phone = 'Telefone é obrigatório';
    } else {
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 11) {
            errors.phone = 'Telefone inválido (10 ou 11 dígitos)';
        }
    }
    
    return errors;
}

function showErrors(errors) {
    clearErrors();
    
    Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(`${field}Error`);
        const inputElement = document.getElementById(field);
        
        if (errorElement) {
            errorElement.textContent = errors[field];
            errorElement.classList.add('show');
        }
        
        if (inputElement) {
            inputElement.classList.add('error');
        }
    });
}

// ============================================
// Enviar Formulário para WhatsApp
// ============================================

if (interestForm) {
    interestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // Validar
        const errors = validateForm(formData);
        if (Object.keys(errors).length > 0) {
            showErrors(errors);
            return;
        }
        
        // Preparar mensagem para WhatsApp
        const message = `Olá! Tenho interesse no imóvel: ${selectedProperty.title} (${selectedProperty.location}) - ${selectedProperty.formattedPrice}\n\nMeus dados:\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n${formData.message ? `Mensagem: ${formData.message}` : ''}`;
        
        // Codificar mensagem
        const encodedMessage = encodeURIComponent(message);
        
        // Número do WhatsApp
        const whatsappNumber = '5511995999282';
        
        // URL do WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Fechar modal após um pequeno delay
        setTimeout(() => {
            closeInterestModal();
        }, 500);
    });
}

// ============================================
// Remover erro ao digitar
// ============================================

document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('input', () => {
        if (element.classList.contains('error')) {
            element.classList.remove('error');
            const errorElement = document.getElementById(`${element.id}Error`);
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        }
    });
});

// ============================================
// Inicializar
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    renderProperties();
});
