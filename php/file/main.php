<?php
header("Content-Type: text/plain");

/* write */
$file = fopen("out.txt", "w") or die("fopen() failed");
fwrite($file, "hello world");
fclose($file);

/* read */
$file = fopen("out.txt", "r") or die("fopen() failed");
$dump = fread($file, filesize("out.txt"));
fclose($file);

echo "dump: " . $dump . "\n";

/* function */

function write($filename, $content)
{
    $file = fopen($filename, "w") or die("fopen() failed -- '$filename'");
    fwrite($file, $content);
    fclose($file);
}

function dump($filename)
{
    /* 
     * filesize() is statcached 
     *  - https://stackoverflow.com/a/3748002
     */
    clearstatcache();
    
    $file = fopen($filename, "r") or die("fopen() failed -- '$filename'");
    $ret = fread($file, filesize($filename));
    fclose($file);
    return $ret;
}


$page = file_get_contents("http://example.com");
write("out.txt", $page);
echo dump("out.txt");

/* file_***_contents() */

file_put_contents("out.txt", "end.");
echo file_get_contents("out.txt") . "\n";

/* FILE MODIFIATION TIME */

echo filemtime("out.txt") . "\n";
/* https://www.php.net/manual/en/function.date.php */
echo date("Y-m-d H:i:s", filemtime("out.txt")) . "\n";

?>
