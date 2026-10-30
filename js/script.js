// DATOS PARA FILTRAR//

//PRIMER FILTRO: Sectores//

const dwmajo = [
    //proyectos//
    {id : 1, name:"Misión", image: "img/foto1.jpg", genero:"proyectos",description: "En Alma Solidaria creemos que todos merecen una oportunidad para salir adelante, por eso trabajamos para apoyar a quienes más lo necesitan."},
    {id : 2, name:"Visión", image: "img/foto7.jpg", genero:"proyectos",description: "Ser una fundación reconocida por transformar vidas y construir comunidades más unidas, solidarias y resilientes."},
    {id : 3, name:"Nuestro compromiso", image: "img/foto5.jpg", genero:"proyectos",description: "Trabajamos con empatía, respeto y responsabilidad, buscando que cada acción contribuya al bienestar de las personas y sus comunidades."},
    {id : 4, name:"Juntos hacemos la diferencia", image: "img/foto8.jpg", genero:"proyectos",description: "Creemos que los pequeños actos de bondad pueden generar grandes cambios, súmate a Alma Solidaria y ayúdanos a construir un futuro mejor."},

//sumate//
    {id : 5, name:"¿Qué hacemos?", image: "img/foto4.jpg", genero:"sumate",description: "En Alma Solidaria creemos que todos merecen una oportunidad para salir adelante, por eso trabajamos para apoyar a quienes más lo necesitan."},
    {id : 6, name:"Únete como voluntario", image: "img/foto3.jpg", genero:"sumate",description: "Tu tiempo y tus ganas de ayudar pueden marcar una gran diferencia, juntos podemos crear acciones que lleven esperanza a más personas."},
    {id : 7, name:" Súmate a nuestra causa", image: "img/foto2.jpg", genero:"sumate",description: "Súmate a Alma Solidaria y ayúdanos a transformar vidas, con pequeñas acciones podemos crear grandes cambios y llevar esperanza a quienes más lo necesitan."},  
    {id : 8, name:"Dona y transforma vidas", image: "img/foto6.jpg", genero:"sumate",description: "Cada donación cuenta, sin importar su tamaño, con tu apoyo podemos hacer llegar recursos a quienes más los necesitan."},
];

// Obtener los contenedores y botones del DOM
const dwmajoContainer = document.getElementById("Sectores-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwmajoToRender = [];

    if (genero === "all") {
        dwmajoToRender = dwmajo;
    } else {
        dwmajoToRender = dwmajo.filter(item => item.genero === genero);
    }

    // Limpia el contenedor antes de renderizar
    dwmajoContainer.innerHTML = '';

    if (!dwmajoToRender || dwmajoToRender.length === 0) {
        dwmajoContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    // Crea y agrega las tarjetas
    dwmajoToRender.forEach(item => {
        const cardHtml = `
            <figure class="proyecto-card" data-gender="${item.genero}">
                <img src="${item.image}" alt="la fundación tiene los programas, nombre: ${item.name}">
                <figcaption>
                    ${item.name}
                </figcaption>
                <div class="card-description">
                    <p>${item.description}</p>
                </div>
            </figure>
        `;
        dwmajoContainer.innerHTML += cardHtml;
    });
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;

        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");

        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(genero);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


