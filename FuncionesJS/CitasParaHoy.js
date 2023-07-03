const MensajeNotificacion = document.querySelector(".MensajeNotificacion");
const CuadroMensajeNotificacion = document.querySelector(".CuadroMensajeNotificacion");
const SinNotificaciones = document.querySelector(".SinNotificaciones");
const ConNotificaciones = document.querySelector(".ConNotificaciones");

function Notificaciones(){
    ObtenerFechaDeHoy();
}
function ObtenerFechaDeHoy(){
    var FechaDeHoy = new Date();
    var dia = FechaDeHoy.getDate();
    var mes = FechaDeHoy.getMonth() + 1; //January is 0!
    var anio = FechaDeHoy.getFullYear();
    if (dia < 10) {
    dia = '0' + dia;
    }
    if (mes < 10) {
    mes = '0' + mes;
    }
    FechaDeHoy = anio + '-' + mes + '-' + dia;
    ObtenerCitasDeHoy(FechaDeHoy);
}
function ObtenerCitasDeHoy(FechaDeHoy){
    $.ajax({
        data: { FechaDeHoy },
        url: '../ArchivosPHP/CitasParaHoy.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'json',
        type: 'POST'
    }).done(function(CitasPH){
        let CantidadDeCitasPH = CitasPH.length;
        if(CantidadDeCitasPH === 0){
            MostrarMensajeNotificacion();
            DiaRelajado();
        }else if (CantidadDeCitasPH > 0 && CantidadDeCitasPH <= 3){
            MostrarMensajeNotificacion();
            DiaRegular(CantidadDeCitasPH);
        }else if (CantidadDeCitasPH > 3){
            MostrarMensajeNotificacion();
            DiaComplicado(CantidadDeCitasPH);
        }
    }).fail(function(){
        console.log("Error en ajax CITAS PARA HOY");
    });
}
function MostrarMensajeNotificacion(){
    MensajeNotificacion.classList.add("Mostrar");
}
function DiaRelajado(){
    SinNotificaciones.style.display = "block";
    ConNotificaciones.style.display = "none";
    CuadroMensajeNotificacion.innerHTML = `
    <ion-icon name="close-outline" class="MensajeNotificacionCerrar" onclick="BtnMensajeNotificacionCerrar()"></ion-icon>
    <ion-icon name="sparkles-outline" class="MensajeIconoNotificacion"></ion-icon>
    <p class="TituloNotificacion">un día relajado</p>
    <p class="MensajeInstruccionesNotificacion">Para el día de hoy no tienes citas pendientes, <b style="color: #E7625F;">DISFRUTA TU DÍA.</b></p>
    `;
}

function DiaRegular(CantidadDeCitasPH){
    ConNotificaciones.style.display = "block";
    SinNotificaciones.style.display = "none";
    CuadroMensajeNotificacion.innerHTML = `
    <ion-icon name="close-outline" class="MensajeNotificacionCerrar" onclick="BtnMensajeNotificacionCerrar()"></ion-icon>
    <ion-icon name="people-circle-outline" class="MensajeIconoNotificacion"></ion-icon>
    <p class="TituloNotificacion">un día ocupado</p>
    <p class="MensajeInstruccionesNotificacion">Para el día de hoy tienes <b style="color: #E7625F;">${CantidadDeCitasPH} CITAS PENDIENTES</b>. No te olvides de <b style="color: #E7625F;">CONCLUIR</b> tus citas del día de hoy.</p>
    `;
}

function DiaComplicado(CantidadDeCitasPH){
    ConNotificaciones.style.display = "block";
    SinNotificaciones.style.display = "none";
    CuadroMensajeNotificacion.innerHTML = `
    <ion-icon name="close-outline" class="MensajeNotificacionCerrar" onclick="BtnMensajeNotificacionCerrar()"></ion-icon>
    <ion-icon name="megaphone-outline" class="MensajeIconoNotificacion"></ion-icon>
    <p class="TituloNotificacion">un día complicado</p>
    <p class="MensajeInstruccionesNotificacion">Para el día de hoy tienes <b style="color: #E7625F;">${CantidadDeCitasPH} CITAS PENDIENTES</b>. No te olvides de <b style="color: #E7625F;">CONCLUIR</b> tus citas del día de hoy.</p>
    `;
}
function BtnMensajeNotificacionCerrar(){
    MensajeNotificacion.classList.remove("Mostrar");
}


