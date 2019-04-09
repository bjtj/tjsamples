<?php
session_start();
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "<p>Session variable are set.</p>";
?>
<a href="/">Back</a>
