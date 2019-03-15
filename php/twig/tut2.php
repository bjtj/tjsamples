<?php
require_once './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./templates');
$pwd = getcwd();
$twig = new \Twig\Environment($loader, [
    'cache' => $pwd . '/compilation_cache',
]);

echo $twig->render('index.html', ['name' => 'Fabien']);
?>
