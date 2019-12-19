<?php

$json_string = '{"name": "TJ"}';

$obj = json_decode($json_string);

var_dump($obj);

echo $obj->name . "\n";

$json_string = json_encode($obj);

echo $json_string . "\n";
?>
