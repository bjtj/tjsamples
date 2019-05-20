<?php

session_start();

function is_login()
{
    if (isset($_SESSION["login_user"]))
    {
	return true;
    }
    return false;
}

function handle_login($username, $password)
{
    if ($username == "user" && $password == "pass") {
	$_SESSION["login_user"] = $username;
	return true;
    }
    return false;
}

function logout()
{
    session_unset();
    session_destroy();
}

$login_failed = false;

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if ($_POST["op"] == "login") {
	$login_failed = !handle_login($_POST["username"], $_POST["password"]);
    }

    if ($_POST["op"] == "logout") {
	logout();
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
	<title>Login</title>
	<style type="text/css" media="screen">
	 body {
	     margin: 2em;
	     font-size: 0.9em;
	 }
	 input {
	     font-size: 0.9em;
	 }
	</style>
    </head>
    <body>
	<?php
	if (is_login())
	{
	?>

	    <!-- login info -->
	    <form method="POST" action="">
		<input type="hidden" name="op" value="logout" />
		Hello, <?= $_SESSION["login_user"] ?>
		<input type="submit" name="" value="logout" />
	    </form>

	<?php
	} else {
	?>

	    <!-- login form -->
	    <form method="POST" action="">
		<input type="hidden" name="op" value="login" />
		<h1>Login</h1>
		<p>
		    <input type="text" name="username" value="" />
		    /
		    <input type="password" name="password" value="" />
		</p>
		<input type="submit" name="" value="Login" />
	    </form>

	<?php
	}
	?>

	<script type="text/javascript">
	 <?php
	 if ($login_failed) {
	 ?>
	 alert("Login failed!");
	 <?php
	 }
	 ?>
	</script>
    </body>
</html>
