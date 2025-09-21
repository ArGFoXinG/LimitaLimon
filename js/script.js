document.addEventListener('DOMContentLoaded', function() {
    // Datos de proyectos (puedes reemplazar con tus proyectos reales)
    const projects = [
        {
            title: "Grabados únicos en mates",
            description: "Un homenaje en cada sorbo: diseño personalizado para recuerdos imborrables.",
            image: "img/mate.svg",
            tags: ["Acero", "Grabado", "Comercial"],
            alt: "Mate tradicional con grabado láser en metal que dice 'Este mate es de mi abuela - Oleguita'. Producto personalizado para negocios locales."
        },
        {
            title: "Joyero Artesanal",
            description: "Joyero de madera con diseño moderno y detalles grabados con láser.",
            image: "img/imagen11.jpg",
            tags: ["Madera", "Diseño", "Regalo"],
            alt: "Tags acrílicos personalizados para mascotas con nombres grabados, en formas de hueso, corazón y rectángulo. Ideal para eventos y decoración."
        },
        {
            title: "Identidad para tus mascotas",
            description: "Porque ellos también merecen un detalle especial. Grabamos su nombre, vos elegís el estilo.",
            image: "img/imagen2.jpeg",
            tags: ["Único", "Moderno", "Personalizado"],
            alt: "Tags acrílicos personalizados para mascotas con nombres grabados, en formas de hueso, corazón y rectángulo. Ideal para eventos y decoración."
        },
        {
            title: "Diseño con Color",
            description: "Porta-retratos que transforman la luz en arte. Cada color, una emoción en tu hogar.",
            image: "img/imagen9.jpg",
            tags: ["Madera", "Momentos", "Decoración"],
            alt: "Porta-retratos de madera con acrílico teñido en colores vibrantes, diseño minimalista para decoración del hogar."
        },
        {
            title: "Diseño con estilo",
            description: "Un detalle que informa y sorprende. Ideal para lanzamientos, donaciones o reconocimientos.",
            image: "img/imagen8.jpg",
            tags: ["Resistente", "Calidad", "Único"],
            alt: "Señal informativa grabada en plástico duradero con diseño ornamental, ideal para museos y espacios institucionales."
        },
        {
            title: "Tazas con Historia",
            description: "Una taza, un gesto, un recuerdo. Personalizá tus momentos con diseño significativo.",
            image: "img/imagen5.jpeg",
            tags: ["Obsequio", "Estetico", "Artístico"],
            alt: "Taza blanca con grabado personalizado que incluye nombre, fecha y mensaje institucional. Regalo para eventos o grupos."
        },
        {
            title: "Invitación a tu medida",
            description: "Dos iniciales, un año y un deseo grabados en metal. El regalo perfecto para compromisos y aniversarios.",
            image: "img/imagen6.jpg",
            tags: ["Metal", "Celebrar", "Artístico"],
            alt: "Taza metálica personalizada con iniciales y año grabado. Ideal para bodas, aniversarios o celebraciones especiales."
        },
        {
            title: "Celebrá tu Victoria",
            description: "Tu logo, un mensaje y un año grabados en vidrio: el recuerdo perfecto para campeones.",
            image: "img/imagen7.jpg",
            tags: ["Vidrio", "Diseños", "Artístico"],
            alt: "Vaso de vidrio grabado con escudo 'CAB' y mensaje de felicitación. Producto personalizado para clubes y campeonatos."
        },
    ];

    // Cargar proyectos en el DOM
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.alt}" />
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });

    // Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.backgroundColor = 'white';
            nav.style.padding = '1rem';
            nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            
            nav.querySelector('ul').style.flexDirection = 'column';
        }
    });

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    /*
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar el código para enviar el formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulando envío del formulario
            console.log('Formulario enviado:', { name, email, message });
            
            // Mostrar mensaje de éxito
            alert('Gracias por tu mensaje, ' + name + '! Me pondré en contacto contigo pronto.');
            
            // Resetear formulario
            contactForm.reset();
        });
    }
    */
    // Animaciones al hacer scroll
    window.addEventListener('scroll', function() {
        // Puedes agregar aquí efectos de aparición al hacer scroll
    });
});
