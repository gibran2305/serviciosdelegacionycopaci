<?php
$conexion = new mysqli("localhost", "root", "", "formulario_quejas");
if ($conexion->connect_error) {
 die("Error de conexión: " . $conexion->connect_error);
}
?>