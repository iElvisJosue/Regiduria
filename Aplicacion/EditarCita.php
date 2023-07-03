<div class="EditarCita">
    <form class="Form-EditarCita" enctype="multipart/form-data">
        <div class="Form-TituloEditarCita">
            <span class="Form-EditarCitaCerrar">
                <ion-icon name="chevron-back-outline" class="Form-IconoEditarCitaCerrar"></ion-icon>
            </span>
            <p class="Form-TituloRegistrarEditarCita">Editar cita</p>
        </div>
        <div class="Form-EditarCitaNombre">
            <p class="Form-EditarCitaTituloNombre">Nombre del contacto *</p>
            <input type="text" class="Form-EditarCitaInputNombre">
            <div class="Form-EditarCitaResultadoDeBusqueda">
            </div>
            <input type="hidden" id="Form-idDelContactoCitaAEditar">
        </div>
        <div class="Form-EditarCitaFecha">
            <p class="Form-EditarCitaTituloFecha">Fecha de encuentro *</p>
            <input type="date" min="2021-12-01" max="2100-12-31" class="Form-EditarCitaInputFecha" onchange="VerificarCamposDeCitaEditar();">
        </div>
        <div class="Form-EditarCitaHora">
            <p class="Form-EditarCitaTituloHora">Hora de encuentro *</p>
            <input type="time" class="Form-EditarCitaInputHora" onchange="VerificarCamposDeCitaEditar();">
        </div>
        <div class="Form-EditarCitaMunicipio">
            <p class="Form-EditarCitaTituloMunicipio">Municipio (CITA) *</p>
            <select name="Form-EditarCitaInputMunicipio" class="Form-EditarCitaInputMunicipio" onchange="ObtenerColoniasCitaAEditar();">
                <option disabled selected value="">Seleccionar municipio</option>
            </select>
        </div>
        <div class="Form-EditarCitaColonia">
            <p class="Form-EditarCitaTituloColonia">Colonia (CITA) *</p>
            <select name="Form-ListColonias" class="Form-EditarCitaInputColonia" onchange="VerificarCamposDeCitaEditar();">
            </select>
        </div>
        <div class="Form-EditarCitaCalle">
            <p class="Form-EditarCitaTituloCalle">Calle (CITA) *</p>
            <input type="text" maxlength="100" class="Form-EditarCitaInputCalle">
        </div>
        <div class="Form-EditarCitaAsunto">
            <p class="Form-EditarCitaTituloAsunto">Asunto *</p>
            <input type="text" maxlength="1000" class="Form-EditarCitaInputAsunto">
        </div>
        <div class="Form-EditarCitaComentarios">
            <p class="Form-EditarCitaTituloComentarios">Comentarios</p>
            <input type="text" maxlength="1000" class="Form-EditarCitaInputComentarios">
        </div>
        <p class="EditarCita-Documentos"></p>
        <div class="EditarCita-ListaDocumentos">
        </div>
        <div class="Form-EditarCitaArchivos">
            <p class="Form-EditarCitaTituloArchivo">Archivos (Max: 5)</p>
            <input type="file" name="archivo" id="EditarArchivosCita" onchange="SubirArchivosNuevo()" class="Form-EditarCitaInputArchivo">
        </div>
        <button type="submit" class="Form-EditarCitarGuardar">Guardar</button>
    </form>
</div>