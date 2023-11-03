$processOptions = @{
    FilePath = "hello"
    RedirectStandardOutput = "stdout.txt"
    RedirectStandardError = "stderr.txt"
    UseNewEnvironment = $true
}

$process = (Start-Process -Wait @processOptions -PassThru)

$RETCODE = $process.ExitCode

Write-Output "Exit Code: $($RETCODE)"

if ($RETCODE -eq 0) {
    Write-Output "=== STDOUT ==="
    type stdout.txt
    Write-Output "=== STDERR ==="
    type stderr.txt
}
