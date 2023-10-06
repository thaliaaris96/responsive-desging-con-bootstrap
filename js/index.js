const opcionesBtn = document.getElementById('opcionesBtn');
const opciones = document.getElementById('opciones');

opcionesBtn.addEventListener('click', () => {
    if (opcionesBtn.getAttribute('data-clicked') === "")
        opciones.classList.add('d-none', 'd-lg-block');
    else
        opciones.classList.remove('d-none', 'd-lg-block');

    opcionesBtn.toggleAttribute('data-clicked');
});