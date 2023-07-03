const RegistrarCita = document.querySelector('.RegistrarCita');
const CerrarRegistrarCita = document.querySelector('.Form-IconoCitaCerrar');


const FormBotonAbrirContacto = document.querySelector('.Form-BotonAbrirContacto');

const FormCitaInputMunicipioCargar = document.querySelector(".Form-CitaInputMunicipio");
const FormCitaInputColoniaCargar = document.querySelector(".Form-CitaInputColonia");

BtnNuevaCita.addEventListener('click', () => {
    RegistrarCita.classList.add('Mostrar');
    ObteniendoPrincipal.classList.add('OcultarPrincipal');
})
CerrarRegistrarCita.addEventListener('click', () => {
    RegistrarCita.classList.remove('Mostrar');
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
})


// FUNCION PARA EL BOTON DE AGREGAR CONTACTO NUEVO EN CITA
FormBotonAbrirContacto.addEventListener('click', () => {
    RegistrarCita.classList.remove('Mostrar');
    RegistrarContacto.classList.add('Mostrar');
})

// 3.1.- (SELECCIONADO) OBTENEMOS LOS MUNICIPIOS 
function CitaObtenerMunicipios(){
    $.ajax({
        url: '../ArchivosPHP/ObtenerMunicipios.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormCitaInputMunicipioCargar.innerHTML += "<option>" +
            respuesta[i]['NombreMunicipio'] +
            "</option>"
        }
    }).fail(function(){
        console.log("Error en ajax Obtener Municipios");
    });
}  
// 3.2.- (SELECCIONADO) OBTENEMOS LAS COLONIAS 
function CitaObtenerColonias(){
    var length = FormCitaInputColoniaCargar.options.length;
    for (i = length-1; i >= 0; i--) {
        FormCitaInputColoniaCargar.options[i] = null;
    }
    var idMunicipio = document.querySelector(".Form-CitaInputMunicipio").selectedIndex;
    $.ajax({
        data: { idMunicipio },
        url: '../ArchivosPHP/ObtenerColonias.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormCitaInputColoniaCargar.innerHTML += "<option>" +
            respuesta[i]['NombreColonia'] +
            "</option>"
        }
    }).fail(function(){
        console.log("Error en ajax Obtener Colonias");
    });
}