var FormRegistrarCita = document.getElementById("Form-RegistrarCita");
var FormInputBuscarContactoEnCita = document.querySelector(".Form-InputBuscarContactoEnCita");
var FormRegistrarCitaResultadoDeBusqueda = document.querySelector(".Form-RegistrarCitaResultadoDeBusqueda");
var MensajeMaximoArchivos = document.querySelector(".MensajeMaximoArchivos");
var MensajeCitaAgregada = document.querySelector(".MensajeCitaAgregada");
var MensajeArchivoExistente = document.querySelector(".MensajeArchivoExistente");

var FormGuardarRegistroCita = document.querySelector(".Form-GuardarRegistroCita");

var FormCitaInputFecha = document.querySelector(".Form-CitaInputFecha");
var FormCitaInputHora = document.querySelector(".Form-CitaInputHora");
var FormCitaInputMunicipio = document.querySelector(".Form-CitaInputMunicipio");
var FormCitaInputColonia = document.querySelector(".Form-CitaInputColonia");
var FormCitaInputCalle = document.querySelector(".Form-CitaInputCalle");
var FormCitaInputAsunto = document.querySelector(".Form-CitaInputAsunto");
var FormCitaInputComentarios = document.querySelector(".Form-CitaInputComentarios");
var FormCitaInputArchivo = document.querySelector(".Form-CitaInputArchivo");

FormInputBuscarContactoEnCita.addEventListener("keyup", () => {
    BuscarContactoEnTiempoReal();
});
FormRegistrarCita.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13){
        tecla.preventDefault();
    }
});

// 1.- REALIZAMOS UNA BUSQUEDA EN TIEMPO REAL
function BuscarContactoEnTiempoReal(){
    var NombreContactoTiempoReal = document.querySelector(".Form-InputBuscarContactoEnCita").value.toUpperCase();
    $.ajax({
        data: { NombreContactoTiempoReal },
        url: '../ArchivosPHP/BuscarContactoTiempoReal.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'json',
        type: 'POST'
    }).done(function(ListaDeNombres){
        if(NombreContactoTiempoReal != ''){
            MostrarResultadosDeBusqueda(ListaDeNombres);
        }else{
            OcultarResultadosDeBusqueda();
            DesactivarInputText();
            DesactivarBotonGuardar();
        }
    }).fail(function(){
        console.log("Error en ajax Nombre Contacto Tiempo Real");
    });
}
// 1.1.- MOSTRAMOS LOS RESULTADOS DE LA BUSQUEDA EN TIEMPO
function MostrarResultadosDeBusqueda(ListaDeNombres){
    FormRegistrarCitaResultadoDeBusqueda.innerHTML = '';
    FormRegistrarCitaResultadoDeBusqueda.classList.add("ResultadoBusquedaRegistrarCita");
        for(var i = 0; i < ListaDeNombres.length; i++){
            FormRegistrarCitaResultadoDeBusqueda.innerHTML += `
                <p class="Form-ResultadoBusquedaRegistrarCita" id="${ListaDeNombres[i].idContacto}" onclick="ObtenerNombreParrafo(${[i]}, this.id)">${ListaDeNombres[i].NombreContacto}</p>
            `;
            // "<p class='Form-ResultadoBusquedaRegistrarCita' id="+ListaDeNombres[i]['idContacto']+" onclick='ObtenerNombreParrafo("+[i]+", this.id)'>" + 
            // ListaDeNombres[i]['NombreContacto'] +
            // "</p>"
        }
}
// 1.2.- OBTENEMOS EL ID DEL CONTACTO Y EL NOMBRE DEL CONTACTO
function ObtenerNombreParrafo(i, id){
    FormInputBuscarContactoEnCita.value = document.querySelectorAll('.Form-ResultadoBusquedaRegistrarCita')[i].innerHTML;
    AsignandoIDContacto = document.getElementById('Form-idDelContacto').value = id;

    OcultarResultadosDeBusqueda();
    ActivarInputText();
    ComprobarActivarBoton();
}
// 1.3.- (SELECCIONADO) ACTIVAMOS LOS CUADROS DE TEXTO 
function ActivarInputText(){
    FormCitaInputFecha.disabled = false;
    FormCitaInputHora.disabled = false;
    FormCitaInputMunicipio.disabled = false;
    FormCitaInputColonia.disabled = false;
    FormCitaInputCalle.disabled = false;
    FormCitaInputAsunto.disabled = false;
    FormCitaInputComentarios.disabled = false;
    FormCitaInputArchivo.disabled = false;
    FormCitaInputFecha.classList.add("ActivarInputs");
    FormCitaInputHora.classList.add("ActivarInputs");
    FormCitaInputMunicipio.classList.add("ActivarInputs");
    FormCitaInputColonia.classList.add("ActivarInputs");
    FormCitaInputCalle.classList.add("ActivarInputs");
    FormCitaInputAsunto.classList.add("ActivarInputs");
    FormCitaInputComentarios.classList.add("ActivarInputs");
    FormCitaInputArchivo.classList.add("ActivarInputs");
}
// 1.4.- (SELECCIONADO) COMPROBAMOS CAMPOS REQUERIDOS
function ComprobarActivarBoton(){
    if(FormCitaInputFecha.value != '' && FormCitaInputHora.value != '' &&
        FormCitaInputMunicipio.value != '' && FormCitaInputColonia.value != '' &&
        FormCitaInputCalle.value != '' && FormCitaInputAsunto.value != '')
        {
        ActivarBotonGuardar();
    }else{
        DesactivarBotonGuardar();
    }
}
// 1.4.1.- (COMPROBADO) ACTIVAMOS BOTON DE GUARDAR
function ActivarBotonGuardar(){
    FormGuardarRegistroCita.classList.add("Completos");
}
// 1.4.2.- (NO COMPROBADO) DESACTIVAMOS BOTON DE GUARDAR
function DesactivarBotonGuardar(){
    FormGuardarRegistroCita.classList.remove("Completos");
}
// 1.4.3.- (NO SELECCIONADO/VACIO) OCULTAMOS EL CUADRO DE BUSQUEDA  
function OcultarResultadosDeBusqueda(){
    FormRegistrarCitaResultadoDeBusqueda.classList.remove("ResultadoBusquedaRegistrarCita");
}
// 1.4.4.- (NO SELECCIONADO/VACIO) DESACTIVAMOS LOS CUADROS DE TEXTO 
function DesactivarInputText(){
    FormCitaInputFecha.disabled = true;
    FormCitaInputHora.disabled = true;
    FormCitaInputMunicipio.disabled = true;
    FormCitaInputColonia.disabled = true;
    FormCitaInputCalle.disabled = true;
    FormCitaInputAsunto.disabled = true;
    FormCitaInputComentarios.disabled = true;
    FormCitaInputArchivo.disabled = true;
    FormCitaInputFecha.classList.remove("ActivarInputs");
    FormCitaInputHora.classList.remove("ActivarInputs");
    FormCitaInputMunicipio.classList.remove("ActivarInputs");
    FormCitaInputColonia.classList.remove("ActivarInputs");
    FormCitaInputCalle.classList.remove("ActivarInputs");
    FormCitaInputAsunto.classList.remove("ActivarInputs");
    FormCitaInputComentarios.classList.remove("ActivarInputs");
    FormCitaInputArchivo.classList.remove("ActivarInputs");
}
// 2.- (TODO CORRECTO) EMPEZAMOS LA VERIFICACION DE TODOS LOS DATOS
FormRegistrarCita.addEventListener("submit", function(event){
    
    event.preventDefault();
    var CitaCantidadDeArchivos = document.getElementById("ArchivosCita").files.length;
    ComprobarExistenciaContacto(CitaCantidadDeArchivos);

});
// function VerificarCampos(){
//     let ObtenemosElFormulario = document.querySelectorAll(".Form-Cita");
//     let Cantidad = ObtenemosElFormulario.length;
//     console.log("La cantidad es" + Cantidad);
// }
// 3.- COMPROBAMOS LA EXISTENCIA DEL CONTACTO
function ComprobarExistenciaContacto(CitaCantidadDeArchivos){
    var CitaNombreDelContacto = FormInputBuscarContactoEnCita.value.toUpperCase();

    $.ajax({
        data: { CitaNombreDelContacto },
        url: '../ArchivosPHP/ComprobarExistenciaContacto.php', 
        dataType: 'html',
        type: 'POST'
    }).done(function(respuesta){
        if(respuesta == "no existe"){
            MostrarMensajeContactoInexistente();
        }else{
            ComprobarCantidadDeArchivos(CitaCantidadDeArchivos);
        }
    }).fail(function(){
        console.log("Error en ajax Comprobar Existencia Contacto");
    });

}
// 3.1.- (CONTACTO INEXISTENTE) MOSTRAMOS MENSAJE CONTACTO INEXISTENTE
function MostrarMensajeContactoInexistente(){
    var ModalMensajeContactoInexistente = document.querySelector(".MensajeContactoInexistente");
    ModalMensajeContactoInexistente.classList.add("Mostrar");
        setTimeout(function(){
            ModalMensajeContactoInexistente.classList.remove("Mostrar");
        },5000);
}
// 4.- (CONTACTO EXISTENTE) COMPROBAMOS LA CANTIDAD DE ARCHIVOS
function ComprobarCantidadDeArchivos(CitaCantidadDeArchivos){
    if (CitaCantidadDeArchivos <= 5){
        // MoverArchivosCarpeta(this);
        ComprobarExistenciaDeArchivos(CitaCantidadDeArchivos);
    }
    else if (CitaCantidadDeArchivos > 5){
        MostrarMensajeMaximoDeArchivos();
    }
}

// 4.2.- (CANTIDAD >= 0) COMPROBAMOS LA EXISTENCIA DE ESE ARCHIVO
function ComprobarExistenciaDeArchivos(CitaCantidadDeArchivos){
    switch (CitaCantidadDeArchivos) {
    case 0:
        var NombreDelArchivoUno, NombreDelArchivoDos, NombreDelArchivoTres, NombreDelArchivoCuatro, NombreDelArchivoCinco;
        NombreDelArchivoUno = NombreDelArchivoDos = NombreDelArchivoTres = NombreDelArchivoCuatro = NombreDelArchivoCinco = '';
        break;
    case 1:
        var NombreDelArchivoUno = document.getElementById('ArchivosCita').files[0].name;
        var NombreDelArchivoDos, NombreDelArchivoTres, NombreDelArchivoCuatro, NombreDelArchivoCinco;
        NombreDelArchivoDos = NombreDelArchivoTres = NombreDelArchivoCuatro = NombreDelArchivoCinco = '';
        break;
    case 2:
        var NombreDelArchivoUno = document.getElementById('ArchivosCita').files[0].name;
        var NombreDelArchivoDos = document.getElementById('ArchivosCita').files[1].name;
        var NombreDelArchivoTres, NombreDelArchivoCuatro, NombreDelArchivoCinco;
        NombreDelArchivoTres = NombreDelArchivoCuatro = NombreDelArchivoCinco = '';
        break;
    case 3:
        var NombreDelArchivoUno = document.getElementById('ArchivosCita').files[0].name;
        var NombreDelArchivoDos = document.getElementById('ArchivosCita').files[1].name;
        var NombreDelArchivoTres = document.getElementById('ArchivosCita').files[2].name;
        var NombreDelArchivoCuatro, NombreDelArchivoCinco;
        NombreDelArchivoCuatro = NombreDelArchivoCinco = '';
        break;
    case 4:
        var NombreDelArchivoUno = document.getElementById('ArchivosCita').files[0].name;
        var NombreDelArchivoDos = document.getElementById('ArchivosCita').files[1].name;
        var NombreDelArchivoTres = document.getElementById('ArchivosCita').files[2].name;
        var NombreDelArchivoCuatro = document.getElementById('ArchivosCita').files[3].name;
        var NombreDelArchivoCinco = '';
        break;
    case 5:
        var NombreDelArchivoUno = document.getElementById('ArchivosCita').files[0].name;
        var NombreDelArchivoDos = document.getElementById('ArchivosCita').files[1].name;
        var NombreDelArchivoTres = document.getElementById('ArchivosCita').files[2].name;
        var NombreDelArchivoCuatro = document.getElementById('ArchivosCita').files[3].name;
        var NombreDelArchivoCinco = document.getElementById('ArchivosCita').files[4].name;
        break;
    }
    $.ajax({
        data: { NombreDelArchivoUno, NombreDelArchivoDos, 
                NombreDelArchivoTres, NombreDelArchivoCuatro, 
                NombreDelArchivoCinco},
        url: '../ArchivosPHP/ComprobarExistenciaDeArchivos.php', 
        dataType: 'html',
        type: 'POST'
    }).done(function(respuesta){
        if(respuesta != "no"){
            MostrarMensajeArchivoDuplicado(respuesta);
        }else{
            MoverArchivosCarpeta(FormRegistrarCita);
            ValidarRegistrarCita(NombreDelArchivoUno, NombreDelArchivoDos, 
                NombreDelArchivoTres, NombreDelArchivoCuatro, NombreDelArchivoCinco);
        }
    }).fail(function(){
        console.log("Error en ajax Comprobar Existencia Contacto");
    });
}
// 4.2.1.-(ARCHIVO DUPLICADO) COMPROBAMOS LA EXISTENCIA DE ESE ARCHIVO
function MostrarMensajeArchivoDuplicado(respuesta){
    var NombreDelArchivoParrafo = document.querySelector(".MensajeInstruccionesArchivoExistente");
    NombreDelArchivoParrafo.innerHTML = `El archivo <b style="color: #E7625F;">${respuesta}</b> esta duplicado, intenta nuevamente cambiando el nombre.`;
    MensajeArchivoExistente.classList.add("Mostrar");
    setTimeout(function(){
        MensajeArchivoExistente.classList.remove("Mostrar");
    },5000);
}

// 4.3.-(CANTIDAD > 5) COMPROBAMOS LA EXISTENCIA DE ESE ARCHIVO
function MostrarMensajeMaximoDeArchivos(){
    MensajeMaximoArchivos.classList.add("Mostrar");
        setTimeout(function(){
            MensajeMaximoArchivos.classList.remove("Mostrar");
        },5000);
}

// 5.- INSERTAMOS LOS DATOS
function ValidarRegistrarCita(NombreDelArchivoUno, NombreDelArchivoDos, 
    NombreDelArchivoTres, NombreDelArchivoCuatro, NombreDelArchivoCinco){
    var CitaIdContacto = AsignandoIDContacto;
    var CitaFecha = FormCitaInputFecha.value.toUpperCase();
    var CitaHora = FormCitaInputHora.value.toUpperCase();
    var CitaMunicipio = FormCitaInputMunicipio.value.toUpperCase();
    var CitaColonia = FormCitaInputColonia.value.toUpperCase();
    var CitaCalle = FormCitaInputCalle.value.toUpperCase();
    var CitaAsunto = FormCitaInputAsunto.value.toUpperCase();
    var CitaComentarios = FormCitaInputComentarios.value.toUpperCase();

    $.ajax({
        data: { CitaFecha, CitaHora, CitaMunicipio, CitaColonia, CitaCalle, 
                CitaAsunto, CitaComentarios, today, hora, CitaIdContacto,
                NombreDelArchivoUno, NombreDelArchivoDos, NombreDelArchivoTres,
                NombreDelArchivoCuatro, NombreDelArchivoCinco},
        url: '../ArchivosPHP/RegistrarCita.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'html',
        type: 'POST'
    }).done(function(ResultadoCita){
        if (ResultadoCita == "CYAR" || ResultadoCita == "CR"){
            MostrarMensajeCitaAgregada();
        }
    }).fail(function(){
        console.log("Error en ajax Nombre Contacto Tiempo Real");
    });
    
}
// 5.1.- MOSTRAMOS MENSAJE DE CITA AGREGADA CORRECTAMENTE
function MostrarMensajeCitaAgregada(){
    var ModalRegistrarCita = document.querySelector('.RegistrarCita');
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
    ModalRegistrarCita.classList.remove("Mostrar");
    MensajeCitaAgregada.classList.add("Mostrar");
    ObtenerFechaCita();
    DesactivarBotonGuardar();
    DesactivarInputText();
    OcultarResultadosDeBusqueda();
    FormRegistrarCita.reset();

    setTimeout(function(){
        MensajeCitaAgregada.classList.remove("Mostrar");
    },2000);  
}
// 5.2.- CERRAMOS Y RESETEAMAMOS EL FORMULARIO
function MoverArchivosCarpeta(FormRegistrarCita){
    //peticion
    let peticion = new XMLHttpRequest();
    //enviar datos
    peticion.open('post', '../ArchivosPHP/SubirArchivos.php');
    peticion.send(new FormData(FormRegistrarCita));
}

//OBTENEMOS LA FECHA ACTUAL
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '0' + mm;
}
today = yyyy + '-' + mm + '-' + dd;

//OBTENEMOS LA HORA ACTUAL
var hora = new Date();
var hr = hora.getHours();
var min = hora.getMinutes();
if (hr < 10) {
hr = '0' + hr;
}
if (min < 10) {
min = '0' + min;
}
hora = hr + ':' + min;
// AGREGAR CUANDO LA CITA HAYA SIDO EXITOSA
