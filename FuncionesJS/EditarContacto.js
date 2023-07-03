//fORMULARIOS Y OTROS AQUI
let SeccionBuscarContacto = document.querySelector(".BuscarContacto");
let FormResultadoDeBusquedaContacto = document.querySelector(".Form-ResultadoDeBusquedaContacto");
let FormInformacionContacto = document.querySelector(".Form-InformacionContacto");
let MensajeContactoActualizado = document.querySelector(".MensajeContactoActualizado");

//INPUTS AQUI
let FormInputBuscarNombrePorContacto = document.querySelector(".Form-InputBuscarNombrePorContacto");
let FormImgContactoFotoMiniatura = document.querySelector(".Form-ImgContactoFotoMiniatura");
let FormContactoCambiarFoto = document.querySelector(".Form-ContactoCambiarFoto");
let EditarInputContactoNombre = document.getElementById("Editar-InputContactoNombre");
let EditarInputContactoTelefono = document.getElementById("Editar-InputContactoTelefono");
let EditarInputContactoOcupacion = document.getElementById("Editar-InputContactoOcupacion");
let EditarInputContactoMunicipio = document.getElementById("Editar-InputContactoMunicipio");
let EditarInputContactoColonia = document.getElementById("Editar-InputContactoColonia");
let EditarInputContactoCalle = document.getElementById("Editar-InputContactoCalle");
let EditarInputContactoFoto = document.getElementById("Editar-InputContactoFoto");
let FormNombreDelArhivoActual = document.getElementById("Form-NombreDelArhivoActual");

//BOTONES AQUI
let FormContactoEditar = document.querySelector(".Form-ContactoEditar");
let FormContactoEliminar = document.querySelector(".Form-ContactoEliminar");
let FormGuardarEdicionContacto = document.querySelector(".Form-GuardarEdicionContacto");

let NombreActualDelArchivo;
let AsignandoIDContactoAEditar;

FormInputBuscarNombrePorContacto.addEventListener("keyup", () => {
    BusquedaDeContactoAEditar();
})
FormInputBuscarNombrePorContacto.addEventListener("keypress", function(teclaeditar) {
    if (teclaeditar.keyCode == 13){
        teclaeditar.preventDefault();
    }
});
FormContactoCambiarFoto.addEventListener("click", () => {
    EditarInputContactoFoto.click();
})
// 1.- BUSCAMOS EL NOMBRE DEL CONTACTO
function BusquedaDeContactoAEditar(){
    let BusquedaPorNombreContacto = document.querySelector(".Form-InputBuscarNombrePorContacto").value.toUpperCase();
    $.ajax({
        data: { BusquedaPorNombreContacto },
        url: '../ArchivosPHP/BusquedaDeContactoAEditar.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'json',
        type: 'POST'
    }).done(function(ListaDeContactos){
        if(BusquedaPorNombreContacto != ''){
            MostrarListaDeContactosAEditar(ListaDeContactos);
        }else{
            OcultarListaDeContactosAEditar();
            DesactivarEliminarYEditar();
            AgregarBGDeInputTextAEditar();
            DesactivarInputTextEditar();
            ReiniciarSelectMunicipio();
            FormImgContactoFotoMiniatura.src = `../FotoContacto/Default.png`;
            FormInformacionContacto.reset();
        }
    }).fail(function(){
        console.log("Error en ajax Nombre Contacto Tiempo Real");
    });
}
// 1.1.- MOSTRAMOS LOS RESULTADOS DE LA BUSQUEDA EN TIEMPO REAL
function MostrarListaDeContactosAEditar(ListaDeContactos){
    FormResultadoDeBusquedaContacto.innerHTML = '';
    FormResultadoDeBusquedaContacto.classList.add("MostrarResultadosDeBusqueda");
        for(var i = 0; i < ListaDeContactos.length; i++){
            FormResultadoDeBusquedaContacto.innerHTML += `
                <p class="Form-ContactoResultadoBusqueda" id="${ListaDeContactos[i].idContacto}" onclick="ObtenerNombreParrafoEditarContacto(${[i]}, this.id)">${ListaDeContactos[i].NombreContacto}</p>
            `;  
            // "<p class='Form-ContactoResultadoBusqueda' id="+ListaDeContactos[i]['idContacto']+" onclick='ObtenerNombreParrafoEditarContacto("+[i]+", this.id)'>" + 
            // ListaDeContactos[i]['NombreContacto'] +
            // "</p>"
        }
}
// 1.2.- OBTENEMOS EL ID DEL CONTACTO Y ASIGNAMOS EL NOMBRE DEL CONTACTO
function ObtenerNombreParrafoEditarContacto(i, id){
    FormInputBuscarNombrePorContacto.value = document.querySelectorAll('.Form-ContactoResultadoBusqueda')[i].innerHTML;
    AsignandoIDContactoAEditar = document.getElementById('Form-idDelContactoAEditar').value = id;
    console.log(AsignandoIDContactoAEditar);
    OcultarListaDeContactosAEditar();
    ActivarEliminarYEditar();
    BuscarDatosDelContacto(AsignandoIDContactoAEditar);
    // ComprobarActivarBoton();
}
// 1.3.- (SELECCIONADO) ACTIVAMOS LOS BOTONES DE EDICION Y ELIMINACION
function ActivarEliminarYEditar(){
    FormContactoEditar.classList.add("ActivarEliminarYEditar");
    FormContactoEliminar.classList.add("ActivarEliminarYEditar");
}
// 1.4.- (SELECCIONADO/VACIO) OCULTAMOS EL CUADRO DE BUSQUEDA  
function OcultarListaDeContactosAEditar(){
    FormResultadoDeBusquedaContacto.classList.remove("MostrarResultadosDeBusqueda");
}
// 1.5.- (SELECCIONADO/VACIO) OCULTAMOS EL CUADRO DE BUSQUEDA  
function ReiniciarSelectMunicipio(){
    document.getElementById("Editar-InputContactoMunicipio").selectedIndex = 0;
}
// 1.6.- (NO SELECCIONADO/VACIO) OCULTAMOS EL CUADRO DE BUSQUEDA  
function DesactivarEliminarYEditar(){
    FormContactoEditar.classList.remove("ActivarEliminarYEditar");
    FormContactoEliminar.classList.remove("ActivarEliminarYEditar");
}
//2.- BUSCAR DATOS DEL CONTACTO
function BuscarDatosDelContacto(AsignandoIDContactoAEditar){
    $.ajax({
        data: { AsignandoIDContactoAEditar },
        url: '../ArchivosPHP/ObtenerDatosCE.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'json',
        type: 'POST'
    }).done(function(DatosDelContacto){
        MostrarDatosDelContactoEnInputs(DatosDelContacto);
    }).fail(function(){
        console.log("Error en ajax BUSCAR Datos Del Contacto");
    });
}
//3.- MOSTRAMOS LOS DATOS DEL CONTACTO EN LOS INPUTS TEXT
function MostrarDatosDelContactoEnInputs(DatosDelContacto){
    FormImgContactoFotoMiniatura.src = `../FotoContacto/${DatosDelContacto[0].FotoContacto}`;
    EditarInputContactoNombre.value = DatosDelContacto[0]['NombreContacto'];
    EditarInputContactoTelefono.value = DatosDelContacto[0]['TelefonoContacto'];
    EditarInputContactoOcupacion.value = DatosDelContacto[0]['OcupacionContacto'];
    ObtenerMuncipiosYColoniasEnSelect(DatosDelContacto);
    EditarInputContactoCalle.value = DatosDelContacto[0]['CalleContacto'];
    NombreActualDelArchivo = FormNombreDelArhivoActual.value = DatosDelContacto[0]['FotoContacto'];
}
//3.1.- OBTENEMOS LOS MUNICIPIOS Y COLONIAS EN INPUT SELECT
function ObtenerMuncipiosYColoniasEnSelect(DatosDelContacto){
    EditarInputContactoMunicipio.innerHTML += `
        <option disabled selected>${DatosDelContacto[0].MunicipioContacto}</option>
    `;
    ObtenerIdDelMunicipio(DatosDelContacto);
}
//3.2.- OBTENEMOS EL ID DEL MUNICIPIO
function ObtenerIdDelMunicipio(DatosDelContacto){
    NombreDelMunicipioSeleccionado = document.getElementById("Editar-InputContactoMunicipio").value;
    $.ajax({
        data: {NombreDelMunicipioSeleccionado},
        url: '../ArchivosPHP/ObtenerIDMunicipio.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'html',
        type: 'POST'
    }).done(function(RespId){
        EditarInputContactoMunicipio.remove(EditarInputContactoMunicipio.selectedIndex);
        document.querySelector(".Form-InputContactoMunicipio").selectedIndex = RespId;
        ObtenerColoniasAEditar(DatosDelContacto);
    }).fail(function(){
        console.log("Error en ajax Mostras Datos Del Contacto");
    });
}
//4.- ACTIVAR INPUTS AL PRESIONAR BOTON EDITAR
FormContactoEditar.addEventListener("click", ()=> {
    ActivarInputTextEditar();
    RemoverBGDeInputTextAEditar();
    ActivarBotonGuardarEdicion();
})
//4.1.- ACTIVAMOS LOS INPUT TEXT A EDITAR
function ActivarInputTextEditar(){
    EditarInputContactoNombre.disabled = false;
    EditarInputContactoTelefono.disabled = false;
    EditarInputContactoOcupacion.disabled = false;
    EditarInputContactoMunicipio.disabled = false;
    EditarInputContactoColonia.disabled = false;
    EditarInputContactoCalle.disabled = false;
    EditarInputContactoFoto.disabled = false;
}
//4.1.- DESACTIVAMOS LOS INPUT TEXT A EDITAR
function DesactivarInputTextEditar(){
    EditarInputContactoNombre.disabled = true;
    EditarInputContactoTelefono.disabled = true;
    EditarInputContactoOcupacion.disabled = true;
    EditarInputContactoMunicipio.disabled = true;
    EditarInputContactoColonia.disabled = true;
    EditarInputContactoCalle.disabled = true;
    EditarInputContactoFoto.disabled = true;
}
//4.3.- REMOVEMOS EL COLOR GRIS DE BG A LOS INPUT
function RemoverBGDeInputTextAEditar(){
    EditarInputContactoNombre.classList.add("ActivarInputsBuscarContacto");
    EditarInputContactoTelefono.classList.add("ActivarInputsBuscarContacto");
    EditarInputContactoOcupacion.classList.add("ActivarInputsBuscarContacto");
    EditarInputContactoMunicipio.classList.add("ActivarInputsBuscarContacto");
    EditarInputContactoColonia.classList.add("ActivarInputsBuscarContacto");
    EditarInputContactoCalle.classList.add("ActivarInputsBuscarContacto");
    EditarInputContactoFoto.classList.add("ActivarInputsBuscarContacto");
}
//4.4.- REMOVEMOS EL COLOR GRIS DE BG A LOS INPUT
function AgregarBGDeInputTextAEditar(){
    EditarInputContactoNombre.classList.remove("ActivarInputsBuscarContacto");
    EditarInputContactoTelefono.classList.remove("ActivarInputsBuscarContacto");
    EditarInputContactoOcupacion.classList.remove("ActivarInputsBuscarContacto");
    EditarInputContactoMunicipio.classList.remove("ActivarInputsBuscarContacto");
    EditarInputContactoColonia.classList.remove("ActivarInputsBuscarContacto");
    EditarInputContactoCalle.classList.remove("ActivarInputsBuscarContacto");
    EditarInputContactoFoto.classList.remove("ActivarInputsBuscarContacto");
}
//5.- COMPROBAR CONTENIDO DE LOS CAMPOS REQUERIDOS
EditarInputContactoNombre.addEventListener("keyup", ()=> {
    ComprobarContenidoDeInputs();
})
EditarInputContactoTelefono.addEventListener("keyup", ()=> {
    ComprobarContenidoDeInputs();
})
function ComprobarContenidoDeInputs(){
    let ValorActualDeContactoNombre = EditarInputContactoNombre.value.toUpperCase();
    let ValorActualDeContactoTelefono = EditarInputContactoTelefono.value;
    if (ValorActualDeContactoNombre == '' || ValorActualDeContactoTelefono == ''){
        DesactivarBotonGuardarEdicion();
    }else{
        ActivarBotonGuardarEdicion();
        //funcoines para guardar
    }
}
//5.- ACTIVAMOS EL BOTON PARA GUARDAR LA EDICION
function ActivarBotonGuardarEdicion(){
    FormGuardarEdicionContacto.classList.add("EdicionCompleta");
}
//5-1.- DESACTIVAMOS EL BOTON PARA GUARDAR LA EDICION
function DesactivarBotonGuardarEdicion(){
    FormGuardarEdicionContacto.classList.remove("EdicionCompleta");
}  
//6.- OBTENER DATOS DEL CONTACTO A EDITAR
FormInformacionContacto.addEventListener("submit", (e) => {

    e.preventDefault();

    let IdFinalDelContacto = document.getElementById('Form-idDelContactoAEditar').value;
    let FotoDePerfilExistente = document.getElementById("Editar-InputContactoFoto").files.length;

    if (NombreActualDelArchivo != "Default.png"){
        if(FotoDePerfilExistente > 0){
            NombreArchivoFinalDelContacto = document.getElementById("Editar-InputContactoFoto").files[0].name;
        }else{
            NombreArchivoFinalDelContacto = NombreActualDelArchivo;
        }
    }else if(NombreActualDelArchivo === "Default.png"){
        if(FotoDePerfilExistente > 0){
            NombreArchivoFinalDelContacto = document.getElementById("Editar-InputContactoFoto").files[0].name;
        }else{
            NombreArchivoFinalDelContacto = "Default.png";
        }
    }
    let NuevoNombreContacto = EditarInputContactoNombre.value.toUpperCase();
    let NuevoTelefonoContacto = EditarInputContactoTelefono.value;
    let NuevaOcupacionContacto = EditarInputContactoOcupacion.value.toUpperCase();
    let NuevoMunicipioContacto = EditarInputContactoMunicipio.value.toUpperCase();
    let NuevaColoniaContacto = EditarInputContactoColonia.value.toUpperCase();
    let NuevaCalleDeContacto = EditarInputContactoCalle.value.toUpperCase();

    $.ajax({
        data: { IdFinalDelContacto, NuevoNombreContacto, NuevoTelefonoContacto,
                NuevaOcupacionContacto, NuevoMunicipioContacto, NuevaColoniaContacto,
                NuevaCalleDeContacto, NombreArchivoFinalDelContacto},
        url: '../ArchivosPHP/ActualizarContacto.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'html',
        type: 'POST'
    }).done(function(respuestaac){
        if(respuestaac == "si"){
            MoverNuevaFotoDePerfil(FormInformacionContacto);
            SeccionBuscarContacto.classList.remove("Mostrar");
            FormInformacionContacto.reset();
            DesactivarInputTextEditar();
            AgregarBGDeInputTextAEditar();
            DesactivarBotonGuardarEdicion();
            DesactivarEliminarYEditar();
            MostrarMensajeContactoActualizado();
            ObtenerFechaCita();
        }else if(respuestaac == "repetido"){
            MostrarMensajeImagenDuplicada();
        }
    }).fail(function(){
        console.log("Error en ajax Actualizar Contacto");
    });
})
//6.1.- MOVEMOS LA IMAGEN A NUESTROS ARCHIVOS
function MoverNuevaFotoDePerfil(FormInformacionContacto){
    //peticion
    let peticion = new XMLHttpRequest();
    //enviar datos
    peticion.open('post', '../ArchivosPHP/SubirFoto.php');
    peticion.send(new FormData(FormInformacionContacto));
}
// 6.2.- MOSTRAR MENSAJE DE ACTUALIZACION EXITOSA
function MostrarMensajeContactoActualizado(){
    FormImgContactoFotoMiniatura.src = `../FotoContacto/Default.png`;
    FormContactoCambiarFoto.setAttribute("name","sync-outline");
    FormContactoCambiarFoto.style.background = "#41729F";
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
    MensajeContactoActualizado.classList.add("Mostrar");
    setTimeout(function(){
        MensajeContactoActualizado.classList.remove("Mostrar");
    },2000);
}

function VerificarCambioDeFoto(){
    let VerificarCambioDeFoto = document.getElementById("Editar-InputContactoFoto").files.length;
    
    if(VerificarCambioDeFoto > 0){
        FormContactoCambiarFoto.setAttribute("name","checkmark-done-outline");
        FormContactoCambiarFoto.style.background = "#81B622";
    }else{
        FormContactoCambiarFoto.setAttribute("name","sync-outline");
        FormContactoCambiarFoto.style.background = "#41729F";
    }
}