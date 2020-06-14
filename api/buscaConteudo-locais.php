<?php 
// PERMITIR O ACESSO DE QUALQUER ORIGEM
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
#define o encoding do cabeçalho para utf-8
header('Content-Type: application/json');

$local[0]["nome"] = "Acre";
$local[1]["nome"] = "Alagoas";
$local[2]["nome"] = "Amapá";
$local[3]["nome"] = "Amazonas";
$local[4]["nome"] = "Bahia";
$local[5]["nome"] = "Ceará";
$local[6]["nome"] = "Distrito Federal";
$local[7]["nome"] = "Espírito Santo";
$local[8]["nome"] = "Goiás";
$local[9]["nome"] = "Maranhão";
$local[10]["nome"] = "Mato Grosso";
$local[11]["nome"] = "Mato Grosso do Sul";
$local[12]["nome"] = "Minas Gerais";
$local[13]["nome"] = "Pará";
$local[14]["nome"] = "Paraíba";
$local[15]["nome"] = "Paraná";
$local[16]["nome"] = "Pernambuco";
$local[17]["nome"] = "Piauí";
$local[18]["nome"] = "Rio de Janeiro";
$local[19]["nome"] = "Rio Grande do Norte";
$local[20]["nome"] = "Rio Grande do Sul";
$local[21]["nome"] = "Rondônia";
$local[22]["nome"] = "Roraima";
$local[23]["nome"] = "Santa Catarina";
$local[24]["nome"] = "São Paulo";
$local[25]["nome"] = "Sergipe";
$local[26]["nome"] = "Tocantins";

$data = array('sucesso' => "200",'locais' => $local);

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;


?>