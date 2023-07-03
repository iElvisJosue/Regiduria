<?php

    foreach ($_FILES['archivo']['tmp_name'] as $key => $tmp_name) {
        
        if($_FILES['archivo']['name'][$key]){
            $nombre = $_FILES['archivo']['name'][$key];
            $nombre_temporal = $_FILES['archivo']['tmp_name'][$key];
            move_uploaded_file($nombre_temporal, '../ArchivosCita/' .$nombre);

        }
    }
    // $nombre_temporal = $_FILES['archivo']['tmp_name'];
    // $nombre = $_FILES['archivo']['name'];
    // move_uploaded_file($nombre_temporal, '../ArchivosCita/' .$nombre);
?>