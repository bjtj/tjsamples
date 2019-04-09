<?php
session_start();
if (isset($_SESSION["favcolor"])) {
    echo "<p>Favorite color is '" . $_SESSION["favcolor"] . "'.</p>";
    echo "<p>Favorite animal is '" . $_SESSION["favanimal"] . "'.</p>";
} else {
    echo "<p>Session is not set.</p>";
}
?>
<a href="setsession.php">set session</a> | 
<a href="clear.php">clear</a>
