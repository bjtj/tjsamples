<?php
header('Content-Type: text/plain');
$config = parse_ini_file("config.cfg", true);
$user = $config['db']['username'];
$pass = $config['db']['password'];
$table = "user";
try {
    $dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
    
    /* https://stackoverflow.com/a/19596790/5676460 */
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "create table if not exists $table (
id mediumint not null auto_increment primary key,
name varchar(50) not null)";
    $dbh->exec($sql);
    print("Created $table table.\n");

    $dbh->beginTransaction();
    $dbh->exec("insert into $table (name) values('steve')");
    $dbh->commit();
    
    foreach($dbh->query("select * from $table") as $row) {
	print_r($row);
    }

    $dbh->exec("delete from $table");
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br />";
    die();
}
?>
