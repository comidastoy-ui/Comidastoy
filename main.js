document.addEventListener("DOMContentLoaded", () => {

    console.log("🍔 Bienvenido a COMIDASTOY");

    /* =======================
       TARJETAS
    ======================= */
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert("¡Este producto pronto estará disponible para pedidos!");
        });
    });

    /* =======================
       MENU RESPONSIVE
    ======================= */
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('activo');
        });
    }

    /* =======================
       TEXTO PIXAR
    ======================= */
    const texto = document.getElementById("toyText");

    if (texto) {
        const contenido = texto.textContent;
        texto.innerHTML = "";

        [...contenido].forEach((letra, i) => {
            const span = document.createElement("span");
            span.textContent = letra === " " ? "\u00A0" : letra;
            span.style.animationDelay = `${1.2 + i * 0.08}s`;
            texto.appendChild(span);
        });
    }

});
document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.toy-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('activo');
        });
    }

});