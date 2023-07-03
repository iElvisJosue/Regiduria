<div class="BuscarContacto">
    <form class="Form-InformacionContacto">
        <div class="Form-TituloBuscarContacto">
            <span class="Form-BuscarContactoCerrar">
                <ion-icon name="chevron-back-outline" class="Form-IconoCerrarBuscarContacto"></ion-icon>
            </span>
            <p class="Form-ContactoTitulo">Buscar contacto</p>
            <div class="Form-ModificarContacto">
                <ion-icon name="create-outline" class="Form-ContactoEditar"></ion-icon>
                <ion-icon name="remove-outline" class="Form-ContactoEliminar"></ion-icon>
            </div>
        </div>
        <div class="Form-BuscarContactoPorNombre">
            <p class="Form-TituloBuscarNombrePorContacto">Ingresa el nombre del contacto</p>
            <input type="text" class="Form-InputBuscarNombrePorContacto">
            <div class="Form-ResultadoDeBusquedaContacto">
            </div>
            <input type="hidden" id="Form-idDelContactoAEditar">
            <input type="hidden" id="Form-NombreDelArhivoActual">
        </div>
        <div class="Form-ContactoFotoPreview">
            <div class="Form-ContactoFotoMiniatura">
                <img src="../FotoContacto/Default.png" alt="Preview Foto" class="Form-ImgContactoFotoMiniatura">
                <a class="Form-AbrirInputFile"><ion-icon name="sync-outline" class="Form-ContactoCambiarFoto"></ion-icon></a>
            </div>
        </div>
        <div class="Form-ContactoNombre">
            <p class="Form-TituloContactoNombre">Nombre *</p>
            <input type="text" maxlength="100" id="Editar-InputContactoNombre" class="Form-InputContactoNombre" disabled required>
        </div>
        <div class="Form-ContactoTelefono">
            <p class="Form-TituloContactoTelefono">Telefono *</p>
            <input type="number" onKeyPress="if(this.value.length==10) return false;" maxlength="10" id="Editar-InputContactoTelefono" class="Form-InputContactoTelefono" disabled required>
        </div>
        <div class="Form-ContactoOcupacion">
            <p class="Form-TituloContactoOcupacion">Ocupacion</p>
            <input type="text" maxlength="100" id="Editar-InputContactoOcupacion" class="Form-InputContactoOcupacion" disabled>
        </div>
        <div class="Form-ContactoMunicipio">
            <p class="Form-TituloContactoMunicipio">Municipio</p>
            <select name="Form-ListaMunicipios" class="Form-InputContactoMunicipio" onchange="ObtenerColoniasAEditar();" id="Editar-InputContactoMunicipio" disabled>
                <option disabled selected value="">Selecciona un municipio</option>
            </select>
        </div>
        <div class="Form-ContactoColonia">
            <p class="Form-TituloContactoColonia">Colonia</p>
            <select name="Form-ListColonias" class="Form-InputContactoColonia" id="Editar-InputContactoColonia" disabled>
            </select>
        </div>
        <div class="Form-ContactoCalle">
            <p class="Form-TituloContactoCalle">Calle</p>
            <input type="text" maxlength="100" id="Editar-InputContactoCalle" class="Form-InputContactoCalle" disabled></input>
        </div>
        <div class="Form-ContactoFoto">
            <p class="Form-TituloContactoFoto">Foto</p>
            <input type="file" name="archivo" onchange="VerificarCambioDeFoto()" id="Editar-InputContactoFoto" class="Form-InputContactoFoto" accept="image/*" disabled>
        </div>
        <button type="submit" class="Form-GuardarEdicionContacto">Guardar</button>
    </form>
</div>