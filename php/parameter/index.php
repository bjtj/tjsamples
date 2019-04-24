<pre>
<?php
if (isset($argv)) {
    echo "'\$argv'\n";
    print_r($argv);
}
echo "'\$_GET'\n";
print_r($_GET);
echo "'\$_POST'\n";
print_r($_POST);
?>
</pre>
<p><a href="?msg=hello">GET</a></p>
<form method="POST" action="">
    <input type="hidden" name="val" value="value" />
    <input type="submit" name="button" value="Post" />
</form>
