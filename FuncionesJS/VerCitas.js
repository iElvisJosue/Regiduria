let Seccion2 = document.querySelector(".Seccion-2");
let VerInformacion = document.querySelector(".VerInformacion");
let InformacionCerrar = document.querySelector('.Informacion-Cerrar');
let InformacionIconoMostrar = document.querySelector('.Informacion-IconoMostrar');
let InformacionDatosDelContacto = document.querySelector('.Informacion-DatosDelContacto');
let InformacionImgUsuario = document.querySelector('.Informacion-ImgUsuario');
let VerCitasInformacionConcluido = document.querySelector(".Informacion-Concluido");
let VerCitasInformacionEditar = document.querySelector(".Informacion-Editar");

//INFORMACION DEL CONTACTO DE SU CITA
let ContactoNombreCompleto = document.querySelector(".Contacto-NombreCompleto");
let ContactoNumeroTelefono = document.querySelector(".Contacto-NumeroTelefono");
let ContactoNombreOcupacion = document.querySelector(".Contacto-NombreOcupacion");
let ContactoNombreMunicipio = document.querySelector(".Contacto-NombreMunicipio");
let ContactoNombreColonia = document.querySelector(".Contacto-NombreColonia");
let ContactoNombreCalle = document.querySelector(".Contacto-NombreCalle");

//INFORMACION DE LA CITA DEL CONTACTO
let CitaFechaFinal = document.querySelector(".Cita-FechaFinal");
let CitaHoraFinal = document.querySelector(".Cita-HoraFinal");
let CitaNombreMunicipio = document.querySelector(".Cita-NombreMunicipio");
let CitaNombreColonia = document.querySelector(".Cita-NombreColonia");
let CitaNombreCalle = document.querySelector(".Cita-NombreCalle");
let CitaAsuntoDetalles = document.querySelector(".Cita-AsuntoDetalles");
let CitaComentariosDetalles = document.querySelector(".Cita-ComentariosDetalles");
let CitaListaDocumentos = document.querySelector(".Cita-ListaDocumentos");

let FechasDistintas;
let idDeLaCitaSeleccionada;

InformacionCerrar.addEventListener('click', () => {
    VerInformacion.classList.remove('Mostrar');
    ObteniendoPrincipal.classList.remove('OcultarPrincipal');
 })
 InformacionIconoMostrar.addEventListener('click', () => {
    InformacionDatosDelContacto.classList.toggle('Mostrar-Informacion-DatosDelContacto');
    InformacionIconoMostrar.classList.toggle('RotarIcono');
})
function ObtenerFechaCita(){
    Seccion2.innerHTML = '';
    $.ajax({
        url: '../ArchivosPHP/ObtenerCitasPorDia.php', 
        dataType: 'JSON',
        type: 'POST'
    }).done(function(MismoDia){ 
        ObtenerPreviewCitas(MismoDia);
    }).fail(function(){
        console.log("Error en ajax obtener fecha por cita");
    });
}
function ObtenerPreviewCitas(MismoDia){
    $.ajax({
        url: '../ArchivosPHP/ObtenerPreviewCitas.php', 
        dataType: 'JSON',
        type: 'POST'
    }).done(function(ListaCitas){ 
        let VerificarCantidadDeCitas = ListaCitas.length;
        if (VerificarCantidadDeCitas > 0){
            MostrarTodasLasCitas(ListaCitas, MismoDia);
        }else{
            Seccion2.innerHTML = `
            <div class="NoHayCitasRegistradas">
                <p class="TituloNoHayCitas">Aún no hay citas registradas</p>    
                <img src="../RecursosSVG/SinAgregar.svg" alt="SinCitasAgregadas" class="ImagenNoCitas">
            </div>
            `;
        }
    }).fail(function(){
        console.log("Error en ajax OBTENER CITAS");
    });
}
function MostrarTodasLasCitas(ListaCitas, MismoDia){
    FechasDistintas = MismoDia.length;
    let CitasTotales = ListaCitas.length;
    for (FD = 0; FD < FechasDistintas; FD++){
        Seccion2.innerHTML += `
        <div class="RegistrosPorFecha">
            <p class="Fecha">Citas creadas el ${MismoDia[FD].MismoDia}</p>
        </div>
        `;
        
        let RegistrosPorFecha = document.querySelectorAll('.RegistrosPorFecha');
        
        for(CT = 0; CT < CitasTotales; CT++){
            if(ListaCitas[CT].FechaCreacionCita === MismoDia[FD].MismoDia){
                RegistrosPorFecha[FD].innerHTML += `
                    <div class="Registro">
                        <div class="FotoDelUsuario">
                            <img src="../FotoContacto/${ListaCitas[CT].FotoContacto}" alt="FotoPerfil" class="FotoPerfil">
                        </div>
                        <div class="Informacion">
                            <p class="FechaHora"><ion-icon name="calendar-clear-outline"></ion-icon>${ListaCitas[CT].FechaCita} | <ion-icon name="time-outline"></ion-icon>${ListaCitas[CT].HoraCita}</p>
                            <p class="ColoniaMunicipio">${ListaCitas[CT].MunicipioCita}, ${ListaCitas[CT].ColoniaCita}</p>
                            <p class="Nombre">${ListaCitas[CT].NombreContacto}</p>
                            <p class="Asunto">${ListaCitas[CT].AsuntoCita}</p>
                        </div>
                        <div class="VerUsuario">
                            <button class="MostrarInformacion" id="${ListaCitas[CT].idCita}"><ion-icon name="eye-outline" id="${ListaCitas[CT].idCita}"></ion-icon></button>
                        </div>
                    </div>
                `;
            }
        }
    }
    CambiarEstadoDeCita(ListaCitas);
}
function CambiarEstadoDeCita(ListaCitas){
    let ListaDeRegistros = document.querySelectorAll(".Registro");
    let ListaDeOjos = document.querySelectorAll(".MostrarInformacion ion-icon");
    let NumeroDeRegistros = ListaDeRegistros.length;
    for(RC = 0; RC < NumeroDeRegistros; RC++){
        if(ListaCitas[RC].ActivaCita === "NO"){
            ListaDeRegistros[RC].classList.add("Concluido");
            ListaDeOjos[RC].setAttribute("name","checkmark-done-outline");
        }
    }
}
Seccion2.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'ION-ICON'){
        idDeLaCitaSeleccionada = e.target.id;
        ObtenerTodosLosDatosDeLaCitaSeleccionada();
    }
});
function ObtenerTodosLosDatosDeLaCitaSeleccionada(){
    $.ajax({
        data: { idDeLaCitaSeleccionada },
        url: '../ArchivosPHP/ObtenerCita.php', 
        dataType: 'JSON',
        type: 'POST'
    }).done(function(DatosDeLaCita){
        if(DatosDeLaCita[0].ActivaCita === "NO"){
            VerCitasInformacionConcluido.style.display = "none";
            MostrarDatosDelaCita(DatosDeLaCita);
        }else{
            MostrarDatosDelaCita(DatosDeLaCita);
            VerCitasInformacionConcluido.style.display = "block";
        }
    }).fail(function(){
        console.log("Error en ajax obtener informacion de la cita");
    });
}
function MostrarDatosDelaCita(DatosDeLaCita){
    InformacionImgUsuario.src = `../FotoContacto/${DatosDeLaCita[0].FotoContacto}`;
    ContactoNombreCompleto.innerHTML = `${DatosDeLaCita[0].NombreContacto}`;
    ContactoNumeroTelefono.innerHTML = `${DatosDeLaCita[0].TelefonoContacto}`;
    ContactoNombreOcupacion.innerHTML = `${DatosDeLaCita[0].OcupacionContacto}`;
    ContactoNombreMunicipio.innerHTML = `${DatosDeLaCita[0].MunicipioContacto}`;
    ContactoNombreColonia.innerHTML = `${DatosDeLaCita[0].ColoniaContacto}`;
    ContactoNombreCalle.innerHTML = `${DatosDeLaCita[0].CalleContacto}`;
    CitaFechaFinal.innerHTML = `${DatosDeLaCita[0].FechaCita}`;
    CitaHoraFinal.innerHTML = `${DatosDeLaCita[0].HoraCita}`;
    CitaNombreMunicipio.innerHTML = `${DatosDeLaCita[0].MunicipioCita}`;
    CitaNombreColonia.innerHTML = `${DatosDeLaCita[0].ColoniaCita}`;
    CitaNombreCalle.innerHTML = `${DatosDeLaCita[0].CalleCita}`;
    CitaAsuntoDetalles.innerHTML = `${DatosDeLaCita[0].AsuntoCita}`;
    CitaComentariosDetalles.innerHTML = `${DatosDeLaCita[0].ComentariosCita}`;
    ObteniendoPrincipal.classList.add('OcultarPrincipal');
    VerInformacion.classList.add('Mostrar');
    ObtenerArchivosDeLaCita();
}
function ObtenerArchivosDeLaCita(){
    $.ajax({
        data: { idDeLaCitaSeleccionada },
        url: '../ArchivosPHP/ObtenerArchivosCita.php', 
        dataType: 'JSON',
        type: 'POST'
    }).done(function(ArchivosDeLaCita){
        CitaListaDocumentos.innerHTML = '';
        let CantidadDeArchivos = ArchivosDeLaCita.length;
        if (CantidadDeArchivos > 0){
            for(CDAC = 0; CDAC < CantidadDeArchivos; CDAC++){
                CitaListaDocumentos.innerHTML += `
                <div class="Cita-Archivos">
                    <span class="Cita-IconoDocumento"><ion-icon name="document-outline"></ion-icon></span>
                    <div class="Cita-NombreDelDocumento">${ArchivosDeLaCita[CDAC].NombreArchivo}</div>
                    <a href="../ArchivosCita/${ArchivosDeLaCita[CDAC].NombreArchivo}" class="Cita-IconoDescargar" download="${ArchivosDeLaCita[CDAC].NombreArchivo}">
                        <ion-icon name="arrow-down-circle-outline"></ion-icon>
                    </a>
                </div>`;
            }
        }else{
            console.log("No tiene archivos");
        }
    }).fail(function(){
        console.log("Error en ajax obtener archivos de la cita");
    });
}
