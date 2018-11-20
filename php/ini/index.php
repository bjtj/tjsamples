<?php

header('Content-Type: text/plain');

$config = parse_ini_file('config.cfg');
print_r($config);

print($config['msg'] . "\n");

$config = parse_ini_file('config.cfg', true);
print_r($config);

print($config['msg'] . "\n");
print($config['section1']['msg'] . "\n");
?>
