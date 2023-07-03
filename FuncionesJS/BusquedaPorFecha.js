const BotonBuscarPorFecha = document.querySelector(".BotonBuscarPorFecha");
const BotonBorrarFecha = document.querySelector(".BotonBorrarFecha");
const AgregarEnSeccion2 = document.querySelector(".Seccion-2");

let idDeLaCitaSeleccionadaPorFecha;
let CitasPendientes;
let CitasConcluidas;

function BusquedaPorFechaEnCalendario(){
    let BusquedaPorFecha = document.getElementById("BusquedaPorFecha").value;
    if (BusquedaPorFecha != ''){
        BotonBorrarFecha.classList.add("MostrarBorrarFecha");
        ObtenerCitasConFechaSeleccionada(BusquedaPorFecha);
    }else{
        BotonBorrarFecha.classList.remove("MostrarBorrarFecha");
        ObtenerFechaCita();
    }
}
// BotonBuscarPorFecha.addEventListener("click", ()=> {
//     AgregarEnSeccion2.innerHTML = '';
//     let BusquedaPorFecha = document.getElementById("BusquedaPorFecha").value;
//     if (BusquedaPorFecha != ''){
//         BotonBorrarFecha.classList.add("MostrarBorrarFecha");
//         ObtenerCitasConFechaSeleccionada(BusquedaPorFecha);
//     }
// })
BotonBorrarFecha.addEventListener("click", ()=> {
    document.getElementById("BusquedaPorFecha").value = '';
    BotonBorrarFecha.classList.remove("MostrarBorrarFecha");
    ObtenerFechaCita();
})

function ObtenerCitasConFechaSeleccionada(BusquedaPorFecha){
    $.ajax({
        data: { BusquedaPorFecha },
        url: '../ArchivosPHP/CitasPorFechaEspecifica.php', 
        dataType: 'JSON',
        type: 'POST'
    }).done(function(CitasParaEF){ 
        let CantidadDeCitasPED = CitasParaEF.length;
        VerificarEstadoDeLaCita(CitasParaEF, CantidadDeCitasPED);
        if (CantidadDeCitasPED > 0){
            SiTienesCitasParaEseDia(BusquedaPorFecha, CitasParaEF, CantidadDeCitasPED);
        }else{
            NoTienesCitasParaEseDia(BusquedaPorFecha);
        }
    }).fail(function(){
        console.log("Error en ajax OBTENER CITA POR DIA ESPECIFICO");
    });
}
function VerificarEstadoDeLaCita(CitasParaEF, CantidadDeCitasPED){
    CitasPendientes = 0;
    CitasConcluidas = 0;
    for(VEDC = 0; VEDC < CantidadDeCitasPED; VEDC++){
        if(CitasParaEF[VEDC].ActivaCita === "SI"){
            CitasPendientes++;
        }else{
            CitasConcluidas++;
        }
    }
}
function SiTienesCitasParaEseDia(BusquedaPorFecha, CitasParaEF, CantidadDeCitasPED){
    AgregarEnSeccion2.innerHTML = '';
    AgregarEnSeccion2.innerHTML += `
    <div class="RegistrosPorFecha">
        <p class="Fecha">dia ${BusquedaPorFecha} | pendientes: ${CitasPendientes} | concluidas: ${CitasConcluidas}</p>
    </div>
    `;
    document.querySelector(".Fecha").style.background = "#41729F";
    document.querySelector(".Fecha").style.color = "#ffffff";

    let RegistrosPorFecha = document.querySelector('.RegistrosPorFecha');

    for(CRPDE = 0; CRPDE < CantidadDeCitasPED; CRPDE++){
        RegistrosPorFecha.innerHTML += `
            <div class="Registro">
                <div class="FotoDelUsuario">
                    <img src="../FotoContacto/${CitasParaEF[CRPDE].FotoContacto}" alt="FotoPerfil" class="FotoPerfil">
                </div>
                <div class="Informacion">
                    <p class="FechaHora"><ion-icon name="calendar-clear-outline"></ion-icon>${CitasParaEF[CRPDE].FechaCita} | <ion-icon name="time-outline"></ion-icon>${CitasParaEF[CRPDE].HoraCita}</p>
                    <p class="ColoniaMunicipio">${CitasParaEF[CRPDE].MunicipioCita}, ${CitasParaEF[CRPDE].ColoniaCita}</p>
                    <p class="Nombre">${CitasParaEF[CRPDE].NombreContacto}</p>
                    <p class="Asunto">${CitasParaEF[CRPDE].AsuntoCita}</p>
                </div>
                <div class="VerUsuario">
                    <button class="MostrarInformacion" id="${CitasParaEF[CRPDE].idCita}"><ion-icon name="eye-outline" id="${CitasParaEF[CRPDE].idCita}"></ion-icon></button>
                </div>
            </div>
        `;
        CambiarEstadoDeCitasObtenidas(CitasParaEF);
    }
}
function CambiarEstadoDeCitasObtenidas(CitasParaEF){
    let ListaRegistroPorDiaSeleccionado = document.querySelectorAll(".Registro");
    let ListaDeOjosSeleccionados = document.querySelectorAll(".MostrarInformacion ion-icon");
    let NumeroDeRegistros = ListaRegistroPorDiaSeleccionado.length;
    for(RSC = 0; RSC < NumeroDeRegistros; RSC++){
        if(CitasParaEF[RSC].ActivaCita === "NO"){
            ListaRegistroPorDiaSeleccionado[RSC].classList.add("Concluido");
            ListaDeOjosSeleccionados[RSC].setAttribute("name","checkmark-done-outline");
        }
    }
}
//LOS SIGUIENTES PASOS ESTAN EN VERCITAS.JS
function NoTienesCitasParaEseDia(BusquedaPorFecha){
    AgregarEnSeccion2.innerHTML = '';
    AgregarEnSeccion2.innerHTML += `
    <div class="RegistrosPorFecha">
        <p class="Fecha">No tienes citas para el día ${BusquedaPorFecha}</p>
    </div>
    <div class="NoHayCitasRegistradas">
        <img src="../RecursosSVG/NoCitas.svg" alt="Img No Citas" class="ImagenNoCitas">
    </div>
    `;
    document.querySelector(".Fecha").style.background = "#E7625F";
    document.querySelector(".Fecha").style.color = "#ffffff";
}
