const RegistrarContacto = document.querySelector('.RegistrarContacto');
const CerrarRegistrarContacto = document.querySelector('.Form-IconoCerrar');

BtnNuevoContacto.addEventListener('click', () => {
    RegistrarContacto.classList.add('Mostrar');
    ObteniendoPrincipal.classList.add('OcultarPrincipal');
})
CerrarRegistrarContacto.addEventListener('click', () => {
    RegistrarContacto.classList.remove('Mostrar');
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
})
