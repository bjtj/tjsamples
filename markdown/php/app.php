<?php
require 'vendor/autoload.php';
use Michelf\Markdown;
$my_html = Markdown::defaultTransform("# hello");
echo $my_html;
?>
