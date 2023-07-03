let ModalBuscarContacto = document.querySelector(".BuscarContacto");
let MensajeBorrarContacto = document.querySelector(".MensajeBorrarContacto");
let MensajeBorrarContactoMensaje = document.querySelector(".MensajeBorrarContactoMensaje");
let MensajeContactoEliminado = document.querySelector(".MensajeContactoEliminado");

let BotonContactoEliminar = document.querySelector('.Form-ContactoEliminar');
let BotonMensajeBorrarContactoCancelar = document.querySelector(".MensajeBorrarContactoCancelar");
let BotonMensajeBorrarContactoAceptar = document.querySelector(".MensajeBorrarContactoAceptar");


BotonContactoEliminar.addEventListener("click", ()=> {
    MensajeBorrarContacto.classList.add("Mostrar");
    let NombreDelContactoBuscado = document.querySelector('.Form-InputContactoNombre').value.toUpperCase();
    MensajeBorrarContactoMensaje.innerHTML = `
        <b style="color: #E7625F;">${NombreDelContactoBuscado}</b>
        se borrara de forma permanente y no podras recuperarlo.
    `;
});

BotonMensajeBorrarContactoAceptar.addEventListener('click', () => {
    MensajeBorrarContacto.classList.remove("Mostrar");
    ModalBuscarContacto.classList.remove("Mostrar");
    let IdDelContactoAEliminar = document.getElementById('Form-idDelContactoAEditar').value;
    $.ajax({
        data: { IdDelContactoAEliminar },
        url: '../ArchivosPHP/EliminarContacto.php', 
        dataType: 'HTML',
        type: 'POST'
    }).done(function(){
        FormInformacionContacto.reset();
        MostrarMensajeContactoEliminado();
        DesactivarInputTextEditar();
        AgregarBGDeInputTextAEditar();
        DesactivarBotonGuardarEdicion();
        DesactivarEliminarYEditar();
    }).fail(function(){
        echo("Error en ajax Eliminar Contacto");
    });
})
BotonMensajeBorrarContactoCancelar.addEventListener('click', () => {
    MensajeBorrarContacto.classList.remove("Mostrar")
})

// 6.2.- MOSTRAR MENSAJE DE ACTUALIZACION EXITOSA
function MostrarMensajeContactoEliminado(){
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
    MensajeContactoEliminado.classList.add("Mostrar");
    setTimeout(function(){
        MensajeContactoEliminado.classList.remove("Mostrar");
    },3000);
}