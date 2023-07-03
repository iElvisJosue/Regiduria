let BotonInformacionEditarCita = document.querySelector(".Informacion-Editar");
let FormEditarCita = document.querySelector(".Form-EditarCita");
let SeccionEditarCita = document.querySelector(".EditarCita");
let SeccionVerInformacion = document.querySelector(".VerInformacion");
let BtnFormEditarCitaCerrar = document.querySelector(".Form-EditarCitaCerrar");

//OBTENEMOS LOS CAMPOS A EDITAR
let FormEditarCitaInputNombre = document.querySelector(".Form-EditarCitaInputNombre");
let FormEditarCitaInputFecha = document.querySelector(".Form-EditarCitaInputFecha");
let FormEditarCitaInputHora = document.querySelector(".Form-EditarCitaInputHora");
let FormEditarCitaInputMunicipio = document.querySelector(".Form-EditarCitaInputMunicipio");
let FormEditarCitaInputColonia = document.querySelector(".Form-EditarCitaInputColonia");
let FormEditarCitaInputCalle = document.querySelector(".Form-EditarCitaInputCalle");
let FormEditarCitaInputAsunto = document.querySelector(".Form-EditarCitaInputAsunto");
let FormEditarCitaInputComentarios = document.querySelector(".Form-EditarCitaInputComentarios");

//DOCUMENTOS
let EditarCitaDocumentos = document.querySelector(".EditarCita-Documentos");
let EditarCitaListaDocumentos = document.querySelector(".EditarCita-ListaDocumentos");
let FormEditarCitaArchivos = document.querySelector(".Form-EditarCitaArchivos");

//EXTRAS
let FormEditarCitaResultadoDeBusqueda = document.querySelector(".Form-EditarCitaResultadoDeBusqueda");
let FormEditarCitarGuardar = document.querySelector(".Form-EditarCitarGuardar");
let MensajeArchivoNuevoExistente = document.querySelector(".MensajeArchivoExistente");
let MensajeCitaActualizada = document.querySelector(".MensajeCitaActualizada");

let AsignandoIDCitaContactoAEditar;
let IdDeCitaEditar;

BotonInformacionEditarCita.addEventListener("click", ()=> {
    IdDeCitaEditar = idDeLaCitaSeleccionada;
    $.ajax({
        data: { IdDeCitaEditar },
        url: '../ArchivosPHP/ObtenerDatosDeCita.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'json',
        type: 'POST'
    }).done(function(DatosDeLaCita){
        AsignandoIDCitaContactoAEditar = document.getElementById('Form-idDelContactoCitaAEditar').value = DatosDeLaCita[0]['Contacto_idContacto'];
        setTimeout(function(){
            MostrarDatosDeLaCitaEnInputs(DatosDeLaCita);
            ObtenerArchivosDeEditarCita(IdDeCitaEditar);
        },2500);
    }).fail(function(){
        console.log("Error en ajax BUSCAR DATOS DE LA CITA");
    });
})
function MostrarDatosDeLaCitaEnInputs(DatosDeLaCita){
    FormEditarCitaInputNombre.value = DatosDeLaCita[0]['NombreContacto'];
    FormEditarCitaInputFecha.value = DatosDeLaCita[0]['FechaCita'];
    FormEditarCitaInputHora.value = DatosDeLaCita[0]['HoraCita'];
    ObtenerMuncipiosYColoniasEnSelectEditarCita(DatosDeLaCita);
    FormEditarCitaInputCalle.value = DatosDeLaCita[0]['CalleCita'];
    FormEditarCitaInputAsunto.value = DatosDeLaCita[0]['AsuntoCita'];
    FormEditarCitaInputComentarios.value = DatosDeLaCita[0]['ComentariosCita'];
}
function ObtenerMuncipiosYColoniasEnSelectEditarCita(DatosDeLaCita){
    FormEditarCitaInputMunicipio.innerHTML += `
        <option disabled selected>${DatosDeLaCita[0].MunicipioCita}</option>
    `;
    ObtenerIdDelMunicipioCita(DatosDeLaCita);
}
function ObtenerIdDelMunicipioCita(DatosDeLaCita){
    NombreDelMunicipioCitaSeleccionado = FormEditarCitaInputMunicipio.value;
    $.ajax({
        data: {NombreDelMunicipioCitaSeleccionado},
        url: '../ArchivosPHP/ObtenerIDMunicipioCita.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'html',
        type: 'POST'
    }).done(function(IdMun){
        FormEditarCitaInputMunicipio.remove(FormEditarCitaInputMunicipio.selectedIndex);
        FormEditarCitaInputMunicipio.selectedIndex = IdMun;
        ObtenerColoniasCitaAEditar(DatosDeLaCita);
    }).fail(function(){
        console.log("Error en ajax MUNICIPIO CITA");
    });
}
function ObtenerMunicipiosCitaAEditar(){
    $.ajax({
        url: '../ArchivosPHP/ObtenerMunicipios.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormEditarCitaInputMunicipio.innerHTML += "<option>" +
            respuesta[i]['NombreMunicipio'] +
            "</option>"
        }
    }).fail(function(){
        console.log("Error en ajax Obtener Municipios");
    });
}   
function ObtenerColoniasCitaAEditar(DatosDeLaCita){
    var tamano = FormEditarCitaInputColonia.options.length;
    for (i = tamano-1; i >= 0; i--) {
        FormEditarCitaInputColonia.options[i] = null;
    }
    var idMunicipio = FormEditarCitaInputMunicipio.selectedIndex;
    $.ajax({
        data: { idMunicipio },
        url: '../ArchivosPHP/ObtenerColonias.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormEditarCitaInputColonia.innerHTML += "<option>" +
            respuesta[i]['NombreColonia'] +
            "</option>"
        }
        FormEditarCitaInputColonia.innerHTML += '<option hidden selected>'+
        DatosDeLaCita[0]['ColoniaCita']+
        '</option>';
    }).fail(function(){
        console.log("Error en ajax Obtener Colonias");
    });
} 
FormEditarCitaInputNombre.addEventListener("keyup", () => {
    BusquedaDeContactoEnCitaEditar();
})
FormEditarCita.addEventListener("keypress", function(teclaeditar) {
    if (teclaeditar.keyCode == 13){
        teclaeditar.preventDefault();
    }
});
FormEditarCita.addEventListener("keyup", function() {
    VerificarCamposDeCitaEditar();
});
function BusquedaDeContactoEnCitaEditar(){
    let BusquedaPorNombreContactoCita = FormEditarCitaInputNombre.value.toUpperCase();
    $.ajax({
        data: { BusquedaPorNombreContactoCita },
        url: '../ArchivosPHP/BusquedaDeCitaContactoAEditar.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'json',
        type: 'POST'
    }).done(function(ListaDeContactosCita){
        if(BusquedaPorNombreContactoCita != ''){
            MostrarListaEditarContactosCita(ListaDeContactosCita);
        }else{
            OcultarListaCitaContactosAEditar();
        }
    }).fail(function(){
        console.log("Error en ajax Nombre Contacto Tiempo Real");
    });
}
function MostrarListaEditarContactosCita(ListaDeContactosCita){
    FormEditarCitaResultadoDeBusqueda.innerHTML = '';
    FormEditarCitaResultadoDeBusqueda.classList.add("MostrarResultadosDeBusquedaEditarCita");
        for(var i = 0; i < ListaDeContactosCita.length; i++){
            FormEditarCitaResultadoDeBusqueda.innerHTML += `
                <p class="Form-ContactoResultadoBusquedaEditarCita" id="${ListaDeContactosCita[i].idContacto}" onclick="ObtenerParrafoEditarNombreContactoCita(${[i]}, this.id)">${ListaDeContactosCita[i].NombreContacto}</p>
            `;  
        }
}
function ObtenerParrafoEditarNombreContactoCita(i, id){
    FormEditarCitaInputNombre.value = document.querySelectorAll('.Form-ContactoResultadoBusquedaEditarCita')[i].innerHTML;
    AsignandoIDCitaContactoAEditar = document.getElementById('Form-idDelContactoCitaAEditar').value = id;
    OcultarListaCitaContactosAEditar();
}
function OcultarListaCitaContactosAEditar(){
    FormEditarCitaResultadoDeBusqueda.classList.remove("MostrarResultadosDeBusquedaEditarCita");
}
function ObtenerArchivosDeEditarCita(IdDeCitaEditar){
    $.ajax({
        data: { IdDeCitaEditar },
        url: '../ArchivosPHP/ObtenerArchivosEditarCita.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(LDAAEditar){
        MostrarTodosLosArchivosDeLaCita(LDAAEditar);
    }).fail(function(){
        console.log("Error en ajax Obtener Archivos De EditarCita");
    });
}

function MostrarTodosLosArchivosDeLaCita(LDAAEditar){
    EditarCitaListaDocumentos.innerHTML = '';
        let CantidadDeArchivosAE = LDAAEditar.length;
        if (CantidadDeArchivosAE === 0){
            EditarCitaDocumentos.innerHTML = `sin documentos`;
        }else if(CantidadDeArchivosAE > 0 && CantidadDeArchivosAE < 5){
            EditarCitaDocumentos.innerHTML = `Documentos actuales (${CantidadDeArchivosAE})`;
            for(LDAAE = 0; LDAAE < CantidadDeArchivosAE; LDAAE++){
                EditarCitaListaDocumentos.innerHTML += `
                <div class="EditarCita-Archivos">
                    <span class="EditarCita-IconoDocumento"><ion-icon name="document-outline"></ion-icon></span>
                    <div class="EditarCita-NombreDelDocumento">${LDAAEditar[LDAAE].NombreArchivo}</div>
                    <a class="EditarCita-IconoEliminar">
                        <ion-icon name="remove-circle-outline" id="${LDAAEditar[LDAAE].NombreArchivo}" onclick="EditarEliminarArchivo(this.id)"></ion-icon>
                    </a>
                </div>
                `;
            }
            FormEditarCitaArchivos.classList.remove("OcultarInputFile");
        }else if (CantidadDeArchivosAE > 0 && CantidadDeArchivosAE === 5){
            EditarCitaDocumentos.innerHTML = `Documentos actuales (${CantidadDeArchivosAE})`;
            for(LDAAE = 0; LDAAE < CantidadDeArchivosAE; LDAAE++){
                EditarCitaListaDocumentos.innerHTML += `
                <div class="EditarCita-Archivos">
                    <span class="EditarCita-IconoDocumento"><ion-icon name="document-outline"></ion-icon></span>
                    <div class="EditarCita-NombreDelDocumento">${LDAAEditar[LDAAE].NombreArchivo}</div>
                    <a class="EditarCita-IconoEliminar">
                        <ion-icon name="remove-circle-outline" id="${LDAAEditar[LDAAE].NombreArchivo}" onclick="EditarEliminarArchivo(this.id)"></ion-icon>
                    </a>
                </div>
                `;
            }
            FormEditarCitaArchivos.classList.add("OcultarInputFile");
        }
}
function EditarEliminarArchivo(id){
    let TrapNombreArchivo = id;
    $.ajax({
        data: { TrapNombreArchivo, IdDeCitaEditar },
        url: '../ArchivosPHP/EliminarArchivo.php', 
        dataType: 'html',
        type: 'POST'
    }).done(function(){
        ObtenerArchivosDeEditarCita(IdDeCitaEditar);
    }).fail(function(){
        console.log("Error en ajax ELIMINAR ARCHIVO");
    });
}

function VerificarCamposDeCitaEditar(){
    if(FormEditarCitaInputNombre.value != '' && FormEditarCitaInputFecha.value != '' &&
    FormEditarCitaInputHora.value != '' && FormEditarCitaInputMunicipio.value != '' &&
    FormEditarCitaInputColonia.value != '' && FormEditarCitaInputCalle.value != '' && FormEditarCitaInputAsunto.value != '')
    {
        ActivarBotonGuardarEdicionCita();
    }else{
        DesactivarBotonGuardarEdicionCita();
    }
}
function ActivarBotonGuardarEdicionCita(){
    FormEditarCitarGuardar.classList.remove("Completos")
}
function DesactivarBotonGuardarEdicionCita(){
    FormEditarCitarGuardar.classList.add("Completos")
}

FormEditarCita.addEventListener("submit", function(event){
    event.preventDefault();
    ComprobarContactoEnEditarCita();
});

function ComprobarContactoEnEditarCita(){
    var EditarCitaNombreDelContacto = FormEditarCitaInputNombre.value.toUpperCase();

    $.ajax({
        data: { EditarCitaNombreDelContacto },
        url: '../ArchivosPHP/ComprobarContactoEnEditarCita.php', 
        dataType: 'html',
        type: 'POST'
    }).done(function(respuesta){
        if(respuesta == "no existe"){
            MostrarMensajeEditarCitaContactoInexistente();
        }else{
            ObtenerNuevosDatosDeCita(EditarCitaNombreDelContacto);
        }
    }).fail(function(){
        console.log("Error en ajax Comprobar Existencia Contacto");
    });

}
function MostrarMensajeEditarCitaContactoInexistente(){
    var ModalMensajeContactoInexistenteEC = document.querySelector(".MensajeContactoInexistente");
    ModalMensajeContactoInexistenteEC.classList.add("Mostrar");
        setTimeout(function(){
            ModalMensajeContactoInexistenteEC.classList.remove("Mostrar");
        },5000);
}

function SubirArchivosNuevo(){
    var NombreDelNuevoArchivo = document.getElementById('EditarArchivosCita').files[0].name;
    ComprobarExistenciaArchivoNuevo(NombreDelNuevoArchivo)
}
function ComprobarExistenciaArchivoNuevo(NombreDelNuevoArchivo){
    if (NombreDelNuevoArchivo != ''){
        $.ajax({
            data: { NombreDelNuevoArchivo, IdDeCitaEditar},
            url: '../ArchivosPHP/ComprobarExistenciaNuevoArchivo.php', 
            dataType: 'html',
            type: 'POST'
        }).done(function(respuesta){
            if(respuesta != "Insertado"){
                MostrarArchivoNuevoDuplicado(respuesta);
            }else{
                MoverArchivosNuevosACarpeta(FormEditarCita);
                ObtenerArchivosDeEditarCita(IdDeCitaEditar);
            }
        }).fail(function(){
            console.log("Error en ajax Comprobar Existencia Contacto");
        });
    }
}

function MostrarArchivoNuevoDuplicado(respuesta){
    var ParrafoArchivoNuevoDuplicado = document.querySelector(".MensajeInstruccionesArchivoExistente");
    ParrafoArchivoNuevoDuplicado.innerHTML = `El archivo <b style="color: #E7625F;">${respuesta}</b> esta duplicado, intenta nuevamente cambiando el nombre.`;
    MensajeArchivoNuevoExistente.classList.add("Mostrar");
    setTimeout(function(){
        MensajeArchivoNuevoExistente.classList.remove("Mostrar");
    },5000);
}

function MoverArchivosNuevosACarpeta(FormEditarCita){
    let peticion = new XMLHttpRequest();
    peticion.open('post', '../ArchivosPHP/SubirUnArchivo.php');
    peticion.send(new FormData(FormEditarCita));
}

function ObtenerNuevosDatosDeCita(){
    let NuevaFechaCita = FormEditarCitaInputFecha.value;
    let NuevaHoraCita = FormEditarCitaInputHora.value;
    let NuevoMunicipioCita = FormEditarCitaInputMunicipio.value.toUpperCase();
    let NuevaColoniaCita = FormEditarCitaInputColonia.value.toUpperCase();
    let NuevaCalleCita = FormEditarCitaInputCalle.value.toUpperCase();
    let NuevoAsuntoCita = FormEditarCitaInputAsunto.value.toUpperCase();
    let NuevoComentarioCita = FormEditarCitaInputComentarios.value.toUpperCase();

    $.ajax({
        data: { IdDeCitaEditar, AsignandoIDCitaContactoAEditar, NuevaFechaCita, NuevaHoraCita, NuevoMunicipioCita,
            NuevaColoniaCita, NuevaCalleCita, NuevoAsuntoCita, NuevoComentarioCita},
        url: '../ArchivosPHP/ActualizarCita.php', 
        dataType: 'html',
        type: 'POST'
    }).done(function(){
        MostrarMensajeCitaActualizada();
    }).fail(function(){
        console.log("Error en ajax EDITAR CITA");
    });

}
function MostrarMensajeCitaActualizada(){
    ObtenerTodosLosDatosDeLaCitaSeleccionada();
    ObtenerFechaCita();
    MensajeCitaActualizada.classList.add("Mostrar");
    SeccionEditarCita.classList.remove("EditarCita-Mostrar");
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
    SeccionVerInformacion.classList.remove('PresioneEC');
    setTimeout(function(){
        MensajeCitaActualizada.classList.remove("Mostrar");
    },2000);
}

BtnFormEditarCitaCerrar.addEventListener("click", ()=> {
    ObtenerTodosLosDatosDeLaCitaSeleccionada();
})