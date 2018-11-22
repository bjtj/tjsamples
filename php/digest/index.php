<?php
$realm = 'Secure';

$users = array('admin' => 'mypass', 'guest' => 'guest');

function ask_pass($msg)
{
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate: Digest realm="'.$realm.'",qop="auth",nonce="'.uniqid().
	   '",opaque="'.md5($realm).'"');

    die($msg);
}

if (empty($_SERVER['PHP_AUTH_DIGEST'])) {
    ask_pass('User canceled');
}

$data = http_digest_parse($_SERVER['PHP_AUTH_DIGEST']);
if (!$data || !isset($users[$data['username']]))
{
    ask_pass('Wrong Credentials');
}

$username = $data['username'];
$ha1 = md5($username . ':' . $data['realm'] . ':' . $users[$username]);
$ha2 = md5($_SERVER['REQUEST_METHOD'] . ':' . $data['uri']);
$response = md5($ha1 . ':' . $data['nonce'] . ':' . $data['nc'] . ':' .
                $data['cnonce'] . ':' . $data['qop'] . ':' . $ha2);

if ($data['response'] != $response)
{
    ask_pass('Wrong Password');
}

echo 'Hello, ' . $data['username'];

function http_digest_parse($txt)
{
    $needed_parts = array('nonce' => 1, 'nc' => 1, 'cnonce' => 1, 'qop' => 1, 'username' => 1,
                          'uri' => 1, 'response' => 1);
    $data = array();

    preg_match_all('@(\w+)=(?:([\'"])([^\2]+)]\2|([^\s,]+))@', $txt, $matches, PREG_SET_ORDER);

    foreach ($matches as $m) {
        $data[$m[1]] = str_replace('"', '', $m[3] ? $m[3] : $m[4]);
        unset($needed_parts[$m[1]]);
    }

    $ret = $needed_parts ? false : $data;
    return $ret;
}
?>
