////// OBTENER BOTONES DEL HTML  ///////
BtnNuevaCita = document.querySelector('.NuevaCita');
BtnNuevoContacto = document.querySelector('.NuevoContacto');
BtnCerrarSesion = document.querySelector('.CerrarSesion');
ObteniendoPrincipal = document.querySelector('.Principal');
const BtnNuevoRC = document.querySelector('.NuevoRC');

////// FUCION PARA MOSTRAR LOS BOTONES DE AGREGAR CONTACTO O USUARIO ///////
BtnNuevoRC.addEventListener('click', () => {
    BtnNuevoContacto.classList.toggle('MostrarNuevoContacto');
    BtnNuevaCita.classList.toggle('MostrarNuevaCita');
    BtnCerrarSesion.classList.toggle('MostrarCerrarSesion');
})
BtnNuevoContacto.addEventListener('click', () => {
    BtnNuevoContacto.classList.remove('MostrarNuevoContacto');
    BtnNuevaCita.classList.remove('MostrarNuevaCita');
    BtnCerrarSesion.classList.remove('MostrarCerrarSesion');
})
BtnNuevaCita.addEventListener('click', () => {
    BtnNuevoContacto.classList.remove('MostrarNuevoContacto');
    BtnNuevaCita.classList.remove('MostrarNuevaCita');
    BtnCerrarSesion.classList.remove('MostrarCerrarSesion');
})
BtnCerrarSesion.addEventListener("click", ()=> {
    location.href = "../ArchivosPHP/DestruirSesion.php";
})

