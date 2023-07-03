var FormRegistrarContacto = document.getElementById("Form-RegistrarContacto");
var BtnGuardarRegistroContacto = document.querySelector(".Form-GuardarRegistroContacto");

var MensajeContactoAgregado = document.querySelector(".MensajeContactoAgregado");
var MensajeImagenDuplicada = document.querySelector(".MensajeImagenDuplicada");

var FormInputMunicipio = document.querySelector(".Form-InputMunicipio");
var FormInputColonia = document.querySelector(".Form-InputColonia");

const MensajeContactoExistente = document.querySelector(".MensajeContactoExistente");
const MensajeContactoExistenteMensaje = document.querySelector(".MensajeContactoExistenteMensaje");
const MensajeContactoExistenteCancelar = document.querySelector(".MensajeContactoExistenteCancelar");
const MensajeContactoExistenteAceptar = document.querySelector(".MensajeContactoExistenteAceptar");

let NombreFotoContacto;
let ContactoNombre;

FormRegistrarContacto.addEventListener("keyup", () =>{

    var RegistrarContactoNombre = document.getElementById("RegistrarContacto_Nombre").value;
    var RegistrarContactoTelefono = document.getElementById("RegistrarContacto_Telefono").value;

    if (RegistrarContactoNombre != '' && RegistrarContactoTelefono != ''){
        BtnGuardarRegistroContacto.classList.add("Completos");
    }else{
        BtnGuardarRegistroContacto.classList.remove("Completos");
    }

});

FormRegistrarContacto.addEventListener("keypress", function(teclacontacto) {
    if (teclacontacto.keyCode == 13){
        teclacontacto.preventDefault();
    }
});

FormRegistrarContacto.addEventListener("submit", function(event){
    event.preventDefault();
    var NombreDelArchivo = document.getElementById("FotoContacto").files.length;
    if (NombreDelArchivo == 1){
        NombreFotoContacto = document.getElementById('FotoContacto').files[0].name; //Guardamos el nombre del archivo en una variable
        VerificarContactoExistente(); //Pasamos el nombre de ese archivo
    }else{
        NombreFotoContacto = "Default.png";
        VerificarContactoExistente();
    }
});
function VerificarContactoExistente(){
    ContactoNombre = document.getElementById("RegistrarContacto_Nombre").value.toUpperCase();
    $.ajax({
        data: { ContactoNombre },
        url: '../ArchivosPHP/VerificarExistenciaDeContacto.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'html',
        type: 'POST'
    }).done(function(respuesta){
        if (respuesta == "Existente"){
            MostrarMensajeContactoYaRegistrado();
        }else if(respuesta == "Inexistente"){
            ValidarRegistroDeContacto();
        }
    }).fail(function(){
        console.log("Error en ajax VerificarContactoExistente");
    });
}
function MostrarMensajeContactoYaRegistrado(){
    MensajeContactoExistenteMensaje.innerHTML = `El contacto <b style="color: #E7625F;"> ${ContactoNombre}</b> ya ha sido registrado, ¿Desea registrarlo de todas formas?`;
    MensajeContactoExistente.classList.add("Mostrar");
}
MensajeContactoExistenteCancelar.addEventListener("click", () => {
    MensajeContactoExistente.classList.remove("Mostrar");
})
MensajeContactoExistenteAceptar.addEventListener("click", () => {
    MensajeContactoExistente.classList.remove("Mostrar");
    ValidarRegistroDeContacto();
})

function ValidarRegistroDeContacto(){
    var ContactoTelefono = document.getElementById("RegistrarContacto_Telefono").value.toUpperCase();
    var ContactoOcupacion = document.getElementById("RegistrarContacto_Ocupacion").value.toUpperCase();
    var ContactoMunicipio = document.getElementById("RegistrarContacto_Municipio").value.toUpperCase();
    var ContactoColonia = document.getElementById("RegistrarContacto_Colonia").value.toUpperCase();
    var ContactoCalle = document.getElementById("RegistrarContacto_Calle").value.toUpperCase();
    var ContactoActivo = "si"

    $.ajax({
        data: { ContactoNombre, ContactoTelefono, ContactoOcupacion,
                ContactoMunicipio, ContactoColonia, ContactoCalle,
                NombreFotoContacto, ContactoActivo },
        url: '../ArchivosPHP/RegistrarContacto.php', //PUEDE CSER 'ArchivosPHP/RegistrarContacto.php'
        dataType: 'html',
        type: 'POST'
    }).done(function(respuesta){
        if(respuesta == "si"){
            MoverImagenCarpeta(FormRegistrarContacto);
            MostrarMensajeAgregadoCorrectamente();
        }else if(respuesta == "repetido"){
            MostrarMensajeImagenDuplicada();
        }
    }).fail(function(){
        console.log("Error en ajax Registrar Contacto");
    });

}
function MoverImagenCarpeta(FormRegistrarContacto){
    //peticion
    let peticion = new XMLHttpRequest();
    //enviar datos
    peticion.open('post', '../ArchivosPHP/SubirFoto.php');
    peticion.send(new FormData(FormRegistrarContacto));
}
function ObtenerMunicipios(){

    $.ajax({
        url: '../ArchivosPHP/ObtenerMunicipios.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormInputMunicipio.innerHTML += `
                <option>${respuesta[i].NombreMunicipio}</option>
            `;
            // FormInputMunicipio.innerHTML += "<option>" +
            // respuesta[i]['NombreMunicipio'] +
            // "</option>"
        }
    }).fail(function(){
        console.log("Error en ajax Obtener Municipios");
    });
}   

function ObtenerColonias(){

    var length = FormInputColonia.options.length;
    for (i = length-1; i >= 0; i--) {
        FormInputColonia.options[i] = null;
    }

    var idMunicipio = document.querySelector(".Form-InputMunicipio").selectedIndex;

    $.ajax({
        data: { idMunicipio },
        url: '../ArchivosPHP/ObtenerColonias.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormInputColonia.innerHTML += `
                <option>${respuesta[i].NombreColonia}</option>
            `;
            // FormInputColonia.innerHTML += "<option>" +
            // respuesta[i]['NombreColonia'] +
            // "</option>"
        }
    }).fail(function(){
        console.log("Error en ajax Obtener Colonias");
    });
    
}   

function MostrarMensajeAgregadoCorrectamente(){
    var ModalRegistrarContacto = document.querySelector('.RegistrarContacto');
    BtnGuardarRegistroContacto.classList.remove("Completos");
    ModalRegistrarContacto.classList.remove("Mostrar");
    MensajeContactoAgregado.classList.add("Mostrar");
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
    FormRegistrarContacto.reset();
    ObtenerColonias();

    setTimeout(function(){
        MensajeContactoAgregado.classList.remove("Mostrar");
    },2000);

}

function MostrarMensajeImagenDuplicada(){
    MensajeImagenDuplicada.classList.add("Mostrar");
    setTimeout(function(){
        MensajeImagenDuplicada.classList.remove("Mostrar");
    },5000);
}