<?php 
// PERMITIR O ACESSO DE QUALQUER ORIGEM
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
#define o encoding do cabeçalho para utf-8
header('Content-Type: application/json');

$data = array('sucesso' => "200");

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;


?>