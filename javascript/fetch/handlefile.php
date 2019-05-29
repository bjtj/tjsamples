<?php
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $name = $_FILES['file']['name'];
    /* $val = $_POST["file"] ? $_POST["file"] : "no file"; */
    /* echo "FILE: '$val'."; */
    echo "filename: $name";
}
else
{
    echo "No Data";
}
?>
