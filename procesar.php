<?php
include("conexion.php");

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$delegacion = $_POST['delegacion'];
$tipo_solicitud = $_POST['tipo_solicitud'];
$descripcion = $_POST['descripcion'];

// Usar consulta preparada para evitar errores y mejorar seguridad
$stmt = $conexion->prepare("INSERT INTO quejas (nombre, telefono, correo, delegacion, tipo_solicitud, descripcion) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $nombre, $telefono, $correo, $delegacion, $tipo_solicitud, $descripcion);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error al guardar el registro: " . $stmt->error;
}

// Cerrar conexión
$stmt->close();
$conexion->close();
?>