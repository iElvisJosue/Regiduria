<div class="Principal">
<header class="Header">
    <img src="../RecursosSVG/Logo.svg" alt="Logo Empresa" class="Logo">    
</header>
<section class="Seccion-1">
    <div class="BarraBusqueda">
        <ion-icon name="close-outline" class="TerminarBusqueda"></ion-icon>
        <input type="text" placeholder="Buscar (Nombre)" class="Buscar">
        <button class="BotonBuscar">
            <ion-icon name="search-sharp" class="IconoBuscar"></ion-icon>
        </button>
    </div>
    <div class="AgregarRegistro">
        <button class="NuevoRC"><ion-icon name="add-sharp"></ion-icon></button>
        <button class="NuevoContacto"><ion-icon name="person-circle-outline"></ion-icon></button>
        <button class="NuevaCita"><ion-icon name="calendar-number-outline"></ion-icon></button>
        <button class="CerrarSesion"><ion-icon name="log-out-outline"></ion-icon></button>
    </div>
</section>

<div class="FiltrosDeBusqueda">
    <div class="FiltroPorContacto">
        <ion-icon name="person-circle-outline" class="IconoFiltroContacto"></ion-icon>
        <ion-icon name="search-outline" class="IconoFiltroBusqueda"></ion-icon>
    </div>
    <div class="FiltroPorFecha">
        <input type="date" min="2021-12-01" max="2100-12-31" id="BusquedaPorFecha" onchange="BusquedaPorFechaEnCalendario()">
        <!-- <button class="BotonBuscarPorFecha">
            <ion-icon name="arrow-forward-outline" class="IconoBuscarPorFecha"></ion-icon>
        </button> -->
        <button class="BotonBorrarFecha">
            <ion-icon name="close-outline" class="IconoBorrarFecha"></ion-icon>
        </button>
    </div>
</div>
<ion-icon name="mail-outline" class="SinNotificaciones" onclick="Notificaciones();"></ion-icon>
<ion-icon name="mail-unread-outline" class="ConNotificaciones" onclick="Notificaciones();"></ion-icon>
<section class="Seccion-2">
</section>

</div>