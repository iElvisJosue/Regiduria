const BtnFiltroPorContacto = document.querySelector('.FiltroPorContacto');

////// SECCION DE BUSCAR USUARIOS   ///////
const BuscarContactoPorNombre = document.querySelector('.BuscarContacto');
const CerrarContactoPorNombre = document.querySelector('.Form-IconoCerrarBuscarContacto');

////OBETENEMOS NUESTROS INPUT SELECT
const FormInputContactoMunicipio = document.querySelector(".Form-InputContactoMunicipio");
const FormInputContactoColonia = document.querySelector(".Form-InputContactoColonia");

////// FUCIONES PARA MOSTRAR Y CERRAR LA BUSQUEDA POR CONTACTO  ///////
BtnFiltroPorContacto.addEventListener('click', () => {
    BuscarContactoPorNombre.classList.add('Mostrar');
    ObteniendoPrincipal.classList.add('OcultarPrincipal');
})

CerrarContactoPorNombre.addEventListener('click', () => {
    BuscarContactoPorNombre.classList.remove('Mostrar');
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
})

function ObtenerMunicipiosAEditar(){

    $.ajax({
        url: '../ArchivosPHP/ObtenerMunicipios.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormInputContactoMunicipio.innerHTML += "<option>" +
            respuesta[i]['NombreMunicipio'] +
            "</option>"
        }
    }).fail(function(){
        console.log("Error en ajax Obtener Municipios");
    });
}   
function ObtenerColoniasAEditar(DatosDelContacto){
    var length = FormInputContactoColonia.options.length;
    for (i = length-1; i >= 0; i--) {
        FormInputContactoColonia.options[i] = null;
    }
    var idMunicipio = document.querySelector(".Form-InputContactoMunicipio").selectedIndex;
    $.ajax({
        data: { idMunicipio },
        url: '../ArchivosPHP/ObtenerColonias.php', 
        dataType: 'json',
        type: 'POST'
    }).done(function(respuesta){
        for(var i = 0; i < respuesta.length; i++){
            FormInputContactoColonia.innerHTML += "<option>" +
            respuesta[i]['NombreColonia'] +
            "</option>"
        }
        EditarInputContactoColonia.innerHTML += '<option hidden selected>'+
        DatosDelContacto[0]['ColoniaContacto']+
        '</option>';
    }).fail(function(){
        console.log("Error en ajax Obtener Colonias");
    });
} 