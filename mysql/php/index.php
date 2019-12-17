<?php header('Content-Type: text/plain'); ?>
<?php

$ini = parse_ini_file("config.ini");
if (!$ini) {
    echo "[ERROR] No config.ini File";
    exit(1);
}
$host = $ini["host"];
$port = $ini["port"];
$username = $ini["username"];
$passwd = $ini["passwd"];
$database = $ini["database"];


$conn = mysqli_connect($host, $username, $passwd, $database, $port);

echo "[X] Drop Table\n";
$sql = "DROP TABLE IF EXISTS `test`;";
$ret = mysqli_query($conn, $sql);
echo "Result: '" . $ret . "'\n";

echo "[X] Create Table\n";
$sql = "CREATE TABLE IF NOT EXISTS `test` (`id` int(11) AUTO_INCREMENT, `body` text, PRIMARY KEY(`id`));";
$ret = mysqli_query($conn, $sql);
echo "Result: '" . $ret . "'\n";

echo "[X] Insert\n";
$hello = "Hello";
$sql = "INSERT INTO `test` (body) VALUES ('$hello');";
$ret = mysqli_query($conn, $sql);
echo "Result: '" . $ret . "'\n";

echo "[X] Select\n";
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
