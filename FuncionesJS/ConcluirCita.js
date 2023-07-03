let InformacionConcluido = document.querySelector(".Informacion-Concluido");
let MensajeConcluirCita = document.querySelector(".MensajeConcluirCita");
let MensajeConcluirCitaCancelar = document.querySelector(".MensajeConcluirCitaCancelar");
let MensajeConcluirCitaAceptar = document.querySelector(".MensajeConcluirCitaAceptar");
let VerInformacionAConcluirCita = document.querySelector(".VerInformacion");
let MensajeCitaConcluida = document.querySelector(".MensajeCitaConcluida");
let CCBusquedaPorFecha = document.getElementById("BusquedaPorFecha");
let CCBotonBorrarFecha = document.querySelector(".BotonBorrarFecha");

InformacionConcluido.addEventListener("click", () => {
    MensajeConcluirCita.classList.add("Mostrar");
})
MensajeConcluirCitaCancelar.addEventListener("click", () => {
    MensajeConcluirCita.classList.remove("Mostrar");
})
MensajeConcluirCitaAceptar.addEventListener("click", () => {
    MensajeConcluirCita.classList.remove("Mostrar");
    ConcluirLaCita();
})
function ConcluirLaCita(){
    $.ajax({
        data: { idDeLaCitaSeleccionada },
        url: '../ArchivosPHP/ConcluirCita.php', 
        dataType: 'HTML',
        type: 'POST'
    }).done(function(CitaConcluida){
        if(CitaConcluida === "CitaConcluida"){
            VerInformacionAConcluirCita.classList.remove("Mostrar");
            MostrarMensajeCitaConcluida();
            ObtenerFechaCita();
        }
    }).fail(function(){
        console.log("Error en ajax concluir cita");
    });
}

function MostrarMensajeCitaConcluida(){
    CCBusquedaPorFecha.value = '';
    CCBotonBorrarFecha.classList.remove("MostrarBorrarFecha");
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
    MensajeCitaConcluida.classList.add("Mostrar");
    setTimeout(function(){
        MensajeCitaConcluida.classList.remove("Mostrar");
    },2000);
}