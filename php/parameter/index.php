
<pre>
<?php
if (isset($argv)) {
    echo "'\$argv'\n";
    print_r($argv);
}
?>
</pre>
<h2>GET</h2>
<pre>
<?php print_r($_GET); ?>
</pre>
<h2>POST</h2>
<pre>
<?php
print_r($_POST);
?>
</pre>
<p><a href="?msg=hello">GET</a></p>
<form method="POST" action="">
    <input type="hidden" name="val" value="value" />
    <input type="submit" name="button" value="Post" />
</form>

<pre>
<?php
if ($_POST) {
    echo "val: $_POST[val]\n";
    echo "val: " . $_POST[val];
}
?>
</pre>
