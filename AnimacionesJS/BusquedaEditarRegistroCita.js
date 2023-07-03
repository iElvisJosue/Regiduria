const FormInputBuscarNombrePorContacto = document.querySelector(".Form-InputBuscarNombrePorContacto").value;

function VerResultadosDeBusquedaEditarCita(){
    var VerRBEC = document.querySelector(".Form-EditarCitaInputNombre").value;
    var FormRBEC = document.querySelector(".Form-EditarCitaResultadoDeBusqueda");
    if (VerRBEC != ''){
        FormRBEC.classList.add('MostrarResultadosDeBusquedaEditarCita')
    }else{
        FormRBEC.classList.remove('MostrarResultadosDeBusquedaEditarCita')
    }
}