<div class="RegistrarCita">
    <form class="Form-Cita" id="Form-RegistrarCita" enctype="multipart/form-data">
        <div class="Form-TituloCita">
            <span class="Form-CitaCerrar">
                <ion-icon name="chevron-back-outline" class="Form-IconoCitaCerrar"></ion-icon>
            </span>
            <p class="Form-TituloRegistrarCita">agregar nueva cita</p>
        </div>
        <div class="Form-CitaNombre">
            <p class="Form-CitaTituloNombre">Nombre del contacto</p>
            <div class="Form-CitaInputNombre">
                <input type="text" class="Form-InputBuscarContactoEnCita">
                <button type="button" class="Form-BotonAbrirContacto"><ion-icon name="add-outline"></ion-icon></button>
            </div>
            <div class="Form-RegistrarCitaResultadoDeBusqueda">

            </div>
            <input type="hidden" value="" id="Form-idDelContacto">
        </div>
        <div class="Form-CitaFecha">
            <p class="Form-CitaTituloFecha">Fecha de encuentro *</p>
            <input type="date" min="2021-12-01" max="2100-12-31" class="Form-CitaInputFecha" onchange="ComprobarActivarBoton();" id="Form-CitaInputFecha" disabled>
        </div>
        <div class="Form-CitaHora">
            <p class="Form-CitaTituloHora">Hora de encuentro *</p>
            <input type="time" class="Form-CitaInputHora" onchange="ComprobarActivarBoton();" id="Form-CitaInputHora" disabled>
        </div>
        <div class="Form-CitaMunicipio">
            <p class="Form-CitaTituloMunicipio">Municipio *</p>
            <select name="Form-ListaMunicipios" class="Form-CitaInputMunicipio" onchange="CitaObtenerColonias(); ComprobarActivarBoton();" id="Form-CitaInputMunicipio" disabled>
                <option disabled selected value>Selecciona un municipio</option>
            </select>
        </div>
        <div class="Form-CitaColonia">
            <p class="Form-CitaTituloColonia">Colonia *</p>
            <select name="Form-ListColonias" class="Form-CitaInputColonia" onchange="ComprobarActivarBoton();" id="Form-CitaInputColonia" disabled>
            </select>
        </div>
        <div class="Form-CitaCalle">
            <p class="Form-CitaTituloCalle">Calle *</p>
            <input type="text" maxlength="100" class="Form-CitaInputCalle" onkeyup="ComprobarActivarBoton()" id="Form-CitaInputCalle" disabled>
        </div>
        <div class="Form-CitaAsunto">
            <p class="Form-CitaTituloAsunto">Asunto *</p>
            <input type="text" maxlength="1000" class="Form-CitaInputAsunto" onkeyup="ComprobarActivarBoton()" id="Form-CitaInputAsunto" disabled>
        </div>
        <div class="Form-CitaComentarios">
            <p class="Form-CitaTituloComentarios">Comentarios</p>
            <input type="text" maxlength="1000" class="Form-CitaInputComentarios" id="Form-CitaInputComentarios" disabled>
        </div>
        <div class="Form-CitaArchivos">
            <p class="Form-CitaTituloArchivo">Archivos (Max: 5)</p>
            <input type="file" name="archivo[]" class="Form-CitaInputArchivo" id="ArchivosCita" multiple disabled>
        </div>
        <button type="submit" class="Form-GuardarRegistroCita">Guardar</button>
    </form>
</div>
