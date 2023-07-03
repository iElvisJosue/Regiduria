<div class="RegistrarContacto">
    <form class="Form-Informacion" id="Form-RegistrarContacto">
        <div class="Form-Titulo">
            <span class="Form-RegistrarCerrar">
                <ion-icon name="chevron-back-outline" class="Form-IconoCerrar"></ion-icon>
            </span>
            <p class="Form-TituloRegistrar">agregar nuevo contacto</p>
        </div>
        <div class="Form-Nombre">
            <p class="Form-TituloNombre">Nombre *</p>
            <input type="text" maxlength="100" class="Form-InputNombre" id="RegistrarContacto_Nombre" required>
        </div>
        <div class="Form-Telefono">
            <p class="Form-TituloTelefono">Telefono *</p>
            <input type="number" onKeyPress="if(this.value.length==10) return false;" id="RegistrarContacto_Telefono"  maxlength="10" class="Form-InputTelefono" onkeypress="SoloNumeros()" required>
        </div>
        <div class="Form-Ocupacion">
            <p class="Form-TituloOcupacion">Ocupacion</p>
            <input type="text" maxlength="100" class="Form-InputOcupacion" id="RegistrarContacto_Ocupacion">
        </div>
        <div class="Form-Municipio" >
            <p class="Form-TituloMunicipio">Municipio</p>
            <select name="Form-ListaMunicipios" class="Form-InputMunicipio" onchange="ObtenerColonias()" id="RegistrarContacto_Municipio">
                <option disabled selected value>Selecciona un municipio</option>
            </select>
        </div>
        <div class="Form-Colonia">
            <p class="Form-TituloColonia">Colonia</p>
            <select name="Form-ListColonias" class="Form-InputColonia" id="RegistrarContacto_Colonia">
            </select>
        </div>
        <div class="Form-Calle">
            <p class="Form-TituloCalle">Calle</p>
            <input type="text" maxlength="100" class="Form-InputCalle" id="RegistrarContacto_Calle"></input>
        </div>
        <div class="Form-Archivo">
            <p class="Form-TituloArchivo">Foto</p>
            <input type="file" name="archivo" class="Form-InputArchivo" id="FotoContacto" accept="image/*">
        </div>
        <button type="submit" class="Form-GuardarRegistroContacto">Guardar</button>
    </form>
</div>
