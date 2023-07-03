const EditarVerInformacion = document.querySelector(".VerInformacion");
const EditarCita = document.querySelector(".EditarCita");
const BtnEditarVerInformacion = document.querySelector(".Informacion-Editar");
const FormEditarCitaCerrar = document.querySelector(".Form-EditarCitaCerrar");

BtnEditarVerInformacion.addEventListener('click', () => {
    EditarVerInformacion.classList.add('PresioneEC');
    EditarCita.classList.add('EditarCita-Mostrar');
})
FormEditarCitaCerrar.addEventListener('click', () => {
    EditarVerInformacion.classList.remove('PresioneEC');
    EditarCita.classList.remove('EditarCita-Mostrar');
})