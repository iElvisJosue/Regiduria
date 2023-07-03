const InformacionEliminar = document.querySelector(".Informacion-Eliminar");
const VerInformacionEliminarCita = document.querySelector(".VerInformacion");
const MensajeBorrarCita = document.querySelector(".MensajeBorrarCita");
const MensajeCitaEliminada = document.querySelector(".MensajeCitaEliminada");

const BtnMensajeBorrarCancelar = document.querySelector(".MensajeBorrarCitaCancelar");
const BtnMensajeBorrarAceptar = document.querySelector(".MensajeBorrarCitaAceptar");
const ECBusquedaPorFecha = document.getElementById("BusquedaPorFecha");
const ECBotonBorrarFecha = document.querySelector(".BotonBorrarFecha");

InformacionEliminar.addEventListener('click', () => {
    MensajeBorrarCita.classList.add("Mostrar")
})
BtnMensajeBorrarCancelar.addEventListener('click', () => {
    MensajeBorrarCita.classList.remove("Mostrar")
})
BtnMensajeBorrarAceptar.addEventListener('click', () => {
    EliminarCita();
    MensajeBorrarCita.classList.remove("Mostrar");
    VerInformacionEliminarCita.classList.remove("Mostrar")
})

function EliminarCita(){
    $.ajax({
        data: { idDeLaCitaSeleccionada },
        url: '../ArchivosPHP/EliminarCita.php', 
        dataType: 'HTML',
        type: 'POST'
    }).done(function(Eliminada){
        if(Eliminada === "Eliminada"){
            MostrarMensajeCitaEliminada();
            ObtenerFechaCita();
        }
    }).fail(function(){
        console.log("Error en ajax concluir cita");
    });
}

function MostrarMensajeCitaEliminada(){
    ECBusquedaPorFecha.value = '';
    ECBotonBorrarFecha.classList.remove("MostrarBorrarFecha");
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
    MensajeCitaEliminada.classList.add("Mostrar");
    setTimeout(function(){
        MensajeCitaEliminada.classList.remove("Mostrar");
    },2000);
}