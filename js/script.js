document.addEventListener('DOMContentLoaded', function() {
    // Datos de proyectos (puedes reemplazar con tus proyectos reales)
    const projects = [
        {
            title: "Letreros Personalizados",
            description: "Diseño y fabricación de letreros en madera con grabado láser para negocios locales.",
            image: "img/mate.svg",
            tags: ["Madera", "Grabado", "Comercial"],
            alt: "Letrero de madera grabado con láser mostrando el logo de una cafetería"
        },
        {
            title: "Joyero Artesanal",
            description: "Joyero de madera con diseño moderno y detalles grabados con láser.",
            image: "img/imagen11.jpg",
            tags: ["Madera", "Diseño", "Regalo"],
            alt: "Joyero de madera con tapa grabada con diseño geométrico"
        },
        {
            title: "Decoración para Eventos",
            description: "Piezas decorativas para boda con nombres y fechas grabadas en acrílico.",
            image: "img/imagen2.jpeg",
            tags: ["Acrílico", "Eventos", "Personalizado"],
            alt: "Arreglo decorativo de boda con piezas de acrílico grabadas con láser"
        },
        {
            title: "Porta-retratos Moderno",
            description: "Porta-retratos de diseño minimalista con detalles grabados.",
            image: "img/imagen9.jpg",
            tags: ["Madera", "Fotos", "Hogar"],
            alt: "Porta-retratos de madera con marco delgado y diseño grabado con láser"
        },
        {
            title: "Señalización Museística",
            description: "Señalización informativa grabada en plástico de alta durabilidad.",
            image: "img/imagen8.jpg",
            tags: ["Plástico", "Institucional", "Durable"],
            alt: "Señalización de museo con información grabada en placa plástica"
        },
        {
            title: "Juego de Ajedrez",
            description: "Tablero y piezas de ajedrez totalmente grabadas con detalles artísticos.",
            image: "img/imagen5.jpeg",
            tags: ["Madera", "Juego", "Artístico"],
            alt: "Juego de ajedrez completo con tablero y piezas grabadas con láser"
        },
        {
            title: "Juego de Ajedrez",
            description: "Tablero y piezas de ajedrez totalmente grabadas con detalles artísticos.",
            image: "img/imagen6.jpg",
            tags: ["Madera", "Juego", "Artístico"],
            alt: "Juego de ajedrez completo con tablero y piezas grabadas con láser"
        },
        {
            title: "Juego de Ajedrez",
            description: "Tablero y piezas de ajedrez totalmente grabadas con detalles artísticos.",
            image: "img/imagen7.jpg",
            tags: ["Madera", "Juego", "Artístico"],
            alt: "Juego de ajedrez completo con tablero y piezas grabadas con láser"
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
