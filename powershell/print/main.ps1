
# Basic

Write-Host "Hello world"
Write-Output "Hello world"

# Write-Host vs. Write-Output

Write-Host "msgtxt" | Get-Service            # OUTPUT: msgtxt
[Console]::WriteLine("msgtxt") | Get-Service # OUTPUT: msgtxt
Write-Output "msgtxt" | Get-Service # OUTPUT: get-service : 서비스 이름이 'msgtxt'인 서비스를 찾을 수 없습니다.

# Ref: https://stackoverflow.com/a/19754407/5676460
