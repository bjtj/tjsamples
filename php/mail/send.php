<?php

echo "email: ";
$email = trim(fgets(STDIN));

$msg = "Test email body";

$subject = "Subject: Test email";

mail($email, $subject, $msg);

?>
