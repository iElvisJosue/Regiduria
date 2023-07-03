const BotonBuscarBarraDeBusqueda = document.querySelector(".BotonBuscar");
const TerminarBusqueda = document.querySelector(".TerminarBusqueda");
const BarraBuscar = document.querySelector(".Buscar");
const BGSeccion2 = document.querySelector(".Seccion-2");

let BGCitasPendientes;
let BGCitasConcluidas;

BotonBuscarBarraDeBusqueda.addEventListener("click", () => {
    let ContenidoBuscar = document.querySelector(".Buscar").value.toUpperCase();
    if(ContenidoBuscar != ''){
        TerminarBusqueda.style.display = "block";
        ObtenerCitasPorContenidoABuscar(ContenidoBuscar);
    }
})
TerminarBusqueda.addEventListener("click", () => {
    document.querySelector(".Buscar").value = '';
    TerminarBusqueda.style.display = "none";
    ObtenerFechaCita();
})
function ObtenerCitasPorContenidoABuscar(ContenidoBuscar){
    $.ajax({
        data: { ContenidoBuscar },
        url: '../ArchivosPHP/CitasPorBusquedaGeneral.php', 
        dataType: 'JSON',
        type: 'POST'
    }).done(function(CitasBG){
        let CantidadDeCitasBG = CitasBG.length;
        VerificarEstadoDeLaCitaBG(CitasBG, CantidadDeCitasBG);
        if (CantidadDeCitasBG > 0){
            HayCitasEnBG(ContenidoBuscar, CitasBG, CantidadDeCitasBG);
        }else{
            NoHayCitasEnBG(ContenidoBuscar);
        }
    }).fail(function(){
        console.log("Error en ajax OBTENER CITA POR BUSQUEDA GENERAL");
    });
}
function VerificarEstadoDeLaCitaBG(CitasBG, CantidadDeCitasBG){
    BGCitasPendientes = 0;
    BGCitasConcluidas = 0;
    for(VEDCBG = 0; VEDCBG < CantidadDeCitasBG; VEDCBG++){
        if(CitasBG[VEDCBG].ActivaCita === "SI"){
            BGCitasPendientes++;
        }else{
            BGCitasConcluidas++;
        }
    }
}
function HayCitasEnBG(ContenidoBuscar, CitasBG, CantidadDeCitasBG){
    console.log(CitasBG);
    console.log(CantidadDeCitasBG);
    BGSeccion2.innerHTML = '';
    BGSeccion2.innerHTML += `
    <div class="RegistrosPorFecha">
        <p class="Fecha">Resultados para: ${ContenidoBuscar} | pendientes: ${BGCitasPendientes} | concluidas: ${BGCitasConcluidas}</p>
    </div>
    `;
    document.querySelector(".Fecha").style.background = "#41729F";
    document.querySelector(".Fecha").style.color = "#ffffff";

    let RegistrosPorFecha = document.querySelector('.RegistrosPorFecha');

    for(CDCPED = 0; CDCPED < CantidadDeCitasBG; CDCPED++){
        RegistrosPorFecha.innerHTML += `
            <div class="Registro">
                <div class="FotoDelUsuario">
                    <img src="../FotoContacto/${CitasBG[CDCPED].FotoContacto}" alt="FotoPerfil" class="FotoPerfil">
                </div>
                <div class="Informacion">
                    <p class="FechaHora"><ion-icon name="calendar-clear-outline"></ion-icon>${CitasBG[CDCPED].FechaCita} | <ion-icon name="time-outline"></ion-icon>${CitasBG[CDCPED].HoraCita}</p>
                    <p class="ColoniaMunicipio">${CitasBG[CDCPED].MunicipioCita}, ${CitasBG[CDCPED].ColoniaCita}</p>
                    <p class="Nombre">${CitasBG[CDCPED].NombreContacto}</p>
                    <p class="Asunto">${CitasBG[CDCPED].AsuntoCita}</p>
                </div>
                <div class="VerUsuario">
                    <button class="MostrarInformacion" id="${CitasBG[CDCPED].idCita}"><ion-icon name="eye-outline" id="${CitasBG[CDCPED].idCita}"></ion-icon></button>
                </div>
            </div>
        `;
        CambiarEstadoDeCitasBG(CitasBG);
    }
}

function CambiarEstadoDeCitasBG(CitasBG){
    let BGListaDeRegistros = document.querySelectorAll(".Registro");
    let BGListaDeOjos = document.querySelectorAll(".MostrarInformacion ion-icon");
    let BGNumeroDeRegistros = BGListaDeRegistros.length;
    for(RCBG = 0; RCBG < BGNumeroDeRegistros; RCBG++){
        if(CitasBG[RCBG].ActivaCita === "NO"){
            BGListaDeRegistros[RCBG].classList.add("Concluido");
            BGListaDeOjos[RCBG].setAttribute("name","checkmark-done-outline");
        }
    }
}

//LOS SIGUIENTES PASOS ESTAN EN VERCITAS.JS
function NoHayCitasEnBG(ContenidoBuscar){
    AgregarEnSeccion2.innerHTML = '';
    AgregarEnSeccion2.innerHTML += `
    <div class="RegistrosPorFecha">
        <p class="Fecha">No obtuvimos resultados para: ${ContenidoBuscar}</p>
    </div>
    <div class="NoHayCitasRegistradas">
        <img src="../RecursosSVG/NoResultados.svg" alt="SinResultados" class="ImagenNoCitas">
    </div>
    `;
    document.querySelector(".Fecha").style.background = "#E7625F";
    document.querySelector(".Fecha").style.color = "#ffffff";
}