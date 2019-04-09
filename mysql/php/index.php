<?php

$ini = parse_ini_file("config.ini");
$host = $ini["host"];
$port = $ini["port"];
$username = $ini["username"];
$passwd = $ini["passwd"];
$database = $ini["database"];


$conn = mysqli_connect($host, $username, $passwd, $database, $port);

$sql = "DROP TABLE IF EXISTS `test`;";
$ret = mysqli_query($conn, $sql);
echo "Drop table: '" . $ret . "'\n";

$sql = "CREATE TABLE IF NOT EXISTS `test` (`id` int(11) AUTO_INCREMENT, `body` text, PRIMARY KEY(`id`));";
$ret = mysqli_query($conn, $sql);
echo "Create table: '" . $ret . "'\n";

$sql = "INSERT INTO `test` (body) VALUES ('Hello');";
$ret = mysqli_query($conn, $sql);
echo "Insert: '" . $ret . "'\n";

$sql = "SELECT * FROM `test`;";
$ret = mysqli_query($conn, $sql);
if (mysqli_num_rows($ret) > 0) {
    while ($row = mysqli_fetch_assoc($ret)) {
	echo "* [" . $row["id"] . "] - '" . $row["body"] . "'\n";
    }
} else {
    echo "No record\n";
}

mysqli_close($conn);
?>
